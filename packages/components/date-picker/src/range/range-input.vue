<template>
  <div
    class="ti-range-input"
    :class="classes"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <TiIcon icon="time" class="ti-range-input_icon"></TiIcon>
    <input
      :value="start"
      class="ti-range-input--inner"
      :class="rangeInputInnerClasses"
      :placeholder="startPlaceholder"
      :disabled="disabled"
      :readonly="readonly"
      @focus="onFocus"
      @input="(e) => $emit('update:start', e.target.value)"
    />
    <span class="ti-range-separator">{{ rangeSeparator }}</span>
    <input
      :value="end"
      class="ti-range-input--inner"
      :class="rangeInputInnerClasses"
      :placeholder="endPlaceholder"
      :disabled="disabled"
      :readonly="readonly"
      @focus="onFocus"
      @input="(e) => $emit('update:end', e.target.value)"
    />
    <TiIcon
      class="ti-range-input_icon ti-range-input_icon--clear"
      :icon="
        clearable && start && end && (focus || isHover) ? 'circle-close' : ''
      "
      @click="$emit('clear')"
    ></TiIcon>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import TiIcon from '@titans-ui/components/icon'

export default defineComponent({
  name: 'TiRangeInput',
  components: { TiIcon },
  props: {
    start: String,
    end: String,
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    },
    rangeSeparator: {
      type: String,
      default: '~'
    },
    size: {
      type: String,
      default: 'normal'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  emits: ['focus', 'input', 'update:start', 'update:end', 'clear'],
  setup(props, { emit }) {
    const classes = computed(() => [
      `ti-range-input-size-${props.size}`,
      {
        'ti-range-input--disabled': props.disabled,
        'ti-range-input-focus': props.focus
      }
    ])
    const rangeInputInnerClasses = computed(() => [])

    const onFocus = (e: InputEvent) => {
      emit('focus', e)
    }

    const isHover = ref(false)

    return {
      classes,
      rangeInputInnerClasses,
      onFocus,
      isHover
    }
  }
})
</script>
