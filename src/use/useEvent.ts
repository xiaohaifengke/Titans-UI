import { createEventHub } from "../plugins/Events";
import { SimpleFunction } from "../shims";
import { getCurrentInstance } from "vue";
import { kebabCase } from "../utils";

// manipulate emitName to listenName
function emitNameToListenName(emitName: string): string {
    const match = emitName.match(/^update([A-Z])(\w*)$/);
    if (match) {
        return `update:${match[1].toLowerCase()}${match[2]}`;
    }
    return kebabCase(emitName);
}

export function getComponentEmits<T extends { [k: string]: any }>(emitObject: T = {} as T): T {
    return {
        change: null,
        ...Object.keys(emitObject).reduce((result: any, key: string) => {
            result[emitNameToListenName(key)] = emitObject[key];
            return result;
        }, {})
    };
}

type EmitParameters<EmitsValue> = EmitsValue extends (...args: any[]) => any ? Parameters<EmitsValue> : never
export type ComponentEventHub<Emits> = {
    emit: { [key in keyof Emits]: (...args: EmitParameters<Emits[key]>) => void },
    on: { [key in keyof Emits]: (fn: (...args: EmitParameters<Emits[key]>) => void) => void },
    once: { [key in keyof Emits]: (fn: (...args: EmitParameters<Emits[key]>) => void) => void },
    off: { [key in keyof Emits]: (fn: (...args: EmitParameters<Emits[key]>) => void) => void }
}

export function useEvent<T>(emitObject: T = {} as T): ComponentEventHub<T> {
    const internalInstance = getCurrentInstance()!;
    const eventHub = createEventHub();

    const emit = {} as any;
    const on = {} as any;
    const once = {} as any;
    const off = {} as any;

    Object.keys(emitObject).forEach(eventKey => {
        const kebabCaseName = emitNameToListenName(eventKey);

        emit[eventKey] = (...args: any[]) => {
            internalInstance.emit(kebabCaseName, ...args);
            eventHub.emit(kebabCaseName, ...args);
            if (eventKey === 'updateModelValue') {
                internalInstance.emit('change', ...args);
                eventHub.emit('change', ...args);
            }
        };
        on[eventKey] = (fn: SimpleFunction) => eventHub.on(kebabCaseName, fn);
        once[eventKey] = (fn: SimpleFunction) => eventHub.once(kebabCaseName, fn);
        off[eventKey] = (fn: SimpleFunction) => eventHub.off(kebabCaseName, fn);
    });

    return {
        emit,
        on,
        once,
        off
    };
}