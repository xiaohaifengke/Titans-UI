import './dialog.scss';
import {defineComponent, Teleport, withModifiers} from "vue";
import TiIcon from '../icon/icon';
import TiButton from '../button/button';

export default defineComponent({
    name: 'TiDialog',
    components: {TiIcon, TiButton},
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
        overlay: { // 是否显示遮罩层
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
        }
    },
    emits: ['update:visible'],
    setup(props, {emit, slots}) {
        const close = () => {
            const close = () => {
                emit('update:visible', false);
            };
            if (props.beforeClose) {
                props.beforeClose(close);
            } else {
                close();
            }

        };
        const clickOnOverlay = () => {
            if (props.closeOnClickOverlay) {
                close();
            }
        };
        const onOk = () => {
            if (props.ok?.() !== false) {
                close();
            }
        };
        const onCancel = () => {
            close();
        };

        const TiDialogClasses = [
            'ti-dialog',
            props.customClass
        ];

        const TiDialogStyles = {
            marginTop: typeof props.top === 'string' ? props.top : `${props.top}px`,
            width: typeof props.width === 'string' ? props.width : `${props.width}px`
        };

        return () => (
            <Teleport to="body">
                {props.visible && (
                    <div class="ti-dialog-container">
                        {props.overlay && <div class="ti-dialog-overlay"/>}
                        <div class="ti-dialog-wrapper" onClick={withModifiers(clickOnOverlay, ['self'])}>
                            <div
                                class={TiDialogClasses}
                                style={TiDialogStyles}
                                role="dialog"
                                aria-modal="true"
                                aria-label={props.title || 'dialog'}>
                                <div class="ti-dialog-header">
                                    {slots.title?.() ?? <span class="ti-dialog-title">{props.title}</span>}
                                    {props.showClose && <TiIcon class="ti-dialog-close" icon="close" {...{onClick: close}} />}
                                </div>
                                <div class="ti-dialog-content">
                                    {slots.default?.()}
                                </div>
                                <div class="ti-dialog-footer">
                                    {slots.footer?.() ?? <>
                                      <TiButton class="ti-dialog-footer-default-slot-button"
                                                onClick={onCancel}>{props.cancelText}</TiButton>
                                      <TiButton class="ti-dialog-footer-default-slot-button"
                                                onClick={onOk}>{props.okText}</TiButton>
                                    </>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Teleport>
        );
    }
});
