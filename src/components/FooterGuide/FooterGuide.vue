<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/home')" :class="{on:$route.path==='/home'}">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/more')" :class="{on:$route.path==='/more'}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goto('/classify')" :class="{on:$route.path==='/classify'}">
      <span class="item_icon">
        <i class="iconfont icon-navicon-kcfl"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/shop')" :class="{on:$route.path==='/shop'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/person')" :class="{on:$route.path==='/person'}">
      <span class="item_icon">
        <i class="iconfont icon-mine"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .footer_guide
    top-border-1px(#333)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      justify-content center
      align-items center
      margin 5px
      &.on
        color #b4282d !important
      span
        font-size 24px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 40px
</style>
