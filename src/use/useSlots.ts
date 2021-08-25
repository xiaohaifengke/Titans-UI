import { VNodeChild } from "@/shims";
import { getCurrentInstance } from "vue";

type SlotFunction = ((vnode?: VNodeChild) => VNodeChild) & { isExist: () => boolean }
type SlotsData<T extends string> = { [k in T]: SlotFunction}

export function useSlots<T extends string>(slotList: T[] = []): SlotsData<T|'default'> {
    const ctx = getCurrentInstance()!;
    const slotNames = [...slotList, 'default'] as T[];
    const slots = slotNames.reduce((slots, slot) => {
        const isExist = () => {
            return !!ctx.slots[slot];
        };
        const slotFn = (defaultVnode: VNodeChild) => {
            return ctx.slots[slot]?.() || defaultVnode;
        };
        slotFn.isExist = isExist;
        slots[slot] = slotFn;
        return slots;
    }, {} as SlotsData<string>);

    return slots;
}