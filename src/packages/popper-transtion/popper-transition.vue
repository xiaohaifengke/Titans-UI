<template>
  <Teleport :disabled="!teleportToBody" to="body">
    <Transition
      name="popper-slide"
      :duration="duration"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        :class="{ 'ti-popper-transition-active': popperTransitionInitialized }"
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
import clickOutside from '../../utils/clickOutside'
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

<style lang="scss" rel="stylesheet/scss">
@include themes {
  .popper-slide-enter-active,
  .popper-slide-leave-active {
    opacity: 1;
    transform: scaleY(1);
  }
  .popper-slide-enter-from,
  .popper-slide-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }

  .ti-popper_arrow,
  .ti-popper_arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
  }

  .ti-popper_arrow {
    visibility: hidden;
  }

  .ti-popper_arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  .ti-popper-transition {
    z-index: 500;
    visibility: hidden;
    background-color: rgb(255, 255, 255);
    border-radius: map-get($defaultThemeMap, default-border-radius);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    &[data-popper-placement^='top'] {
      transform-origin: center bottom;

      .ti-popper_arrow {
        bottom: -4px;
        &::before {
          box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.2);
        }
      }
    }

    &[data-popper-placement^='bottom'] {
      transform-origin: center top;

      .ti-popper_arrow {
        top: -4px;
        &::before {
          box-shadow: -2px -2px 5px -1px rgba(0, 0, 0, 0.2);
        }
      }
    }

    &[data-popper-placement^='left'] .ti-popper_arrow {
      right: -4px;
    }

    &[data-popper-placement^='right'] .ti-popper_arrow {
      left: -4px;
    }
  }

  .ti-popper-transition_content {
    box-sizing: border-box;
    display: inline-flex;
    padding-top: 10px;
    font-size: map-get($defaultThemeMap, fontsize);
    color: map-get($defaultThemeMap, default);
    user-select: none;
  }
  .ti-popper-transition-active {
    visibility: visible;
    transition: all 0.25s ease;
  }
}
</style>
