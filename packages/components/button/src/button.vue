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
import TiIcon from '@titans-ui/components/icon'
import { buttonProps } from './button-props'
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
  props: buttonProps,
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
