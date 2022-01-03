import { SimpleFunction } from './shims'

export function debounce(func: SimpleFunction, wait: number): SimpleFunction {
  let timer: ReturnType<typeof setTimeout> = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, wait)
  }
}
