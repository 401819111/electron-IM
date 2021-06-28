// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  // 使用同步加载依赖
  const Mock = require('mockjs')
  require('./services/chatList')
  Mock.setup({
    timeout: 500 // 请求延时时间
  })
}