# Git 分支及版本控制管理规范

### 1. 分支命名
可能需要的分支如下：
- master： 主分支，也是用于部署生产环境的分支，确保master分支稳定性。

  master分支一般由develop、release以及hotfix分支合并，任何时间都不能直接修改代码。

- dev： 开发分支，始终保持最新完成以及bug修复后的代码。 一般开发的新功能时，feature分支都是基于dev分支下创建的。

- feature： 开发新功能时，以develop为基础创建feature分支。

  命名规则：feature/组名缩写_功能模块名。feature/ 开头的为特性分支。
  命名示例：feature/user_module、 feature/cart_module。

- release 预上线分支，发布提测阶段，会创建release分支代码为基准提测。
  当有一组feature开发完成，首先会合并到develop分支，进入提测时，会以develop为基础创建release分支。
  如果测试过程中若存在bug需要修复，则直接由开发者在release分支修复并提交。
  当测试完成之后，合并release分支到master和develop分支，此时master为最新代码，用作上线。

- hotfix：修复分支，命名规则参考 feature

  线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支，修复完成后，需要合并到master分支和develop分支

- refactor：重构分支，命名规则参考 feature

  重构完成并测试完成后，需要合并到master分支和develop分支



以上除了master分支，其余均为可选分支，用到则创建这个分支，没用到则不用创建。

### 2. 高频场景对应的操作

- 增加新功能

  (dev)$: git checkout -b feature/xxx            # 从dev建立特性分支

  (feature/xxx)$: blabla                         # 开发

  (feature/xxx)$: git add xxx

  (feature/xxx)$: git commit -m 'feat: commit comment'

  (dev)$: git merge feature/xxx --no-ff          # 把特性分支合并到dev

- 修复紧急bug

  (master)$: git checkout -b hotfix/xxx         # 从master建立hotfix分支

  (hotfix/xxx)$: blabla                         # 开发

  (hotfix/xxx)$: git add xxx

  (hotfix/xxx)$: git commit -m 'fix: commit comment'

  (master)$: git merge hotfix/xxx --no-ff       # 把hotfix分支合并到master，并上线到生产环境

  (dev)$: git merge hotfix/xxx --no-ff          # 把hotfix分支合并到dev，同步代码

- 测试环境代码

  (release)$: git merge dev --no-ff             # 把dev分支合并到release，然后在测试环境拉取并测试
  (dev)$: git merge release --no-ff             # 如果在release分支上修改过bug，则需要把release分支合并到dev，同步代码

- 生产环境上线

  (master)$: git merge release --no-ff          # 把release分支合并到master

  (master)$: git tag -a v0.1 -m '部署包版本名'    # 给版本命名，打Tag

### 3. 分支合并

当遇到冲突时，相关人一起解决，切勿随意删除他人代码，导致代码丢失。  
全量测试前合并完所有分支，切勿漏分支。

### 4. Commit 信息规范

每次提交写明本次改动点，及注意事项。参考【[Git提交规范](../Git提交规范/Git提交规范.md)】
  