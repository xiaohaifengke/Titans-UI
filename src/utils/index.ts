// manipulate camelCase to kebab-case
export function kebabCase(str: string): string {
    if (str.length > 1 && /[A-Z]/.test(str.charAt(0))){
        str = str.charAt(0).toLowerCase() + str.substring(1);
    }
    return str.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`);
}