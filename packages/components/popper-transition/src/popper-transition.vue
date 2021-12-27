<template>
  <Teleport :disabled="!teleportToBody" to="body">
    <Transition
      name="popper-slide"
      :duration="duration"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        :class="[
          className,
          {
            'ti-popper-transition-active': popperTransitionInitialized
          }
        ]"
        class="ti-popper-transition"
        ref="tooltipRef"
        v-show="visible"
        v-click-outside="vClickOutsideParams"
      >
        <div class="ti-popper-transition_content" :style="{ padding: padding }">
          <slot :tooltipRef="tooltipRef"></slot>
        </div>
        <div v-if="showArrow" class="ti-popper_arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  nextTick,
  watch
} from 'vue'
import clickOutside from '@titans-ui/utils/clickOutside'
import { createPopper } from '@popperjs/core'
import { Instance } from '@popperjs/core/lib/types'
import { Placement } from '@popperjs/core'

export default defineComponent({
  name: 'TiPopperTransition',
  directives: { clickOutside },
  props: {
    teleportToBody: {
      type: Boolean,
      default: true
    },
    reference: {
      required: true
    },
    vClickOutsideExtraEls: {
      type: Array,
      default: () => []
    },
    vClickOustsideEvents: {
      type: Array,
      default: () => ['click']
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    fitReferenceWidth: {
      type: Boolean,
      default: false
    },
    // content顶部和底部是否留5px的padding
    padding: {
      type: String,
      default: '5px 0'
    }
    className: String,
    offset: {
      typs: Array,
      default: () => [0, 10]
    }
  },
  emits: ['after-enter', 'after-leave'],
  setup(props, { emit }) {
    const visible = ref(true)
    const show = () => {
      visible.value = true
    }
    const hide = () => {
      visible.value = false
    }
    const vClickOutsideActive = ref(false)
    const vClickOutsideParams = computed(() => ({
      handler: hide,
      extraEls: [...props.vClickOutsideExtraEls, props.reference],
      events: props.vClickOustsideEvents,
      isActive: vClickOutsideActive.value
    }))

    const afterEnter = (el: HTMLElement) => {
      el.classList.add('popper-slide-enter-after') // 一些slot内容的过渡效果需要在有这个class之后才生效
      vClickOutsideActive.value = true // 使当前的clickOutside实例生效
      emit('after-enter', el)
    }

    const afterLeave = (el: HTMLElement) => {
      el.classList.remove('popper-slide-enter-after') // 使某些slot过渡失效
      vClickOutsideActive.value = false // 使当前的clickOutside实例暂时失效
      emit('after-leave', el)
    }

    const tooltipRef = ref(null as any)

    const { duration, popperTransitionInitialized, updatePopper } =
      popperTransitionInitialize()

    function popperTransitionInitialize() {
      const duration = ref(250)
      const popperTransitionInitialized = ref(false)
      let scrollHeight: number
      let popperInstance: Instance
      let resizeObserver: ResizeObserver
      onMounted(() => {
        scrollHeight = tooltipRef.value.scrollHeight
        hide()
        setTimeout(() => {
          popperTransitionInitialized.value = true
        }, duration.value)

        const modifiers = [
          {
            name: 'flip',
            options: {
              padding: scrollHeight
            }
          },
          {
            name: 'computeStyles',
            options: {
              gpuAcceleration: false,
              adaptive: false
            }
          },
          {
            name: 'offset',
            options: {
              offset: props.offset
            }
          }
        ]

        nextTick(() => {
          if (props.fitReferenceWidth) {
            tooltipRef.value.style.width = `${
              (props.reference as Element).scrollWidth
            }px`

            // 当宽度变化时自动更新panel的宽度
            resizeObserver = new ResizeObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.target === props.reference) {
                  tooltipRef.value.style.width = `${entry.contentRect.width}px`
                } else if (
                  entry.target === tooltipRef.value &&
                  entry.contentRect.width !== 0 // 当panel隐藏时width为0
                ) {
                  popperInstance?.update()
                }
              })
            })
            resizeObserver.observe(props.reference as Element, {
              box: 'border-box'
            })
            resizeObserver.observe(tooltipRef.value, { box: 'border-box' })
          }
          popperInstance = createPopper(
            props.reference as Element,
            tooltipRef.value,
            {
              placement: props.placement as Placement,
              modifiers
            }
          )
        })
      })

      // 手动更新，不然会出现arrow定位不准的问题
      watch(
        () => visible.value,
        () => {
          popperInstance?.update()
        }
      )

      onBeforeUnmount(() => {
        resizeObserver?.unobserve(props.reference)
        resizeObserver?.unobserve(tooltipRef.value)
        popperInstance.destroy()
      })

      const updatePopper = () => {
        popperInstance?.update()
      }

      return {
        duration,
        popperTransitionInitialized,
        updatePopper
      }
    }
    return {
      duration,
      popperTransitionInitialized,
      updatePopper,
      tooltipRef,
      visible,
      show,
      hide,
      vClickOutsideActive,
      vClickOutsideParams,
      afterEnter,
      afterLeave
    }
  }
})
</script>
