/**
 * 文档: https://www.hongqiye.com/doc/mockm
 */
module.exports = util => {
  const {
    libObj: { mockjs },
  } = util
  return {
    guard: true, // 异常崩溃是否自动重启
    port: 9000, // http://127.0.0.1:9000 可以打开经过代理的接口
    testPort: 9005, // http://127.0.0.1:9005 可以进行 mockm 的界面式操作
    replayPort: 9001, // http://127.0.0.1:9001 可以返回历史的接口响应
    watch: [],
    // proxy: '', // 替换为后端的接口地址, 如果没有可不填
    api: {
      'get /chatList': mockjs.mock({
        status: 200,
        message: "success",
        "data|10-18": [
          {
            //聊天标题,用户名、群名
            title: '@cname',
            // 个人:1,群:2
            'type|1': ['1', '2'],
            // 头像
            avatar: "@image('200x200', '#50B347', '#FFF', '头像')",
            //用户或群id
            uid: '@integer(2, 10)',
            //最后一条聊天消息数据,用于展示
            lastMsg: {
              userName: '@cname',
              cont: '@csentence(2,40)',
            },
            createdTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
            updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')"
          }
        ]
      }),
    },
  }
}
