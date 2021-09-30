import { Ref } from 'vue';
export declare function useModel<T>(get: () => T, set: (value: T) => void): Ref<T>;
