declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
    onValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    offValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    onColor: {
        type: StringConstructor;
    };
    offColor: {
        type: StringConstructor;
    };
    handleOnColor: {
        type: StringConstructor;
    };
    handleOffColor: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onText: {
        type: StringConstructor;
    };
    offText: {
        type: StringConstructor;
    };
}, {
    isOn: import("vue").ComputedRef<boolean>;
    switchClasses: import("vue").ComputedRef<(string | {
        [x: string]: string | boolean;
        'is-on': boolean;
        'ti-switch-disabled': boolean;
    })[]>;
    handleSize: import("vue").ComputedRef<number>;
    switchStyles: import("vue").ComputedRef<{
        width: string;
        height: string;
        backgroundColor: string | undefined;
        borderColor: string | undefined;
        paddingRight: string;
        paddingLeft: string;
    }>;
    handleStyles: import("vue").ComputedRef<{
        width: string;
        height: string;
        left: string;
        marginLeft: string | number;
        backgroundColor: string | undefined;
    }>;
    handleChange: (e: Event) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    switchRef: any;
    focus: () => void;
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    type?: unknown;
    width?: unknown;
    height?: unknown;
    onValue?: unknown;
    offValue?: unknown;
    onColor?: unknown;
    offColor?: unknown;
    handleOnColor?: unknown;
    handleOffColor?: unknown;
    disabled?: unknown;
    onText?: unknown;
    offText?: unknown;
} & {
    modelValue: string | number | boolean;
    type: string;
    onValue: string | number | boolean;
    offValue: string | number | boolean;
    disabled: boolean;
} & {
    width?: number | undefined;
    height?: number | undefined;
    onColor?: string | undefined;
    offColor?: string | undefined;
    handleOnColor?: string | undefined;
    handleOffColor?: string | undefined;
    onText?: string | undefined;
    offText?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    onValue: string | number | boolean;
    offValue: string | number | boolean;
    disabled: boolean;
}>;
export default _default;
