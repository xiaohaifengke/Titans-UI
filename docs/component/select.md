# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法
适用广泛的基础单选 `v-model` 的值为当前被选中的 `ti-option` 的 `value` 属性值。

:::demo 在 `ti-option` 中，设定 `disabled` 值为 true，即可禁用该选项。
```vue
<template>
  <ti-select v-model="value" size="large">
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select v-model="value" size="normal">
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select v-model="value" size="small">
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
  <ti-select v-model="value" size="mini">
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </ti-select>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('')
const options = ref([
  { label: '合肥', value: '皖A', disabled: false },
  { label: '芜湖', value: '皖B', disabled: false },
  { label: '蚌埠', value: '皖C', disabled: false },
  { label: '淮南', value: '皖D', disabled: false },
  { label: '马鞍山', value: '皖E', disabled: true },
  { label: '淮北', value: '皖F', disabled: false },
  { label: '铜陵', value: '皖G', disabled: true },
  { label: '安庆', value: '皖H', disabled: false },
  { label: '黄山', value: '皖J', disabled: false },
  { label: '阜阳', value: '皖K', disabled: false },
  { label: '宿州', value: '皖L', disabled: false },
  { label: '滁州', value: '皖M', disabled: true },
  { label: '六安', value: '皖N', disabled: false },
  { label: '宣城', value: '皖P', disabled: false },
  { label: '池州', value: '皖R', disabled: false },
  { label: '亳州', value: '皖S', disabled: false }
])
</script>
```
:::

## 基础多选
为 `ti-select` 设置 `multiple` 属性即可启用多选， 此时 `v-model` 的值为当前选中值所组成的数组。
:::demo
```vue
<template>
  <ti-select v-model="multipleValue" multiple>
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ti-select>
</template>
<script setup>
import { ref } from 'vue'
const multipleValue = ref([])
const options = ref([
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
</script>
```
:::

## 禁用/只读
选择器禁用状态和只读状态。

设置 `disabled` 属性和 `readonly` 属性即可。

:::demo
```vue
<template>
  <ti-select v-model="value" disabled>
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ti-select>
  <ti-select v-model="value" readonly>
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ti-select>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('皖L')
const options = ref([
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
</script>
```
:::

## 可清空单选
包含清空按钮，可将选择器清空为初始状态。

为 `ti-select` 设置 `clearable` 属性，则可将选择器清空。 需要注意的是，`clearable` 属性仅适用于单选。

:::demo
```vue
<template>
  <ti-select v-model="value" clearable>
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ti-select>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('皖L')
const options = ref([
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
</script>
```
:::

## 自定义模板
你可以自定义单个选项怎么被渲染。

将自定义的 HTML 模板插入 `ti-option` 的 slot 中即可。

:::demo
```vue
<template>
  <ti-select v-model="value" clearable>
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span
        style="
          float: right;
          color: #aaa;
          font-size: 13px;
        "
      >{{ item.value }}</span
      >
    </ti-option>
  </ti-select>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('皖L')
const options = ref([
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
</script>
```
:::

## 筛选选项
可以利用筛选功能快速查找选项。

为 `ti-select` 添加 `filterable` 属性即可启用筛选功能。
默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。
如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。
`filter-method` 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。

:::demo
```vue
<template>
  <ti-select
    v-model="value"
    filterable
    placeholder="请输入"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ti-select>
  <ti-select
    v-model="value"
    filterable
    placeholder="请输入"
    :filterMethod="filterMethod"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ti-select>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('')
const filterMethodValue = ref('')
const options = ref([
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
const filterMethod = (input, option) => {
  if (!input || !input.trim()) return true
  return `${option.label}${option.value}`.includes(input)
}
</script>
```
:::

::: warning Bug
Oh!!! 过滤功能似乎裂开了，会尽快抢修的... ^_^
:::

## 远程搜索
通过输入关键字在服务器上来搜索数据

为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 true，同时监听事件 `input-change` 事件。
`input-change` 事件会在输入值发生变化时触发，参数为当前输入值。

:::demo
```vue
<template>
  <ti-select
    v-model="value"
    filterable
    placeholder="请输入"
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
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const loading = ref(false)
const remoteOptions = ref<{ label: string; value: any; disabled?: boolean }[]>(
  []
)
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

const sleep = async (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}
</script>
```
:::

## 将选项进行分组
你可以为选项进行分组来区分不同的选项。

使用 `ti-option-group` 对备选项进行分组，它的 `label` 属性为分组名。

:::demo
```vue
<template>
  <ti-select v-model="groupValue" clearable>
    <ti-option-group
      v-for="group in groupOptions"
      :key="group.label"
      :label="group.label"
    >
      <ti-option
        v-for="item in group.children"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ti-option-group>
  </ti-select>
</template>
<script setup>
import { ref } from 'vue'
const groupValue = ref('')
const groupOptions = ref([
  {
    label: '蔬菜',
    children: [
      { label: '西红柿', value: 'tomato' },
      { label: '黄瓜', value: 'cucumber' }
    ]
  },
  {
    label: '水果',
    children: [
      { label: '香蕉', value: 'banana' },
      { label: '桔子', value: 'orange' },
      { label: '葡萄', value: 'grape' }
    ]
  }
])
</script>
```
:::

[comment]: <> (::: warning BUG)

[comment]: <> (1. 分组模式下，选中时，下拉列表会被隐藏。)

[comment]: <> (:::)

## Select 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model | 绑定值 | string / number / boolean | —                    |  —      |
| disabled | 是否禁用状态 | boolean | —                                              | false   |
| readonly | 是否只读状态 | boolean | —                                              | false   |
| size     | 选择器尺寸 | string  | large / normal / small / mini                    | normal |
| clearable | 是否显示清除按钮 | boolean | —                                         | false   |
| multiple | 是否多选         | boolean | —                                         | false   |
| multiple-limit | 多选时用户最多可以选择的项目数 | number | —                          | 1000000 |
| placeholder | 选择器占位文本 | string  | —                                         | —       |
| filterable | 是否可以筛选 | boolean  | —                                          | false   |
| filter-method | 自定义筛选方法 | function  | —                                     | —       |
| remote  | 是否开启从服务器中远程加载选项列表 | boolean  | —                            | false   |
| loading  | 是否正在从远程获取数据 | boolean  | —                                    | false   |
| loading-text  | 搜索内容加载中的文字 | string  | —                                  | Loading |
| no-match-text  | 搜索条件无匹配时显示的文字 | string  | —                   | No matching data |
| no-data-text  | 选项为空时显示的文字 | string  | —                                  | No data |
| teleport-to-body  | 是否将 Select 的下拉菜单teleport至 body | boolean  | —          | true    |
| popper-class  | Select 下拉框的类名 | string  | —                                  | —       |
| name | 多选框的输入框的原生 name 属性 | string  | —                                  | —       |
| autocomplete | 多选框的输入框的原生 autocomplete 属性 | string  | —                  | off     |

## Select 插槽
| 插槽名         	| 说明                                 |
| --------------	| ----------------------------------- |
| —       	      | Option 组件列表                      |

## Select 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| input-change    | 启用筛选时输入框的值变化时触发 | (value: string ) |

::: info TODO
待新增 change、 clear、 blur、 focus 事件。
:::


