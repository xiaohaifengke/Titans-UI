import './icon.scss';
import { defineComponent } from 'vue';

import './iconfont';
export default defineComponent({
    name: 'TiIcon',
    props: {
        icon: {
            type: String,
            required: true
        }
    },
    setup(props) {
        return () => (
            <svg class={`ti-icon ti-icon-${props.icon}`}  aria-hidden="true">
                <use xlinkHref={`#icon-${props.icon}`} />
            </svg>
        );
    }
});
