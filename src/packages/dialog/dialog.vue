<template>
  <Teleport to="body">
    <Transition
      name="dialog"
      :duration="{ enter: 400, leave: 250 }"
      @afterLeave="afterLeave"
    >
      <div v-if="vIf" class="ti-dialog-container" v-show="vShow">
        <div class="ti-dialog-overlay" v-if="overlay" />
        <div
          class="ti-dialog-wrapper"
          :style="{ pointerEvents: vShow ? undefined : 'none' }"
          @click.self="clickOnOverlay"
        >
          <div
            class="ti-dialog"
            :class="TiDialogClasses"
            :style="TiDialogStyles"
            role="dialog"
            aria-modal="true"
            :aria-label="title || 'dialog'"
          >
            <div class="ti-dialog-header" v-if="showHeader">
              <slot name="title">
                <span class="ti-dialog-title">{{ title }}</span>
              </slot>
              <TiIcon
                v-if="showClose"
                class="ti-dialog-close"
                icon="close"
                @click="close"
              />
            </div>
            <div class="ti-dialog-content">
              <slot></slot>
            </div>
            <div class="ti-dialog-footer" v-if="showFooter">
              <slot name="footer">
                <TiButton
                  class="ti-dialog-footer-default-slot-button"
                  @click="onCancel"
                >
                  {{ cancelText }}
                </TiButton>
                <TiButton
                  class="ti-dialog-footer-default-slot-button"
                  @click="onOk"
                >
                  {{ okText }}
                </TiButton>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { ref, watch } from 'vue'
import TiIcon from '../icon/icon.vue'
import TiButton from '../button/button.vue'
import { computed } from '@vue/runtime-core'

export default {
  name: 'TiDialog',
  components: { TiIcon, TiButton },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    top: {
      type: [Number, String],
      default: '15vh'
    },
    width: {
      type: [Number, String],
      default: 520
    },
    overlay: {
      // 是否显示遮罩层
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    customClass: {
      type: String
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function
    },
    afterClose: {
      type: Function
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible'],
  setup(props, { emit, slots }) {
    const close = () => {
      const close = () => {
        emit('update:visible', false)
      }
      if (props.beforeClose) {
        props.beforeClose(close)
      } else {
        close()
      }
    }
    const clickOnOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const onOk = () => {
      if (props.ok?.() !== false) {
        close()
      }
    }
    const onCancel = () => {
      close()
    }

    const TiDialogClasses = [props.customClass]

    const digitalReg = /^\d+$/
    const TiDialogStyles = computed(() => {
      return {
        marginTop:
          typeof props.top === 'string' && !digitalReg.test(props.top)
            ? props.top
            : `${props.top}px`,
        width:
          typeof props.width === 'string' && !digitalReg.test(props.width)
            ? props.width
            : `${props.width}px`
      }
    })

    /**
     * props.visible, props.destroyOnClose, rendered: 是否已渲染
     * rendered为 false 时，vIf = visible, 当渲染后，rendered为 true;
     * rendered为 true 时:
     * props.destroyOnClose为 false 时 vIf = true, vShow为 props.visible;
     * props.destroyOnClose为 true 时 vIf = props.visible, vShow为 true;
     * */
    let rendered = !!props.visible // 是否渲染
    const vIf = ref(rendered)
    const vShow = ref(true)
    watch(
      () => props.visible,
      () => {
        if (rendered) {
          if (props.destroyOnClose) {
            vIf.value = props.visible
            vShow.value = true
          } else {
            vIf.value = true
            vShow.value = props.visible
          }
        } else {
          vIf.value = props.visible
          rendered = true
        }
      }
    )

    const afterLeave = () => {
      props.afterClose?.()
    }

    return {
      close,
      clickOnOverlay,
      onOk,
      onCancel,
      TiDialogClasses,
      TiDialogStyles,
      vIf,
      vShow,
      afterLeave
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import './dialog';
</style>
