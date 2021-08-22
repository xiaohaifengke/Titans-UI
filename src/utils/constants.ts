export enum StyleShape {
    fillet = 'fillet',
    round = 'round',
    square = 'square',
}

export enum StyleSize {
    normal = 'normal',
    large = 'large',
    mini = 'mini',
}

export enum StyleStatus {
    primary = 'primary',
    success = 'success',
    error = 'error',
    warn = 'warn',
    info = 'info',
}

export const StyleProps = {
    shape: {type: String},                      // fillet,round,square
    size: {type: String},                       // normal,large,mini
    status: {type: String},                     // primary,success,error,warn,info
};