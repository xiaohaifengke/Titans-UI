import './dialog.scss';
import {defineComponent} from "vue";
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
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function
        },
        cancel: {
            type: Function
        }
    },
    emits: ['update:visible'],
    setup(props,{emit}) {
        const close = () => {
            emit('update:visible', false);
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

        return () => props.visible && (
            <div class="ti-dialog-root">
                <div class="ti-dialog-overlay" onClick={clickOnOverlay} />
                <div class="ti-dialog-wrapper">
                    <div role="dialog" class="ti-dialog">
                        <div class="ti-dialog-header">
                            <span class="ti-dialog-title">标题</span>
                            <TiIcon class="ti-dialog-close" icon="close" {...{onClick: close}} />
                        </div>
                        <div class="ti-dialog-content">
                            <div>这是内容</div>
                            <div>这是内容</div>
                        </div>
                        <div class="ti-dialog-footer">
                            <TiButton onClick={onOk}>取消</TiButton>
                            <TiButton onClick={onCancel}>确定</TiButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
