import './switch.scss'
declare const _default: import('vue').DefineComponent<
  {
    modelValue: {
      type: (StringConstructor | BooleanConstructor | NumberConstructor)[]
      required: true
    }
    type: {
      type: StringConstructor
      default: string
    }
    width: {
      type: NumberConstructor
    }
    height: {
      type: NumberConstructor
    }
    onValue: {
      type: (StringConstructor | BooleanConstructor | NumberConstructor)[]
      default: boolean
    }
    offValue: {
      type: (StringConstructor | BooleanConstructor | NumberConstructor)[]
      default: boolean
    }
    onColor: {
      type: StringConstructor
    }
    offColor: {
      type: StringConstructor
    }
    disabled: {
      type: BooleanConstructor
      default: boolean
    }
    onText: {
      type: StringConstructor
    }
    offText: {
      type: StringConstructor
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  ('update:modelValue' | 'change')[],
  'update:modelValue' | 'change',
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    {
      modelValue?: unknown
      type?: unknown
      width?: unknown
      height?: unknown
      onValue?: unknown
      offValue?: unknown
      onColor?: unknown
      offColor?: unknown
      disabled?: unknown
      onText?: unknown
      offText?: unknown
    } & {
      type: string
      disabled: boolean
      modelValue: string | number | boolean
      onValue: string | number | boolean
      offValue: string | number | boolean
    } & {
      width?: number | undefined
      height?: number | undefined
      onColor?: string | undefined
      offColor?: string | undefined
      onText?: string | undefined
      offText?: string | undefined
    }
  > & {
    onChange?: ((...args: any[]) => any) | undefined
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined
  },
  {
    type: string
    disabled: boolean
    onValue: string | number | boolean
    offValue: string | number | boolean
  }
>
export default _default
