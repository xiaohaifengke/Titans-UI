import './dialog.scss'
import {
  watch,
  defineComponent,
  ref,
  Teleport,
  Transition,
  withModifiers
} from 'vue'
import TiIcon from '../icon/icon'
import TiButton from '../button/button'

export default defineComponent({
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

    const TiDialogClasses = ['ti-dialog', props.customClass]
    const TiDialogStyles = {
      marginTop: typeof props.top === 'string' ? props.top : `${props.top}px`,
      width: typeof props.width === 'string' ? props.width : `${props.width}px`
    }

    /**
     * props.visible, props.destroyOnClose, rendered: 是否已渲染
     * rendered为 false 时，vIf = visible, 当渲染后，rendered为 true;
     * rendered为 true 时:
     * props.destroyOnClose为 false 时 vIf = true, vShow为 props.visible;
     * props.destroyOnClose为 true 时 vIf = props.visible, vShow为 true;
     * */
    let rendered = false // 是否渲染
    const vIf = ref(false)
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

    return () => (
      <Teleport to="body">
        <Transition
          name="dialog"
          duration={{ enter: 400, leave: 250 }}
          onAfterLeave={afterLeave}
        >
          {vIf.value && (
            <div class="ti-dialog-container" v-show={vShow.value}>
              <div class="ti-dialog-overlay" />
              <div
                class="ti-dialog-wrapper"
                style={{ pointerEvents: vShow.value ? undefined : 'none' }}
                onClick={withModifiers(clickOnOverlay, ['self'])}
              >
                <div
                  class={TiDialogClasses}
                  style={TiDialogStyles}
                  role="dialog"
                  aria-modal="true"
                  aria-label={props.title || 'dialog'}
                >
                  <div class="ti-dialog-header">
                    {slots.title?.() ?? (
                      <span class="ti-dialog-title">{props.title}</span>
                    )}
                    {props.showClose && (
                      <TiIcon
                        class="ti-dialog-close"
                        icon="close"
                        {...{ onClick: close }}
                      />
                    )}
                  </div>
                  <div class="ti-dialog-content">{slots.default?.()}</div>
                  <div class="ti-dialog-footer">
                    {slots.footer?.() ?? (
                      <>
                        <TiButton
                          class="ti-dialog-footer-default-slot-button"
                          onClick={onCancel}
                        >
                          {props.cancelText}
                        </TiButton>
                        <TiButton
                          class="ti-dialog-footer-default-slot-button"
                          onClick={onOk}
                        >
                          {props.okText}
                        </TiButton>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </Teleport>
    )
  }
})
