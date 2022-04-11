<template>
  <Teleport to="body">
    <Transition
      name="dialog"
      :duration="{ enter: 400, leave: 250 }"
      @afterLeave="afterLeave"
    >
      <div
        v-if="vIf"
        class="ti-dialog-container"
        v-show="vShow"
        @click="clickOnOverlay"
        v-drag="dragable"
      >
        <div class="ti-dialog-overlay" v-if="overlay" />
        <div
          class="ti-dialog-wrapper"
          :style="{
            pointerEvents: noPointerEventsOnOverlay ? 'none' : undefined
          }"
        >
          <div
            class="ti-dialog"
            :class="TiDialogClasses"
            :style="TiDialogStyles"
            role="dialog"
            aria-modal="true"
            :aria-label="title || 'dialog'"
            @click.stop
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

<script lang="ts">
import { ref, watch, computed, defineComponent } from 'vue'
import TiIcon from '@titans-ui/components/icon'
import TiButton from '@titans-ui/components/button'
import drag from '@titans-ui/directives/drag'

export default defineComponent({
  name: 'TiDialog',
  components: { TiIcon, TiButton },
  directives: { drag },
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
    /**
     * 是否遮挡正常文档流的点击事件
     * 当overlay=false且noPointerEventsOnOverlay=true时，closeOnClickOverlay控制的事件（点击弹窗外关闭弹窗的功能）会失效。
     * 这是因为当前该事件靠overlay或者noPointerEventsOnOverlay绑定的dom元素冒泡触发的
     * 如真有必要在overlay=false且noPointerEventsOnOverlay=true时通过击弹窗外关闭弹窗的话，可以通过clickOutside的原理关闭弹窗。
     * noPointerEventsOnOverlay=true是为了在显示弹窗的同时能点击到弹窗下面的元素，故不需要在此属性打开时关闭弹窗，也就没有上一行存在的场景。
     */
    noPointerEventsOnOverlay: {
      type: Boolean,
      default: false
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
    },
    dragable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'drag'],
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
})
</script>
