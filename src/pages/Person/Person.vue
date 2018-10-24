<template>
  <div class="person">
    <HeaderTop/>
    <div class="g-img">
      <img src="./images/11.png" alt="">
    </div>
    <div class="g-login" @click="goto('/tologin')">
      <i class="iconfont icon-mail"></i>
      <span>账号登录</span>
    </div>
    <div class="g-message" @click="goto('/textlogin')">
      <i class="iconfont icon-duanxin"></i>
      <span>短信登录</span>
    </div>
    <div class="g-btn">
      <span>手机号快捷注册</span>
      <i class="iconfont icon-right"></i>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    components:{
      HeaderTop
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .person
    width 100%
    height 100%
    background #eee

    .g-img
      position relative
      width 100%
      height 418px
      img
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        width 268px
        height 90px
    .g-login
      margin-bottom 20px
      border-radius 2px
      width 90%
      height 96px
      margin 0 auto
      line-height 96px
      text-align center
      font-size 28px
      color #fff
      border 1px solid #b4282d
      background-color: #b4282d
      .iconfont
        font-size 38px
    .g-message
      margin-bottom 20px
      border-radius 2px
      width 90%
      height 96px
      margin 30px auto
      line-height 96px
      text-align center
      font-size 28px
      color #b4282d
      border 1px solid #b4282d
      .iconfont
        font-size 38px
    .g-btn
      color #333
      font-size 30px
      text-align center
      line-height 1.5
      .iconfont
        width 28px
        height 28px
        color #ccc
        font-size 36px
        text-align center
</style>
