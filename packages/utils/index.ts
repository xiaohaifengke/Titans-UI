// manipulate camelCase to kebab-case
export function kebabCase(str: string): string {
  if (str.length > 1 && /[A-Z]/.test(str.charAt(0))) {
    str = str.charAt(0).toLowerCase() + str.substring(1)
  }
  return str.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`)
}

/**
 * 重写js native toFixed 方法
 * @param d 保留的小数位数
 * @param number 需要四舍五入的数字
 * @returns { string | number }
 */
export function toFixed(d: string | number, number: any) {
  if (number === undefined) {
    // @ts-ignore
    number = this
  }
  if (!number && number !== 0) {
    return ''
  }
  if (!/^(-|\+)?\d+(?:\.\d+)?$/.test(number)) {
    return ''
  }
  let s = number + ''
  if (!d && d !== 0) d = 2
  d = parseInt(d as string)
  if (s.indexOf('.') === -1) s += '.'
  s += new Array(d + 1).join('0')
  if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(s)) {
    s = '0' + RegExp.$2
    const pm = RegExp.$1
    let a: any = RegExp.$3.length
    let b = true
    if (a === d + 2) {
      a = s.match(/\d/g)
      if (
        (pm !== '-' && parseInt(a[a.length - 1]) > 4) ||
        (pm === '-' && parseInt(a[a.length - 1]) > 5)
      ) {
        for (let i = a.length - 2; i >= 0; i--) {
          a[i] = parseInt(a[i]) + 1
          if (a[i] === 10) {
            a[i] = 0
            b = i !== 1
          } else break
        }
      }
      s = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2')
    }
    if (b) s = s.substr(1)
    return (pm + s).replace(/\.$/, '')
  }
  // @ts-ignore
  return this + ''
}

export function validatorInt(val: number | string): boolean {
  // console.log(val, typeof val)
  return /^\d+$/.test(`${val}`)
}

// 获取Dom属性
export function getStyle(dom: Element, attr: keyof CSSStyleDeclaration) {
  return getComputedStyle(dom, null)[attr]
}
