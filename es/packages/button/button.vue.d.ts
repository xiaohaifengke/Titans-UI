declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
    };
    iconPosition: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
    };
    loading: {
        type: BooleanConstructor;
    };
}, {
    classes: (string | {
        [x: string]: string | boolean;
        'ti-button-disabled': boolean;
        'ti-button-loading': boolean;
    })[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (e: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    type?: unknown;
    mode?: unknown;
    shape?: unknown;
    size?: unknown;
    icon?: unknown;
    iconPosition?: unknown;
    disabled?: unknown;
    loading?: unknown;
} & {
    mode: string;
    type: string;
    shape: string;
    size: string;
    iconPosition: string;
    disabled: boolean;
    loading: boolean;
} & {
    label?: string | undefined;
    icon?: string | undefined;
}> & {
    onClick?: ((e: MouseEvent) => any) | undefined;
}, {
    mode: string;
    type: string;
    shape: string;
    size: string;
    iconPosition: string;
    disabled: boolean;
    loading: boolean;
}>;
export default _default;
