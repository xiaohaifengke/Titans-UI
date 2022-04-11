// 获取面板每一项对应数据列表的索引
export function useCreateGetDataIndex(mode: string) {
  return function getDataIndex(row: number, col: number): number {
    if (mode === 'year') {
      return (row - 1) * 3 + col - 1
    } else if (mode === 'month') {
      return (row - 1) * 3 + col - 1
    } else {
      return (row - 1) * 7 + col - 1
    }
  }
}
