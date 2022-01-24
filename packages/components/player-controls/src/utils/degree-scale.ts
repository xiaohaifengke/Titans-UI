import { throttle } from '@titans-ui/utils/throttle'
import { getCurrentInstance, ComponentInternalInstance, onUnmounted } from 'vue'

export interface DegreeScaleOptions {
  canvas: HTMLCanvasElement
  loadbarHeight: number
  tickSize: number
  width: number
  height: number
  autoResize: boolean
  onProgressChange: (...args: any[]) => any
}

export default class DegreeScale {
  protected defaultOptions: DegreeScaleOptions = {
    canvas: null,
    loadbarHeight: 70,
    tickSize: 38,
    width: 1920,
    height: 70,
    autoResize: true,
    onProgressChange: (activePercent: number) => {
      this.vm.emit('onProgressChange', activePercent)
      return activePercent
    }
  }

  private vm: ComponentInternalInstance
  private options: DegreeScaleOptions
  private activePercent: number
  private mousedowning: boolean
  private onProgressChange: (...args: any[]) => any
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor(options: Partial<DegreeScaleOptions> = {}) {
    this.options = { ...this.defaultOptions, ...options }
    this.init()
  }

  init() {
    this.vm = getCurrentInstance()
    this.activePercent = 0 // 进度百分比默认为0
    this.mousedowning = false // 鼠标未被按下
    this.onProgressChange = this.options.onProgressChange
    this.canvas = this.options.canvas
    this.ctx = this.canvas.getContext('2d')
    this.setWidth(this.options.width)
    this.setHeight(this.options.height)

    this.drawDegreeScale()

    this.canvas.addEventListener('mousedown', this.mousedown.bind(this))
    this.canvas.addEventListener('mouseup', this.mouseup.bind(this))
    this.canvas.addEventListener(
      'mousemove',
      throttle(this.mousemove.bind(this))
    )
    this.canvas.addEventListener('mouseleave', this.mouseleave.bind(this))
    this.resize = throttle(this.resize.bind(this))
    window.addEventListener('resize', this.resize)

    onUnmounted(() => {
      this.canvas = null
      this.ctx = null
      window.removeEventListener('resize', this.resize)
    })
  }

  mousedown(e: MouseEvent) {
    this.mousedowning = true
    this.setActivePercent(e)
  }

  mouseup() {
    this.mousedowning = false
  }

  mousemove(e) {
    if (this.mousedowning) {
      this.setActivePercent(e)
    }
  }

  mouseleave() {
    this.mouseup()
  }

  resize() {
    this.setWidth(this.canvas.parentElement.offsetWidth)
    this.drawDegreeScale()
  }

  setWidth(width: number) {
    this.options.width = width
    this.canvas.width = width
  }

  setHeight(height: number) {
    this.canvas.height = height
  }

  setActivePercent(
    eventOrPercent: MouseEvent | number,
    emitProgressChangeEvent = true
  ) {
    if (eventOrPercent instanceof Event) {
      const options = this.options
      const x = eventOrPercent.offsetX
      this.activePercent = x / options.width
    } else {
      this.activePercent = eventOrPercent
    }
    if (emitProgressChangeEvent) {
      this.onProgressChange(this.activePercent)
    }
    this.drawDegreeScale()
  }

  setProgress(percent: number) {
    this.setActivePercent(percent, false)
  }

  /**
   * @Description: 绘制刻度板
   */
  drawDegreeScale() {
    const options = this.options
    const ctx = this.ctx
    ctx.save()
    // 清空所有的内容
    ctx.clearRect(0, 0, options.width, options.height)
    // 设置背景色
    // ctx.fillStyle = 'rgba(255,255,255,0.5)'
    ctx.fillStyle = 'transparent'
    ctx.fillRect(0, 0, options.width, options.height)
    ctx.restore()
    this.drawProgressBar(this.activePercent)
    this.drawAxis()
  }

  /**
   * @Description: 绘制刻度
   * @Author:  Jhail
   * @Date: 2021-08-24 17:59:59
   */
  drawAxis() {
    const options = this.options
    const ctx = this.ctx
    ctx.save()
    const y = options.tickSize
    ctx.lineWidth = 0.5
    ctx.strokeStyle = '#fff'
    ctx.beginPath()
    for (let x = 0.5; x <= options.width; x += 10) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.restore()
  }

  /**
   * @Description: 绘制进度背景色
   * @Author:  Jhail
   * @Date: 2021-09-03 16:14:42
   */
  drawProgressBar(xPer = 0.3) {
    const options = this.options
    const ctx = this.ctx
    const x = xPer * options.width
    ctx.save()
    const gradient = ctx.createLinearGradient(0, 0, x, 0)
    // gradient.addColorStop(0, '#745656')
    gradient.addColorStop(0, '#222')
    gradient.addColorStop(1, '#a34a4a')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, x, options.height)
    ctx.restore()
  }
}
