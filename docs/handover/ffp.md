# 基本信息介绍

## 项目结构
项目结构信息参考[这里](./project-structure)

## 项目简介
该项目是智慧森防的应用工程，脚手架采用的是[emp微前端解决方案](https://www.npmjs.com/package/@efox/emp)。

## 依赖管理工具

[**Yarn**](https://yarn.bootcss.com/) 是为了弥补 npm 的一些缺陷而出现的，建议使用 **Yarn** 作为本项目的依赖管理工具。

## 提交代码
强烈建议用 `yarn cz` 命令替代 `git commit -m "xxx"` 命令，因为执行 `yarn cz` 命令会弹出一个交互式命令行界面可供输入规范的特定格式的 commit message。
在当前项目中使用 `git commit -m "xxx"` 提交代码时会因为 commit message 不满足规范而导致提交失败。
在弹出的交互式命令行界面中输入规范的表达清晰的 commit message 可以在项目发版时很方便的生成 `CHANGELOG.md`。

## 分支信息
当前项目有三个分支：
- master(等发版时再考虑使用)
- develop 开发分支
- heilongjiang 黑龙江环境的分支

> 当前项目的分支管理规范参考：[Git 分支及版本控制管理规范](./branch)

## npm run-script

### 安装依赖

```
yarn
```

### 调试项目

```
yarn dev
```

### 构建项目

```
yarn build
```

### 正式环境调试

```
yarn serve
```

### 提交到本地仓库（替代 `git commit` 命令）

```
yarn cz
```
