import { VNodeChild } from '@/shims';
declare type SlotFunction = ((vnode?: VNodeChild) => VNodeChild) & {
    isExist: () => boolean;
};
declare type SlotsData<T extends string> = {
    [k in T]: SlotFunction;
};
export declare function useSlots<T extends string>(slotList?: T[]): SlotsData<T | 'default'>;
export {};
