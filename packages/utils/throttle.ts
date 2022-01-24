import { SimpleFunction } from './shims'

/**
 * TODO: add third param immediate
 * @param func
 * @param wait
 */
export function throttle(func: SimpleFunction, wait = 16): SimpleFunction {
  let timer: ReturnType<typeof setTimeout> = null
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (!timer || now - lastTime >= wait) {
      func.apply(this, args)
      lastTime = now
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, wait)
  }
}
