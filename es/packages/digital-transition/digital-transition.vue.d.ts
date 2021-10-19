declare const _default: import("vue").DefineComponent<{
    start: {
        type: NumberConstructor;
        default: number;
    };
    end: {
        type: NumberConstructor;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    accuracy: {
        type: NumberConstructor;
        default: number;
    };
}, {
    digital: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    start?: unknown;
    end?: unknown;
    step?: unknown;
    interval?: unknown;
    duration?: unknown;
    accuracy?: unknown;
} & {
    start: number;
    step: number;
    interval: number;
    duration: number;
    accuracy: number;
} & {
    end?: number | undefined;
}>, {
    start: number;
    step: number;
    interval: number;
    duration: number;
    accuracy: number;
}>;
export default _default;
