export declare function getComponentEmits<T extends {
    [k: string]: any;
}>(emitObject?: T): T;
declare type EmitParameters<EmitsValue> = EmitsValue extends (...args: any[]) => any ? Parameters<EmitsValue> : never;
export declare type ComponentEventHub<Emits> = {
    emit: {
        [key in keyof Emits]: (...args: EmitParameters<Emits[key]>) => void;
    };
    on: {
        [key in keyof Emits]: (fn: (...args: EmitParameters<Emits[key]>) => void) => void;
    };
    once: {
        [key in keyof Emits]: (fn: (...args: EmitParameters<Emits[key]>) => void) => void;
    };
    off: {
        [key in keyof Emits]: (fn: (...args: EmitParameters<Emits[key]>) => void) => void;
    };
};
export declare function useEvent<T>(emitObject?: T): ComponentEventHub<T>;
export {};
