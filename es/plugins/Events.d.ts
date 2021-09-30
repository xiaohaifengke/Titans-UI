import { SimpleFunction } from '@/shims';
declare type ListenName = string | symbol;
export declare function createEventHub(): {
    on(listenName: ListenName, fn: SimpleFunction): () => void;
    once(listenName: ListenName, fn: SimpleFunction): () => void;
    off(listenName: ListenName, fn?: SimpleFunction | undefined): void;
    emit(listenName: ListenName, ...args: any[]): void;
};
export {};
