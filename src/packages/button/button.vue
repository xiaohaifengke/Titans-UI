<template>
  <button
    :disabled="disabled || loading"
    :class="classes"
    @click="(e) => $emit('click', e)"
  >
    <TiIcon v-if="loading" icon="loading" />
    <TiIcon v-if="icon && iconPosition !== 'suffix'" :icon="icon" />
    <span
      ><slot>{{ label }}</slot></span
    >
    <TiIcon v-if="!loading && icon && iconPosition === 'suffix'" :icon="icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TiIcon from '../icon'
enum StyleShape {
  fillet = 'fillet',
  round = 'round',
  square = 'square'
}

enum StyleSize {
  large = 'large',
  normal = 'normal',
  small = 'small',
  mini = 'mini'
}

enum StyleType {
  default = 'default',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info'
}
export default defineComponent({
  name: 'TiButton',
  components: { TiIcon },
  props: {
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
  },
  emits: {
    click: (e: MouseEvent) => true
  },
  setup(props) {
    const classes = [
      'ti-button',
      {
        [`ti-button-type-${props.type}`]: props.type,
        [`ti-button-mode-${props.mode}`]: props.mode,
        [`ti-button-shape-${props.shape}`]: props.shape,
        [`ti-button-size-${props.size}`]: props.size,
        'ti-button-disabled': props.disabled,
        'ti-button-loading': props.loading
      }
    ]
    return {
      classes
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@import './button';
</style>
