import { VNode } from '@vue/runtime-core'

export type SimpleFunction = (...args: any[]) => any

type VNodeChildAtom =
  | VNode
  | string
  | number
  | boolean
  | null
  | undefined
  | void
  | JSX.Element
type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>
export type VNodeChild = VNodeChildAtom | VNodeArrayChildren
