import { getCurrentInstance } from 'vue'
import DegreeScale from '../utils/degree-scale'

export default function () {
  const { proxy } = getCurrentInstance()
  const controlsBarUpperWidth = proxy.$parent?.$el?.parentElement?.offsetWidth
  const options = (proxy as any).options
  return new DegreeScale({
    canvas: (proxy as any).canvas as HTMLCanvasElement,
    width: controlsBarUpperWidth,
    height: options.controlsBarUpperHeight + options.controlsBarUnderHeight,
    tickSize: options.controlsBarUpperHeight
  })
}
