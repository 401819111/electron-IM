import axios from 'axios'
import service from './request'
let api
api = {
  // 登录
  login: (info) => service.post('/test/', info),
  // 获取聊天用户列表
  chatList: (info) => service.get('/chatList', info),
}
export {
  api
}
