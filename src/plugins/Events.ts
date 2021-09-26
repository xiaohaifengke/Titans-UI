import { SimpleFunction } from '@/shims'

type ListenName = string | symbol
type Listener = SimpleFunction & { fn?: any }
type EventHub = ReturnType<typeof createEventHub>
export function createEventHub() {
  const getEvents = (function () {
    let _events: Map<ListenName, Listener[]>
    return function () {
      if (!_events) {
        _events = new Map<ListenName, Listener[]>()
      }
      return _events
    }
  })()

  const eventHub = {
    on(listenName: ListenName, fn: SimpleFunction) {
      const _events: Map<ListenName, Listener[]> = getEvents()
      const listenNameListeners = _events.get(listenName)
      if (listenNameListeners) {
        listenNameListeners.push(fn)
      } else {
        _events.set(listenName, [fn])
      }
      return () => eventHub.off(listenName, fn)
    },
    once(listenName: ListenName, fn: SimpleFunction) {
      const once: Listener = (...args: any[]) => {
        eventHub.off(listenName, once)
        fn(...args)
      }
      once.fn = fn
      eventHub.on(listenName, once)
      return () => eventHub.off(listenName, once)
    },
    off(listenName: ListenName, fn?: SimpleFunction) {
      const _events: Map<ListenName, Listener[]> = getEvents()
      const listenNameListeners = _events.get(listenName)
      if (!listenNameListeners) {
        return
      }
      if (!fn) {
        _events.set(listenName, [])
        return
      }
      _events.set(
        listenName,
        listenNameListeners.filter(
          (listener) => listener !== fn && listener.fn && listener.fn !== fn
        )
      )
    },
    emit(listenName: ListenName, ...args: any[]) {
      const _events: Map<ListenName, Listener[]> = getEvents()
      const listenNameListeners = _events.get(listenName)
      if (listenNameListeners) {
        listenNameListeners.forEach((listener) => listener(...args))
      }
    }
  }
  return eventHub
}
