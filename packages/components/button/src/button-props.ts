import type { ExtractPropTypes } from 'vue'
export const buttonProps = {
  label: { type: String },
  // 按钮类型: default/primary/success/warning/danger/info
  type: {
    type: String,
    default: ''
    // validator(value: unknown): boolean {
    //     const types = ['primary', 'success', 'warning', 'danger', 'info'];
    //     if (!types.includes(value as string)) {
    //         console.error(`type类型只能为：${types.join('/')}`);
    //         return false;
    //     }
    //     return true;
    // }
  },
  // 按钮模式: fill/plain/outline/text
  mode: {
    type: String,
    default: ''
  },
  // 按钮形状: fillet/round/square/circle
  shape: { type: String, default: '' },
  // 按钮大小: large/normal/small/mini
  size: { type: String, default: '' },
  icon: { type: String },
  iconPosition: {
    type: String,
    default: 'prefix' // suffix
    // validator(value: string): boolean {
    //     return ['prefix', 'suffix'].includes(value);
    // }
  },
  disabled: { type: Boolean },
  loading: { type: Boolean }
}
// export type ButtonProps = ExtractPropTypes<typeof buttonProps>
