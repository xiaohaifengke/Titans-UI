import { computed, ComputedRef, Ref } from 'vue'

export function useModel<T>(get: () => T, set: (value: T) => void): Ref<T> {
  const model = computed({ get: get, set: set })
  return model
}
