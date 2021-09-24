import {getCurrentInstance} from "vue";
import {useMethodsToInstance} from "../../../use/useMethodsToInstance";

export function useClose() {
    const ctx = getCurrentInstance()!;
    const emit = ctx.emit;
    const props = ctx.props as any;
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
    const methods = {
        close,
        clickOnOverlay,
        onOk,
        onCancel
    };
    useMethodsToInstance(methods);
    return methods;
}
