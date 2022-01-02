import { getStyle } from '@titans-ui/utils'

export type Binding = {
  value: boolean
  oldValue: boolean
}

function getPxValue(styleValue: string, topOrLeft: 'top' | 'left'): number {
  const windowSize =
    topOrLeft === 'left' ? window.innerWidth : window.innerHeight
  const unitReg = /vh|vw|%/
  let pxVal: number
  if (unitReg.test(styleValue)) {
    pxVal = windowSize * (+styleValue.replace(unitReg, '') / 100)
  } else {
    pxVal = +styleValue.replace('px', '')
  }
  return pxVal
}

function mounted(el, binding) {
  const dragable = binding.value || false
  if (!dragable) return
  const targetEl: HTMLElement = el.querySelector('.ti-dialog')
  const moveEl: HTMLElement = el.querySelector('.ti-dialog-header')
  el.targetEl = targetEl
  el.moveEl = moveEl

  moveEl.style.cssText += ';cursor:move;'

  let prevClientX: number,
    prevClientY: number,
    curLeft: number,
    curTop: number,
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number

  el.mousedown = (e: MouseEvent) => {
    // 使所有元素不可选择,在onmouseup时去除
    document.body.style.userSelect = 'none'
    // 记录鼠标按下时的坐标和 left/top 的值
    curLeft = getPxValue(getStyle(targetEl, 'left') as string, 'left')
    curTop = getPxValue(getStyle(targetEl, 'top') as string, 'top')
    prevClientX = e.clientX
    prevClientY = e.clientY
    // 计算 let和top的最大和最小边界值
    minLeft = curLeft - targetEl.offsetLeft
    maxLeft =
      curLeft + (window.innerWidth - targetEl.offsetLeft - targetEl.offsetWidth)
    minTop = curTop - targetEl.offsetTop
    maxTop =
      curTop + (window.innerHeight - targetEl.offsetTop - targetEl.offsetHeight)

    document.addEventListener('mousemove', el.mousemove)
    document.addEventListener('mouseup', el.mouseup)
  }

  el.mousemove = (e: MouseEvent) => {
    let curClientX: number = e.clientX
    let curClientY: number = e.clientY
    // 计算鼠标移动的距离
    const moveX = curClientX - prevClientX
    const moveY = curClientY - prevClientY
    // 计算 left/top
    curLeft += moveX
    curTop += moveY
    if (curLeft > maxLeft) curLeft = maxLeft
    if (curLeft < minLeft) curLeft = minLeft
    if (curTop > maxTop) curTop = maxTop
    if (curTop < minTop) curTop = minTop
    // 更新DOM的left/top值
    targetEl.style.cssText += `;left:${curLeft}px;top:${curTop}px;`
    prevClientX = curClientX
    prevClientY = curClientY

    // emit drag event
    binding.instance.$emit('drag', e)
  }

  el.mouseup = () => {
    document.body.style.userSelect = ''
    document.removeEventListener('mousemove', el.mousemove)
    document.removeEventListener('mouseup', el.mouseup)
  }

  moveEl.addEventListener('mousedown', el.mousedown)
}

function beforeUpdate(el, binding: Binding) {
  if (!!binding.value === !!binding.oldValue) return
  beforeUnmount(el)
  mounted(el, binding)
}

function beforeUnmount(el) {
  const moveEl = el.moveEl
  moveEl && (moveEl.style.cursor = '')
  moveEl?.removeEventListener('mousedown', el.mousedown)
  document.removeEventListener('mousemove', el.mousemove)
  document.removeEventListener('mouseup', el.mouseup)
}

export default {
  mounted,
  beforeUpdate,
  beforeUnmount
}
