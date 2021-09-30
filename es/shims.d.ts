import { VNode } from '@vue/runtime-core';
export declare type SimpleFunction = (...args: any[]) => any;
declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void | JSX.Element;
declare type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;
export declare type VNodeChild = VNodeChildAtom | VNodeArrayChildren;
export {};
