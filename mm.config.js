module.exports = util => {
  return {
    // proxy: '', // 替换为后端的接口地址, 如果没有可不填
    api: { // 编写自己的接口
      '/chatList': util.libObj.mockjs.mock({
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
