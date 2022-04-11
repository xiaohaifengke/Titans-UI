import type { ExtractPropTypes } from 'vue'
export const iconProps = {
  icon: {
    type: String,
    required: true
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
