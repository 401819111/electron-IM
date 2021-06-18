# electron-IM

> 基于electron和electron-vue的聊天工具

## 安装方法

``` bash
#安装yarn
npm install -g yarn

# 设置yarn华为源
yarn config set registry https://repo.huaweicloud.com/repository/npm/

# 或者设置yarn淘宝源
yarn config set registry https://registry.npm.taobao.org/
# 这两个源都存在可能没更新electron版本的问题,灵活切换使用 

# 安装依赖
yarn install

# 热更新地址: localhost:9080
yarn run dev

# 构件生产
yarn run build

# lint 'src/'目录下所有的JS/Vue文件
yarn run lint

```

---

### 淘宝源可能会用到

```bash
# mac/linux
export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
export ELECTRON_CUSTOM_DIR="{{ version }}"

#windows:CMD
set ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
set ELECTRON_CUSTOM_DIR="{{ version }}"
```

## TODO:
- [ ] 语音聊天
- [ ] 富文本式聊天内容
- [ ] 类似于qq撤回的编辑功能
- [ ] 表情导入
- [ ] 机器人接入
- [ ] 同步qq消息

该项目通过[electron-vue](https://github.com/SimulatedGREG/electron-vue)构建,在[这里](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html)可以看到相关文档.
