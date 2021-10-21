<template>
  <div
    class="ti-input"
    :class="classes"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <input
      v-model="model"
      ref="inputRef"
      class="ti-input--inner"
      :class="inputInnerClasses"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :readonly="readonly"
      :max="max"
      :min="min"
      :step="step"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @change="onChange"
    />
    <span v-if="prefixIcon || prefixSlot" class="ti-input_icon--prefix">
      <span class="ti-input_icon">
        <slot name="prefix"></slot>
        <ti-icon v-if="prefixIcon" :icon="prefixIcon"></ti-icon>
      </span>
    </span>
    <span
      v-if="suffixIcon || suffixSlot || clearable"
      class="ti-input_icon--suffix"
    >
      <span class="ti-input_icon">
        <slot name="suffix"></slot>
        <ti-icon v-if="suffixIcon" :icon="suffixIcon"></ti-icon>
        <ti-icon
          v-if="clearIconVisible"
          @mousedown.prevent
          @click.capture="clear"
          icon="circle-close"
        ></ti-icon>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRef, watch } from 'vue'

export default defineComponent({
  name: 'TiInput',
  props: {
    modelValue: {
      type: [String, Number]
    },
    size: {
      type: String,
      default: 'normal'
    },
    prefixIcon: {
      type: String
    },
    suffixIcon: {
      type: String
    },
    placeholder: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    max: {
      type: String
    },
    min: {
      type: String
    },
    step: {
      type: String
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'change', 'clear', 'input'],
  setup(props, { emit, slots }) {
    const classes = computed(() => [
      `ti-input-type-${props.type}`,
      `ti-input-size-${props.size}`,
      {
        'ti-input--disabled': props.disabled
      }
    ])
    const prefixSlot = toRef(slots, 'prefix')
    const suffixSlot = toRef(slots, 'suffix')
    const inputInnerClasses = computed(() => [
      {
        'ti-input--prefix': props.prefixIcon || prefixSlot.value,
        'ti-input--suffix':
          props.suffixIcon || suffixSlot.value || props.clearable
      }
    ])
    const inputRef = ref(null as null | HTMLInputElement)
    const model = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val)
    })

    const isFocused = ref(false)
    const isHover = ref(false)
    const clearIconVisible = computed(() => {
      return (
        model.value &&
        props.clearable &&
        !props.disabled &&
        !props.readonly &&
        (isFocused.value || isHover.value)
      )
    })

    const methods = {
      onFocus: (e: InputEvent) => {
        isFocused.value = true
        emit('focus', e)
      },
      onBlur: (e: InputEvent) => {
        isFocused.value = false
        emit('blur', e)
      },
      onInput: (e: InputEvent) => {
        emit('input', (e.target as HTMLInputElement).value)
      },
      onChange: (e: InputEvent) => {
        emit('change', (e.target as HTMLInputElement).value)
      },
      focus: () => {
        inputRef.value!.focus()
      },
      clear: () => {
        model.value = ''
        emit('clear')
      }
    }
    return {
      classes,
      inputInnerClasses,
      model,
      inputRef,
      ...methods,
      prefixSlot,
      suffixSlot,
      clearIconVisible,
      isHover
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@import './input';
</style>
