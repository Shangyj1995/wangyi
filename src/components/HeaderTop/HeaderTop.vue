<template>
  <div class="g-header">
      <span class="g-home" @click="goto('/home')">
        <i class="iconfont icon-home"></i>
      </span>
    <span class="g-wy">网易严选</span>
    <span class="g-sousuo" @click="goto('/home')">
        <i class="iconfont icon-sousuo"></i>
      </span>
    <span class="g-gouwu" @click="goto('/shop')">
        <i class="iconfont icon-gouwuche1"></i>
      </span>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.g-header
  position relative
  width 100%
  height 88px
  background #fff
  .g-home
    .iconfont
      position absolute
      top 15px
      left 20px
      font-size 56px
  .g-wy
    font-size 38px
    position absolute
    top 24px
    left 310px
  .g-sousuo
    .iconfont
      position absolute
      top 22px
      right 110px
      font-size 50px
  .g-gouwu
    .iconfont
      position absolute
      top 22px
      right 25px
      font-size 54px
</style>
