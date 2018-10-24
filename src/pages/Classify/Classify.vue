<template>
  <div class="classIfy">
    <div class="c-wrap">
      <div class="warp">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共9714款好物</span>
      </div>
    </div>

    <div class="c-nav">
      <div class="nav-wrap">
        <ul class="nav-list">
          <li class="item" v-for="(item,index) in category.cateList" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>

    <div class="c-banner">
      <div class="ban">
        <img src="./images/20.png" alt="">
      </div>

      <div class="b-header">
        <div class="head">
          <span>特色区</span>
          <span>分类</span>
        </div>
        <ul class="list">
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
          <li class="item">
            <div class="item-r">
              <img src="./images/1.png" alt="">
              <div>日本馆</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['category'])
    },
    mounted(){
      this.$store.dispatch('getCategory')

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classIfy
    .c-wrap
      position relative
      background #fff
      padding-bottom 5px
      width 100%
      height 88px
      border-bottom 1px solid #999
      z-index 10
      .warp
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        width 90%
        height 52px
        background #ededed
        line-height 52px
        .iconfont
          position absolute
          left 130px
          top 5px
          font-size 29px
        span
          position absolute
          left 173px
          top 0px
          color #999
          font-size 29px
    .c-nav
      border-right 1px solid #999
      position fixed
      top 100px
      left 0
      bottom 0
      z-index 4
      width 162px
      background-color: #fff
      height 91%
      .nav-wrap
        position relative
        height 100%
        width 100%
        overflow hidden
        .nav-list
          padding-bottom 138px
          .item
            width 100%
            height 50px
            text-align center
            color #333
            margin 20px 0 60px 0
            font-size 28px
    .c-banner
      height 89%
      background #ffffff
      position absolute
      top 90px
      right 0
      margin-left 162px
      padding 30px 30px 21px
      .ban
        position relative
        width 100%
        height 180px
        display table
        img
          width 100%
          border-radius 4px
      .b-header
        .head
          width 528px
          height 108px
          text-align center
          span
            line-height 108px
            font-size 23px
            color: #333

        .list
          .item
            float left
            margin-bottom 50px
            width 144px
            height 219px
            margin-right 31px
            .item-r
              width 100%
              height 100%
              img
                width 100%
                height 144px
              div
                height 75px
                font-size 28px
                color #333
                text-align center
</style>
