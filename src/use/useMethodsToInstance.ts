import {getCurrentInstance} from "vue";
import {SimpleFunction} from "@/shims";
interface Methods {
    [k: string]: SimpleFunction
}
export function useMethodsToInstance(methods: Methods) {
    const ctx = getCurrentInstance();
    Object.assign(ctx!.proxy, methods);
}
