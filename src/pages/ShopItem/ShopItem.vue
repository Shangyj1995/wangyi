<template>
  <div class="shopItem">
    <header class="shop-cart">
      <div class="cart">购物车</div>
    </header>
    <div class="shop-options">
      <span class="left">30天无忧退货</span>
      <span class="center">48小时快速退款</span>
      <span class="right">满88元免邮费</span>
    </div>
    <div class="shop-icon">
      <span>
        <i class="iconfont icon-gouwuche"></i>
      </span>
    </div>
    <div class="add">去添加点什么吧</div>
    <div class="login" @click="$router.replace('/person')">
      登录
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopItem
    position relative
    width 100%
    height 100%
    .shop-cart
      width 100%
      height 88px
      background #fff
      .cart
        width 92%
        font-size 36px
        margin 0 auto
        text-align center
        line-height 88px
    .shop-options
      width 92%
      font-size 24px
      color: #666
      margin 15px auto
      .left
        float left
      .center
        float left
        margin-left 112px
      .right
        float right
    .shop-icon
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      width 250px
      height 250px
      .iconfont
        font-size 248px
    .add
      position absolute
      top 260px
      left 5px
      right 0
      bottom 0
      margin auto
      width 210px
      height 27px
      font-size 28px
      color grey
    .login
      position absolute
      bottom 393px
      left 0
      right 0
      margin auto
      width 64%
      height 92px
      background #b4282d
      font-size 31px
      color: #fff
      text-align center
      line-height 92px
</style>
