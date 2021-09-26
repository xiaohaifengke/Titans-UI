# Button 的功规

- 基本用法：
  - 基础按钮（可通过 props 定制状态）
  - 支持插槽
  - 支持 icon
  - 按钮组 (额外的 button-group 组件)
    - 考虑添加的 props:
      - disabled
  - 加载中 loading
  - disabled
- 接受的 props:
  - label(和 slot 的功能类似)
  - type（按钮类型）：default/primary/success/warning/danger/info
  - mode（按钮模式）：fill/plain/outline/text
  - shape（按钮形状）：fillet/round/square
    > 当 mode 为 text 时，shape 无效
  - size（按钮大小）：large/normal/small/mini
  - disabled
  - loading
  - icon
  - iconPosition
