<template>
  <h4>basic</h4>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>

  <h4>multiple</h4>
  <ti-select
    type="number"
    multiple
    :multipleLimit="8"
    v-model="multipleValue"
    popperClass="test-custom-select-popper-class"
    clearable
  >
    <ti-option
      v-for="item in filterableOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>

  <h4>size</h4>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="large"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="normal"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="small"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="mini"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>

  <h4>disabled</h4>
  <ti-select
    v-model="value"
    disabled
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <h4>readonly</h4>
  <ti-select
    v-model="value"
    readonly
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
  >
    <ti-option
      v-for="item in filterableOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <h4>filterable</h4>
  <ti-select
    v-model="value"
    filterable
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
    :filterMethod="filterMethod"
  >
    <ti-option
      v-for="item in filterableOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select
    v-model="multipleValue"
    multiple
    filterable
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
    :filterMethod="filterMethod"
  >
    <ti-option
      v-for="item in filterableOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <h4>remote</h4>

  <ti-select
    v-model="value"
    filterable
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
    :loading="loading"
    remote
    @inputChange="remoteMethod"
    clearable
  >
    <ti-option
      v-for="item in remoteOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select
    v-model="multipleValue"
    multiple
    filterable
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
    :loading="loading"
    remote
    @inputChange="remoteMethod"
  >
    <ti-option
      v-for="item in remoteOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
</template>
<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { sleep } from '../../utils'

const value = ref('')
const multipleValue = ref([])
const options = ref([
  {
    label: '第一行',
    value: '第1行',
    disabled: false
  },
  {
    label: '第二行',
    value: '第2行',
    disabled: false
  },
  {
    label: '第三行',
    value: '第3行',
    disabled: true
  },
  {
    label: '第四行',
    value: '第4行',
    disabled: false
  },
  {
    label: '第五行',
    value: '第5行',
    disabled: false
  },
  {
    label: '第六行',
    value: '第6行',
    disabled: false
  },
  {
    label: '第七行',
    value: '第7行',
    disabled: false
  },
  {
    label: '第八行',
    value: '第8行',
    disabled: false
  },
  {
    label: '第九行',
    value: '第9行',
    disabled: false
  }
])

// 安徽各市车牌号码简称
const filterableOptions = ref([
  { label: '合肥', value: '皖A' },
  { label: '芜湖', value: '皖B' },
  { label: '蚌埠', value: '皖C' },
  { label: '淮南', value: '皖D' },
  { label: '马鞍山', value: '皖E' },
  { label: '淮北', value: '皖F' },
  { label: '铜陵', value: '皖G' },
  { label: '安庆', value: '皖H' },
  { label: '黄山', value: '皖J' },
  { label: '阜阳', value: '皖K' },
  { label: '宿州', value: '皖L' },
  { label: '滁州', value: '皖M' },
  { label: '六安', value: '皖N' },
  { label: '宣城', value: '皖P' },
  { label: '池州', value: '皖R' },
  { label: '亳州', value: '皖S' }
])

const filterMethod = (input: string, option: { label: string; value: any }) => {
  if (!input || !input.trim()) return true
  return `${option.label}${option.value}`.includes(input)
}

const loading = ref(false)
const remoteOptions = ref([])
const remoteMethod = async (input: string) => {
  loading.value = true
  await sleep(1000)
  loading.value = false
  if (!input || !input.trim()) {
    remoteOptions.value = filterMethodOptions.value
  } else {
    remoteOptions.value = filterMethodOptions.value.filter((option) => {
      return `${option.label}${option.value}`
        .toLocaleLowerCase()
        .includes(input.toLocaleLowerCase())
    })
  }
}

const filterMethodOptions = ref([
  { label: 'HeFei', value: 'HeFei' },
  { label: 'WuHu', value: 'WuHu' },
  { label: 'BengBu', value: 'BengBu' },
  { label: 'HuaiNan', value: 'HuaiNan' },
  { label: 'MaAnShan', value: 'MaAnShan' },
  { label: 'HuaiBei', value: 'HuaiBei' },
  { label: 'TongLing', value: 'TongLing' },
  { label: 'AnQing', value: 'AnQing' },
  { label: 'HuangShan', value: 'HuangShan' },
  { label: 'FuYang', value: 'FuYang' },
  { label: 'SuZhou', value: 'SuZhou' },
  { label: 'ChuZhou', value: 'ChuZhou' },
  { label: 'LuAn', value: 'LuAn' },
  { label: 'XuanCheng', value: 'XuanCheng' },
  { label: 'ChiZhou', value: 'ChiZhou' },
  { label: 'BoZhou', value: 'BoZhou' }
])
</script>
