<template>
  <div class="container">
    <ul class="">
      <li class="" v-for='(item,index) in msgList' :key='index'>
        <img :src="item.src" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'msgList',
    components: {},
    props: {},
    data () {
      return {
        msgList: [
          {
            src: 'https://picsum.photos/100/100?random=' + new Date().getTime(),
            title: '彭鱼宴'
          },
          {
            src: 'https://picsum.photos/100/100?random=' + new Date().getTime(),
            title: '马马地堡'
          },
          {
            src: 'https://picsum.photos/100/100?random=' + new Date().getTime(),
            title: '刘德发'
          },
          {
            src: 'https://picsum.photos/100/100?random=' + new Date().getTime(),
            title: 'miku'
          }
        ]
      }
  },
    methods: {}
  }
</script>

<style lang="scss" scoped></style>
