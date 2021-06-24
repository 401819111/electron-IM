<template>
  <div class='container'>

  </div>
</template>
  
<script>
  export default {
    name: 'leftPanel',
    components: {
    
    },
    props: {},
    data() {
      return {
        infoList:[{
          //聊天标题,用户名、群名
          title:'',
          /** 
           * 个人:1,群:2
           * TODO:加入其它类型,如服务(第三方通知等)
          */
          type:'',
          /** 
           * 头像
           * TODO:在没有群头像的情况下使用默认头像或者用户头像组合
          */
          avatar:'',
          //用户或群id
          uid:'',
          //最后一条数据,用于展示
          lastMsg:{
            userName:'',
            cont:'',
          },
          createdTime:'',
          updateTime:''
        }]
      }
    },
    methods: {
    },
  };
</script>
  
<style lang='scss' scoped>
  
</style>