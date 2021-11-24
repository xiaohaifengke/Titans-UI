// Note: temp use in vue3
// vue2 version is https://github.com/ndelvalle/v-click-outside
// add a param named extraEls at 2021/11/18
import { SimpleFunction } from '../shims'

const HANDLERS_PROPERTY = '__v-click-outside'
const HAS_WINDOWS = typeof window !== 'undefined'
const HAS_NAVIGATOR = typeof navigator !== 'undefined'
const IS_TOUCH =
  HAS_WINDOWS &&
  ('ontouchstart' in window ||
    (HAS_NAVIGATOR && navigator.msMaxTouchPoints > 0))
const EVENTS = IS_TOUCH ? ['touchstart'] : ['click']

type Binding = {
  value: any
  oldValue: any
}
type BindingValue = {
  handler: SimpleFunction
  middleware: SimpleFunction
  events: string[]
  isActive: boolean
  detectIframe: any
  capture: boolean
  extraEls: HTMLBaseElement[]
} & SimpleFunction

type EventOptions = {
  el?: HTMLBaseElement
  event: any
  handler: SimpleFunction
  middleware: SimpleFunction
  extraEls?: HTMLBaseElement[]
}

type EventParams = EventOptions & { srcTarget: HTMLElement; capture: boolean }
function processDirectiveArguments(bindingValue: BindingValue) {
  const isFunction = typeof bindingValue === 'function'
  if (!isFunction && typeof bindingValue !== 'object') {
    throw new Error(
      'v-click-outside: Binding value must be a function or an object'
    )
  }

  return {
    handler: isFunction ? bindingValue : bindingValue.handler,
    middleware: bindingValue.middleware || ((item: any) => item),
    events: bindingValue.events || EVENTS,
    isActive: !(bindingValue.isActive === false),
    detectIframe: !(bindingValue.detectIframe === false),
    capture: !!bindingValue.capture,
    extraEls: bindingValue.extraEls || []
  }
}

function execHandler({ event, handler, middleware }: EventOptions) {
  if (middleware(event)) {
    handler(event)
  }
}

function onFauxIframeClick({ el, event, handler, middleware }: EventOptions) {
  // Note: on firefox clicking on iframe triggers blur, but only on
  //       next event loop it becomes document.activeElement
  // https://stackoverflow.com/q/2381336#comment61192398_23231136
  setTimeout(() => {
    const { activeElement } = document
    if (
      activeElement &&
      activeElement.tagName === 'IFRAME' &&
      !el!.contains(activeElement)
    ) {
      execHandler({ event, handler, middleware })
    }
  }, 0)
}

function onEvent({
  el,
  event,
  handler,
  middleware,
  extraEls = []
}: EventOptions) {
  // Note: composedPath is not supported on IE and Edge, more information here:
  //       https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
  //       In the meanwhile, we are using el.contains for those browsers, not
  //       the ideal solution, but using IE or EDGE is not ideal either.
  const allEl = [el, ...extraEls]
  const path = event.path || (event.composedPath && event.composedPath())
  const isClickOutside = path
    ? /*path.indexOf(el) < 0*/ allEl.every((el) => path.indexOf(el) < 0)
    : /*!el!.contains(event.target)*/ allEl.every(
        (el) => !el!.contains(event.target)
      )

  if (!isClickOutside) {
    return
  }

  execHandler({ event, handler, middleware })
}

function created(el: any, { value }: Binding) {
  const {
    events,
    handler,
    middleware,
    isActive,
    detectIframe,
    capture,
    extraEls
  } = processDirectiveArguments(value)
  if (!isActive) {
    return
  }

  el[HANDLERS_PROPERTY] = events.map((eventName) => ({
    event: eventName,
    srcTarget: document.documentElement,
    handler: (event: Event) =>
      onEvent({ el, event, handler, middleware, extraEls }),
    capture
  }))

  if (detectIframe) {
    const detectIframeEvent = {
      event: 'blur',
      srcTarget: window,
      handler: (event: Event) =>
        onFauxIframeClick({ el, event, handler, middleware }),
      capture
    }

    el[HANDLERS_PROPERTY] = [...el[HANDLERS_PROPERTY], detectIframeEvent]
  }

  el[HANDLERS_PROPERTY].forEach(({ event, srcTarget, handler }: EventParams) =>
    setTimeout(() => {
      // Note: More info about this implementation can be found here:
      //       https://github.com/ndelvalle/v-click-outside/issues/137
      if (!el[HANDLERS_PROPERTY]) {
        return
      }
      srcTarget.addEventListener(event, handler, capture)
    }, 0)
  )
}

function unmounted(el: any) {
  const handlers = el[HANDLERS_PROPERTY] || []
  handlers.forEach(({ event, srcTarget, handler, capture }: EventParams) =>
    srcTarget.removeEventListener(event, handler, capture)
  )
  delete el[HANDLERS_PROPERTY]
}

function beforeUpdate(el: any, { value, oldValue }: Binding) {
  if (JSON.stringify(value) === JSON.stringify(oldValue)) {
    return
  }
  unmounted(el)
  created(el, { value, oldValue })
}

const directive = {
  created,
  beforeUpdate,
  unmounted
}

export default HAS_WINDOWS ? directive : {}
