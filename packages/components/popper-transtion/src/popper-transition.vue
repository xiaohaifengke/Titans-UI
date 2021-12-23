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
        <div class="ti-popper-transition_content">
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
    showArrow: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    className: String
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
      isActive: vClickOutsideActive.value
    }))

    const afterEnter = (el: HTMLElement) => {
      el.classList.add('popper-slide-enter-after')
      vClickOutsideActive.value = true
      emit('after-enter', el)
    }

    const afterLeave = (el: HTMLElement) => {
      el.classList.remove('popper-slide-enter-after')
      vClickOutsideActive.value = false
      emit('after-leave', el)
    }

    const tooltipRef = ref(null as any)

    const { duration, popperTransitionInitialized } =
      popperTransitionInitialize()

    function popperTransitionInitialize() {
      const duration = ref(250)
      const popperTransitionInitialized = ref(false)
      let scrollHeight: number
      let popperInstance: Instance
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
              gpuAcceleration: false
            }
          },
          {
            name: 'offset',
            options: {
              offset: [0, 10]
            }
          }
        ]

        nextTick(() => {
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
          popperInstance && popperInstance.update()
        }
      )

      onBeforeUnmount(() => {
        popperInstance.destroy()
      })

      return {
        duration,
        popperTransitionInitialized
      }
    }
    return {
      duration,
      popperTransitionInitialized,
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
