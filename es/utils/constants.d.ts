export declare enum StyleShape {
    fillet = "fillet",
    round = "round",
    square = "square"
}
export declare enum StyleSize {
    normal = "normal",
    large = "large",
    mini = "mini"
}
export declare enum StyleStatus {
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
    status: {
        type: StringConstructor;
    };
};
