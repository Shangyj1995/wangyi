<template>
  <div class="homeContainer">
    <!--头部-->
    <div class="h-warp">
      <!--搜索框-->
      <div class="h-header">
        <span>网易严选</span>
        <div class="search">
          <div class="content">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共9771款好物</span>
          </div>
        </div>
      </div>
      <!--选项列表-->
      <div class="h-list">
        <ul class="list-item">
          <li>配件</li>
          <li>服装</li>
          <li>电器</li>
          <li>洗护</li>
          <li>饮食</li>
          <li>餐厨</li>
          <li>居家</li>
          <li>婴童</li>
          <li>文体</li>
          <li>特色</li>
        </ul>
      </div>
    </div>

    <!--轮播图-->
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

    <div class="h-grow">
      <div class="item">
        <img src="" alt="">
        <span>网易自营品牌</span>
      </div>
      <div class="item">
        <img src="" alt="">
        <span>30天无忧退货</span>
      </div>
      <div class="item">
        <img src="" alt="">
        <span>48小时快速退款</span>
      </div>
    </div>

    <div class="h-floor">
      <div class="h-daoh">
        <div>
          <span>品牌制造商直供</span>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
      <div class="h-wrap">
        <div class="warp-item">
          <h4>CK制造商</h4>
          <div class="title">25元起</div>
        </div>
        <div class="warp-item">
          <h4>CK制造商</h4>
          <div class="title">25元起</div>
        </div>
        <div class="warp-item">
          <h4>CK制造商</h4>
          <div class="title">25元起</div>
        </div>
        <div class="warp-item">
          <h4>CK制造商</h4>
          <div class="title">25元起</div>
        </div>
      </div>
    </div>

    <!--新品-->
    <div class="h-newItems">
      <header class="new-item">
        <span>新品首发</span>
        <div class="all">查看全部 ></div>
      </header>

      <div class="new-girl">
        <ul class="girl-list">
          <li class="list">
            <div class="list-img">
              <img src="./images/12.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="pirce">98￥</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
  new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homeContainer
  background #F4F4F4
  overflow hidden
  .h-warp
    background #F4F4F4
    overflow hidden
    position fixed
    z-index 100
    top 0
    width 100%
    .h-header
      background #ffffff
      padding 16px
      width 100%
      height 75px
      display flex
      justify-content space-between
      align-items center
      span
        width 24%
        font-size 34px
        font-weight bold
      .search
        width 70%
        height 60px
        font-size 29px
        background-color #ededed
        border-radius 2px
        display flex
        align-items center
        justify-content center
        margin-right 34px
        .content
          .iconfont
            font-size 30px
          span
            color #666666
            font-size 28px
    .h-list
      width 100%
      height 54px
      overflow hidden
      background #ffffff
      display flex
      padding 0 0 12px 0
      .list-item
        padding 0 0 12px 0
        display flex
        justify-content space-between
        align-items center
        li
          width 70px
          text-align center
          flex-wrap nowrap
          margin 0 38px
          font-size 28px
  .swiper-container
    width 100%
    height 400px
    background gold
    margin-top 152px
  .h-grow
    margin-bottom 10px
    background #fff
    display flex
    justify-content space-between
    align-items center
    width 100%
    margin-top -10px
    .item
      width 33%
      height 72px
      margin-left 10px
      span
        font-size 25px
        color #333
        line-height 72px
        vertical-align middle
        margin-left 10px

  .h-floor
    margin-bottom 10px
    background-color #ffffff
    .h-daoh
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      height 110px
      font-size 32px
      .iconfont
        font-size 28px
    .warp-item
      display inline-block
      margin 0 0 8px 8px
      width 42%
      height 240px
      overflow hidden
      background-color #f4f4f4
      padding 19px
      border 1px solid #999
      &:nth-child(2)
        margin-rigth 8px
      h4
        font-size 28px
        color: #333
        margin-bottom 8px
      .title
        font-size 24px
        color: #333

  .h-newItems
    .new-item
      position relative
      width 100%
      height 260px
      background #F1F7FD
      span
        position absolute
        top 20%
        left 50%
        transform translateX(-50%)
        color #8BA0B6
        font-size 36px
      .all
        position absolute
        top 35%
        left 50%
        transform translateX(-50%)
        width 240px
        height 50px
        background #D8E5F1
        margin-top 6px
        font-size 28px
        color #8BA0B6
        text-align center
        line-height 50px
    .new-girl
      /*480*/
      height 1000px
      margin-top 20px
      background #fff
      padding-bottom 15px
      .girl-list
        display flex
        .list
          width 280px
          height 477px
          margin-rigth 30px
          .list-img
            img
              width 280px
              height 280px
          .title
            z-index 1
            margin-top -15px
            margin-left 15px
            height 30px
            overflow hidden
            background-color #f48f18
            padding 4px 18px
            line-height 25px
            text-align center
            color #fff
            font-size 21px
            border-radius 2px
            display inline-block
            vertical-align middle
          .name
            font-size 27px
            color: #333
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            padding 0 10px
          .list-item
            display block
            margin-bottom 10px
            font-size 26px
            color #7f7f7f
            line-height 30px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            padding 0 8px
            margin 14px 0
</style>
