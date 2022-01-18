export enum StyleShape {
  fillet = 'fillet',
  round = 'round',
  square = 'square'
}

export enum StyleSize {
  normal = 'normal',
  large = 'large',
  mini = 'mini'
}

export enum StyleStatus {
  primary = 'primary',
  success = 'success',
  error = 'error',
  warn = 'warn',
  info = 'info'
}

export const StyleProps = {
  shape: { type: String }, // fillet,round,square
  size: { type: String }, // normal,large,mini
  status: { type: String } // primary,success,error,warn,info
}

export const TI_SELECT_PROVIDE = '@@TI_SELECT_PROVIDE'
export const TI_SELECT_GROUP_PROVIDE = '@@TI_SELECT_GROUP_PROVIDE'
export const TI_CHECKBOX_GROUP_PROVIDE = '@@TI_CHECKBOX_GROUP_PROVIDE'
