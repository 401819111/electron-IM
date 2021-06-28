// 引入mock
import Mock from 'mockjs'
const Random = Mock.Random
Mock.mock('/chatList', "get", {
  status: 200,
  message: "success",
  "data|10-18": [
    {
      //聊天标题,用户名、群名
      title: Random.cname(),
      // 个人:1,群:2
      'type|1': ['1', '2'],
      // 头像
      avatar: Random.image('200x200', '#50B347', '#FFF', '头像'),
      //用户或群id
      uid: Random.integer(2, 10),
      //最后一条聊天消息数据,用于展示
      lastMsg: {
        userName: Random.cname(),
        cont: Random.csentence(),
      },
      createdTime: Random.datetime('yyyy-MM-dd HH:mm:ss'),
      updateTime: Random.datetime('yyyy-MM-dd HH:mm:ss')
    }
  ]
});