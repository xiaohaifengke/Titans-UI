import './dialog.scss'
declare const _default: import('vue').DefineComponent<
  {
    visible: {
      type: BooleanConstructor
      default: boolean
    }
    title: {
      type: StringConstructor
      default: string
    }
    top: {
      type: (StringConstructor | NumberConstructor)[]
      default: string
    }
    width: {
      type: (StringConstructor | NumberConstructor)[]
      default: number
    }
    overlay: {
      type: BooleanConstructor
      default: boolean
    }
    closeOnClickOverlay: {
      type: BooleanConstructor
      default: boolean
    }
    ok: {
      type: FunctionConstructor
    }
    cancel: {
      type: FunctionConstructor
    }
    okText: {
      type: StringConstructor
      default: string
    }
    cancelText: {
      type: StringConstructor
      default: string
    }
    customClass: {
      type: StringConstructor
    }
    showClose: {
      type: BooleanConstructor
      default: boolean
    }
    beforeClose: {
      type: FunctionConstructor
    }
    afterClose: {
      type: FunctionConstructor
    }
    destroyOnClose: {
      type: BooleanConstructor
      default: boolean
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  'update:visible'[],
  'update:visible',
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    {
      visible?: unknown
      title?: unknown
      top?: unknown
      width?: unknown
      overlay?: unknown
      closeOnClickOverlay?: unknown
      ok?: unknown
      cancel?: unknown
      okText?: unknown
      cancelText?: unknown
      customClass?: unknown
      showClose?: unknown
      beforeClose?: unknown
      afterClose?: unknown
      destroyOnClose?: unknown
    } & {
      title: string
      width: string | number
      visible: boolean
      top: string | number
      overlay: boolean
      closeOnClickOverlay: boolean
      okText: string
      cancelText: string
      showClose: boolean
      destroyOnClose: boolean
    } & {
      ok?: Function | undefined
      cancel?: Function | undefined
      customClass?: string | undefined
      beforeClose?: Function | undefined
      afterClose?: Function | undefined
    }
  > & {
    'onUpdate:visible'?: ((...args: any[]) => any) | undefined
  },
  {
    title: string
    width: string | number
    visible: boolean
    top: string | number
    overlay: boolean
    closeOnClickOverlay: boolean
    okText: string
    cancelText: string
    showClose: boolean
    destroyOnClose: boolean
  }
>
export default _default
