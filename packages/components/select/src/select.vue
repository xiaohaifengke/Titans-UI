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
      :disabled="disabled"
      class="ti-select_input"
      v-model="model"
      :name="name"
      :autocomplete="autocomplete"
      :readonly="readonly || !filterable"
      :size="size"
      ref="tiInputRef"
      :placeholder="cptPlaceholder"
      @input="inputHandler"
    >
      <template #suffix>
        <ti-icon v-show="loading" icon="loading"></ti-icon>
        <ti-icon
          v-show="!loading && !clearIconVisible"
          icon="arrow-down"
        ></ti-icon>
        <ti-icon
          v-if="clearIconVisible"
          icon="circle-close"
          @click="handleClear"
        ></ti-icon>
      </template>
    </TiInput>
    <div
      class="ti-select_multiple-label-wrapper"
      :class="{ 'ti-select_multiple--filterable': cptFilterable }"
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
      @afterLeave="afterPopperHide"
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
  watch,
  computed,
  provide,
  ref
} from 'vue'
import { selectProps } from './select-props'
import { TI_SELECT_PROVIDE } from '@titans-ui/utils/constants'
import { SimpleFunction } from '@titans-ui/utils/shims'
import { TiButton } from '@titans-ui/components/button'
import { TiPopperTransition } from '@titans-ui/components/popper-transition'
import { SelectPanel, OptionItem, ValueWrapper } from './types'

export default defineComponent({
  name: 'TiSelect',
  components: { TiButton, TiPopperTransition },
  props: selectProps,
  emits: ['update:modelValue', 'input-change'],
  setup(props, { emit }) {
    const reference = ref(null)
    const popperTransitonRef = ref(null)
    const isDropdown = ref(false)
    const internalPlaceholder = ref(null)
    const cptPlaceholder = computed(() => {
      let placeholder = props.placeholder
      // 判断是否有值
      if (
        (props.multiple && Array.isArray(panel.model) && panel.model.length) ||
        (!props.multiple && panel.model)
      ) {
        placeholder = null
      }
      return internalPlaceholder.value || placeholder
    })
    // 当remote为true时，filterable不起作用
    const cptFilterable = computed(() => {
      return !props.remote && props.filterable
    })
    const filterableTemp: {
      inputValue: OptionItem
    } = {
      inputValue: null
    }
    const handleFocus = () => {
      if (props.disabled || props.readonly) return
      // 启用筛选功能时，显示时清空输入框的值，并将当前值的label赋值在placeholder上
      // 当隐藏下拉项时，将当前值的label重新赋值在输入框上
      if (
        !props.multiple &&
        cptFilterable.value &&
        panel.inputValue &&
        typeof panel.inputValue?.value !== 'symbol'
      ) {
        filterableTemp.inputValue = panel.inputValue
        internalPlaceholder.value = panel.inputValue?.label
        panel.inputValue = null
      }
      popperTransitonRef.value?.show()
    }
    const afterPopperHide = () => {
      // 启用筛选功能时，当隐藏下拉项时，将当前值的label重新赋值在输入框上
      if (cptFilterable.value) {
        internalPlaceholder.value = null
        if (props.multiple) {
          panel.inputValue = null
        } else {
          if (
            !panel.inputValue ||
            typeof panel.inputValue?.value === 'symbol'
          ) {
            panel.inputValue = filterableTemp.inputValue
            filterableTemp.inputValue = null // reset
          }
        }
      }
    }
    // 控制下拉图标的方向
    watch(
      () => popperTransitonRef.value?.visible,
      (val: boolean) => {
        isDropdown.value = val
      }
    )

    const panel: SelectPanel = reactive({
      filterable: cptFilterable.value,
      filterMethod: props.filterMethod as SimpleFunction,
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
    provide<SelectPanel>(TI_SELECT_PROVIDE, panel)
    const model = computed({
      get: () => {
        // if (props.multiple) return null
        return panel.inputValue?.label
      },
      set: (val: string) => {
        // 此处只会通过输入框输入时修改该值，不需要判断单、多选
        panel.inputValue = {
          label: val,
          value: Symbol('temp input value')
        }
      }
    })

    const inputHandler = (val: string) => {
      if (props.remote) {
        emit('input-change', val)
      }
    }

    const handleClear = () => {
      panel.model = null
    }

    const hoverSelect = ref(false)
    const clearIconVisible = computed(() => {
      return props.multiple
        ? false
        : !props.loading &&
            props.clearable &&
            panel.inputValue &&
            hoverSelect.value
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
            if (cptFilterable.value) {
              const height = entry.contentRect.height
              if (panel.model?.length > 0) {
                tiInputRef.value.inputRef.style.height = `${height + 30}px`
                tiInputRef.value.inputRef.style.paddingTop = `${height}px`
              }
            } else {
              const height = Math.max(initHeight, entry.contentRect.height)
              tiInputRef.value.inputRef.style.height = `${height}px`
            }
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
      removeItem,
      model,
      cptPlaceholder,
      cptFilterable,
      afterPopperHide,
      internalPlaceholder,
      inputHandler
    }
  }
})
</script>
