<template>
  <div
    class="ti-select"
    :class="[`ti-select-size--${size}`, { 'ti-select--dropdown': isDropdown }]"
    ref="reference"
    @mouseenter="hoverSelect = true"
    @mouseleave="hoverSelect = false"
    @click="handleFocus"
  >
    <TiInput
      class="ti-select_input"
      :modelValue="multiple ? null : panel.inputValue?.label"
      @change="(val) => (model = val)"
      :name="name"
      :autocomplete="autocomplete"
      readonly
      :clearable="clearable"
      :size="size"
      ref="tiInputRef"
    >
      <template #suffix>
        <ti-icon v-show="!clearIconVisible" icon="arrow-down"></ti-icon>
        <ti-icon
          v-if="clearIconVisible"
          icon="circle-close"
          @click="handleClear"
        ></ti-icon>
      </template>
    </TiInput>
    <div
      class="ti-select_multiple-label-wrapper"
      ref="multipleLabelWrapper"
      v-if="multiple"
    >
      <span>
        <TiButton
          class="ti-select_multiple--item"
          type="info"
          mode="plain"
          v-for="(item, index) in panel.multipleValue"
          :key="index"
          size="mini"
        >
          {{ item?.label }}

          <TiIcon
            class="ti-select_multiple--close"
            icon="close"
            @click.stop="removeItem(item)"
          />
        </TiButton>
      </span>
    </div>

    <TiPopperTransition
      :teleportToBody="teleportToBody"
      :reference="reference"
      fitReferenceWidth
      ref="popperTransitonRef"
      placement="bottom"
      :className="popperClass"
    >
      <div class="ti-select_panel" @click.stop>
        <slot></slot>
      </div>
    </TiPopperTransition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  watch
} from 'vue'
import { ref } from '@vue/reactivity'
import { selectProps } from './select-props'
import { computed, provide } from '@vue/runtime-core'
import { TI_SELECT_PROVIDE } from '@titans-ui/utils/constants'
import { TiButton } from '@titans-ui/components/button'
import { TiPopperTransition } from '@titans-ui/components/popper-transition'
import { Panel, ValueWrapper } from './types'

export default defineComponent({
  name: 'TiSelect',
  components: { TiButton, TiPopperTransition },
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const reference = ref(null)
    const popperTransitonRef = ref(null)
    const isDropdown = ref(false)
    const handleFocus = () => {
      console.log('handleFocus')
      popperTransitonRef.value?.show()
    }
    // 控制下拉图标的方向
    watch(
      () => popperTransitonRef.value?.visible,
      (val: boolean) => {
        isDropdown.value = val
      }
    )

    const panel: Panel = reactive({
      model: computed({
        get: () => {
          if (props.multiple) {
            if (Array.isArray(props.modelValue)) {
              return props.modelValue
            } else {
              console.error(
                `[TiSelect] the value in the multiple case should be an array.`
              )
              return []
            }
          } else {
            if (Array.isArray(props.modelValue)) {
              console.error(
                `[TiSelect] The value in the radio case should not be an array.`
              )
              return props.modelValue?.[0]
            } else {
              return props.modelValue
            }
          }
        },
        set: (val: any): void => {
          emit('update:modelValue', val)
        }
      }),
      pushToPanel(val: any): void {
        if (props.multiple) {
          if (panel.model.length < props.multipleLimit) {
            if (panel.model?.includes(val)) {
              panel.model = panel.model.filter((item) => item !== val)
            } else {
              if (panel.model.length === props.multipleLimit - 1) {
                popperTransitonRef.value?.hide()
              }
              panel.model = [...panel.model, val]
            }
          } else {
            popperTransitonRef.value?.hide()
          }
        } else {
          panel.model = val
          popperTransitonRef.value?.hide()
        }
      },
      inputValue: null,
      multipleValue: [],
      updatedValue(valueWrapper: ValueWrapper<any>): void {
        const { type, ...optionItem } = valueWrapper
        if (props.multiple) {
          // 多选时，因为选中的值为一个数组，所以active与inactive均需考虑
          if (type === 'active') {
            panel.multipleValue.push(optionItem)
          } else {
            panel.multipleValue = panel.multipleValue.filter(
              (item) => item.value !== optionItem.value
            )
          }
        } else {
          // 单选时，只依次赋值active case即可
          if (type === 'active') {
            panel.inputValue = optionItem
          }
        }
      }
    })
    provide<Panel>(TI_SELECT_PROVIDE, panel)

    const handleClear = () => {
      panel.model = null
    }

    const hoverSelect = ref(false)
    const clearIconVisible = computed(() => {
      return props.multiple
        ? false
        : props.clearable && panel.inputValue && hoverSelect.value
    })

    // 动态更新select's input的高度
    const multipleLabelWrapper = ref(null)
    const tiInputRef = ref(null)
    let multipleLabelWrapperObserver: ResizeObserver
    onMounted(() => {
      /**
       * multipleLabelWrapper只有当multiple为true时才存在，当multiple由true变为false时，
       * 需测试是否报错
       * 或 watch multiple，动态销毁或创建新的 ResizeObserver
       */
      if (props.multiple && multipleLabelWrapper.value) {
        const initHeight = tiInputRef.value.inputRef.offsetHeight
        multipleLabelWrapperObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            tiInputRef.value.inputRef.style.height = `${Math.max(
              initHeight,
              entry.contentRect.height
            )}px`
            popperTransitonRef.value?.updatePopper()
          })
        })
        multipleLabelWrapperObserver.observe(multipleLabelWrapper.value, {
          box: 'border-box'
        })
      }
    })

    onBeforeUnmount(() => {
      if (props.multiple && multipleLabelWrapper.value) {
        multipleLabelWrapperObserver?.unobserve(multipleLabelWrapper.value)
      }
    })

    const removeItem = (item) => {
      panel.model = panel.model.filter((n) => n !== item.value)
    }

    return {
      panel,
      isDropdown,
      handleFocus,
      reference,
      popperTransitonRef,
      handleClear,
      hoverSelect,
      clearIconVisible,
      multipleLabelWrapper,
      tiInputRef,
      removeItem
    }
  }
})
</script>
