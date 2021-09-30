export declare enum StyleShape {
    fillet = "fillet",
    round = "round",
    square = "square"
}
export declare enum StyleSize {
    large = "large",
    normal = "normal",
    small = "small",
    mini = "mini"
}
export declare enum StyleType {
    primary = "primary",
    success = "success",
    error = "error",
    warn = "warn",
    info = "info"
}
export declare const StyleProps: {
    shape: {
        type: StringConstructor;
    };
    size: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
    };
};
interface DefaultStylePropsOption {
    shape?: StyleShape;
    size?: StyleSize;
    type?: StyleType;
}
interface StyleComputed {
    shape?: StyleShape;
    size?: StyleSize;
    type?: StyleType;
}
export declare function useStyle(defaultStylePropsOption: DefaultStylePropsOption): {
    value: StyleComputed;
};
export {};
