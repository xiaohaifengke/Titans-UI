<template>
  <Teleport :disabled="!teleportToBody" to="body">
    <Transition
      name="popper-slide"
      :duration="250"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        class="ti-popper-transition"
        ref="tooltipRef"
        v-show="visible"
        v-click-outside="vClickOutsideParams"
      >
        <slot :tooltipRef="tooltipRef"></slot>
        <div v-if="showArrow" class="ti-popper_arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import clickOutside from '../../utils/clickOutside'

export default defineComponent({
  name: 'TiPopperTransition',
  directives: { clickOutside },
  props: {
    teleportToBody: {
      type: Boolean,
      default: true
    },
    vClickOutsideExtraEls: {
      type: Array,
      default: () => []
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  emits: ['after-enter', 'after-leave'],
  setup(props, { emit }) {
    const visible = ref(false)
    const show = () => {
      visible.value = true
    }
    const hide = () => {
      visible.value = false
    }
    const vClickOutsideActive = ref(false)
    const vClickOutsideParams = computed(() => ({
      handler: hide,
      extraEls: props.vClickOutsideExtraEls,
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
    return {
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
    transition: opacity 0.25s ease;
    .ti-date-picker_popper {
      transform: scaleY(1);
    }
  }
  .popper-slide-enter-from,
  .popper-slide-leave-to {
    opacity: 0;
    .ti-date-picker_popper {
      transform: scaleY(0);
    }
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
    background-color: rgb(255, 255, 255);
    border-radius: map-get($defaultThemeMap, default-border-radius);
    box-shadow: rgb(0 0 0 / 20%) 0 2px 10px;

    &[data-popper-placement^='top'] > .ti-popper_arrow {
      bottom: -4px;
      &::before {
        box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.2);
      }
    }

    &[data-popper-placement^='bottom'] > .ti-popper_arrow {
      top: -4px;
      &::before {
        box-shadow: -2px -2px 5px -1px rgba(0, 0, 0, 0.2);
      }
    }

    &[data-popper-placement^='left'] > .ti-popper_arrow {
      right: -4px;
    }

    &[data-popper-placement^='right'] > .ti-popper_arrow {
      left: -4px;
    }
  }
}
</style>
