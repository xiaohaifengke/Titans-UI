import { SimpleFunction } from '../shims';
interface Methods {
    [k: string]: SimpleFunction;
}
export declare function useMethodsToInstance(methods: Methods): void;
export {};
