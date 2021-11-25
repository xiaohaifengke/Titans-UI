import { SimpleFunction } from './shims'

function easeInOutQuad(t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
let requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    (window as any).webkitRequestAnimationFrame ||
    (window as any).mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

/**
 * Because it's so fucking difficult to detect the scrolling element, just move them all
 * @param {number} amount
 */
function move(amount: number, element?: HTMLElement): void {
  if (!element) {
    document.documentElement.scrollTop = amount
    ;(document.body.parentNode as any).scrollTop = amount
    document.body.scrollTop = amount
  } else {
    element.scrollTop = amount
  }
}

function position(element?: HTMLElement): number {
  return element
    ? element.scrollTop
    : document.documentElement.scrollTop ||
        (document.body.parentNode as any).scrollTop ||
        document.body.scrollTop
}

/**
 * @param {number} to
 * @param {number} duration
 * @param {Function} callback
 */
export function scrollTo(
  element: HTMLElement,
  to: number,
  duration?: number,
  callback?: SimpleFunction
) {
  const start = position(element)
  const change = to - start
  const increment = 20
  let currentTime = 0
  const dur = typeof duration === 'undefined' ? 300 : duration
  const animateScroll = function () {
    // increment the time
    currentTime += increment
    // find the value with the quadratic in-out easing function
    let val = easeInOutQuad(currentTime, start, change, dur)
    // move the document.body
    move(val, element)
    // do the animation unless its over
    if (currentTime < dur) {
      requestAnimFrame(animateScroll)
    } else {
      if (callback && typeof callback === 'function') {
        // the animation is done so lets callback
        callback()
      }
    }
  }
  animateScroll()
}
