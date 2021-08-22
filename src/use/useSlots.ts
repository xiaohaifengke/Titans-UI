import { SetupContext, VNode } from "vue";


export function useSlots(setupContext: SetupContext, slotList: string[] = []) {
    const slots = slotList.reduce((slots, slot) => {
        slots[slot] = (defaultVnode: VNode) => {
            return setupContext.slots[slot]?.() || defaultVnode;
        };
        slots[slot].isExist = () => {
            console.log(setupContext.slots[slot]);
            console.log(setupContext);
            
            return !!setupContext.slots[slot];
        };
        return slots;
    }, {} as any);
    if (!slots['default']) {
        slots['default'] = (defaultVnode: VNode) => {
            return setupContext.slots['default']?.() || defaultVnode;
        };
    }

    return slots;
}