declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
    };
    suffixIcon: {
        type: StringConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: StringConstructor;
    };
    min: {
        type: StringConstructor;
    };
    step: {
        type: StringConstructor;
    };
}, {
    prefixSlot: import("vue").Ref<import("vue").Slot | undefined>;
    suffixSlot: import("vue").Ref<import("vue").Slot | undefined>;
    clearIconVisible: import("vue").ComputedRef<boolean | "" | 0 | undefined>;
    isHover: import("vue").Ref<boolean>;
    onFocus: (e: InputEvent) => void;
    onBlur: (e: InputEvent) => void;
    onInput: (e: InputEvent) => void;
    onChange: (e: InputEvent) => void;
    focus: () => void;
    clear: () => void;
    classes: import("vue").ComputedRef<(string | {
        'ti-input--disabled': boolean;
    })[]>;
    inputInnerClasses: import("vue").ComputedRef<{
        'ti-input--prefix': string | import("vue").Slot | undefined;
        'ti-input--suffix': string | boolean | import("vue").Slot;
    }[]>;
    model: import("vue").WritableComputedRef<string | number | undefined>;
    inputRef: import("vue").Ref<HTMLInputElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "focus" | "blur" | "change" | "clear" | "input")[], "update:modelValue" | "focus" | "blur" | "change" | "clear" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    size?: unknown;
    prefixIcon?: unknown;
    suffixIcon?: unknown;
    placeholder?: unknown;
    clearable?: unknown;
    disabled?: unknown;
    type?: unknown;
    name?: unknown;
    readonly?: unknown;
    max?: unknown;
    min?: unknown;
    step?: unknown;
} & {
    size: string;
    clearable: boolean;
    disabled: boolean;
    type: string;
    readonly: boolean;
} & {
    modelValue?: string | number | undefined;
    prefixIcon?: string | undefined;
    suffixIcon?: string | undefined;
    placeholder?: string | undefined;
    name?: string | undefined;
    max?: string | undefined;
    min?: string | undefined;
    step?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    clearable: boolean;
    disabled: boolean;
    type: string;
    readonly: boolean;
}>;
export default _default;
