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
        <ul ref="optionsUl" class="list-item">
          <li class="on">配件</li>
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
        <div class="swiper-slide">
          <img src="./images/12.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/14.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/1.png" alt="">
        </div>
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
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/12.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/12.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/12.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/12.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/12.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="h-newItems">
      <header class="moods-item">
        <span>人气推荐.好物推选</span>
        <div class="all">查看全部 ></div>
      </header>

      <div class="new-girl">
        <ul class="girl-list">
          <li class="list">
            <div class="list-img">
              <img src="./images/13.png" alt="">
            </div>
            <div class="title">绿豆糕</div>
            <div class="name"> 细腻松软，入口绵柔</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/13.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/13.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/13.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/13.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
          <li class="list">
            <div class="list-img">
              <img src="./images/13.png" alt="">
            </div>
            <div class="title">新品</div>
            <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
            <div class="list-item">夏季爆品，媲美现煮</div>
            <div class="price">98￥</div>
          </li>
        </ul>
      </div>
    </div>


    <!--限时选购-->
    <div class="h-time">
      <a href="javascript:;">
        <div class="time-wrap">
          <div class="left-item">
            <div class="title">严选限时购</div>
          </div>
          <div class="right-item">
            <div class="item-img">
              <img src="./images/14.png" alt="">
            </div>
            <div class="item-price">
              <div class="new-p">
                <span class="rmb">￥</span>
                <span class="num">306</span>
              </div>
              <div class="old-p">
                <span class="rmb">￥</span>
                <span class="num">359</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="h-goSee">
      <a href="javascript;:">
        <img src="./images/15.jpg" alt="">
      </a>
    </div>

    <!--专题精选-->
    <div class="h-special">
      <header class="title">
        <span>专题精选</span>
        <i class="iconfont icon-right"></i>
      </header>
      <div class="topic-item">
        <div class="top-i">
          <ul class="t-item">
            <li class="list">
              <a href="javascript;:">
                <img src="./images/16.jpg" alt="">
              </a>
              <div class="list-price">
                <h4>给毛孔来一次深度清洁</h4>
                <span>
                  107.1元起
                </span>
              </div>
              <div class="list-info">硅胶洁面仪，洗出会发光的素颜肌</div>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!--居家好物-->
    <div class="h-living">
      <div class="living">
        <h3 class="l-title">居家好物</h3>
        <div class="l-wrap">
          <img src="./images/18.png" alt="">
          <div class="reco">宽细夹排，升级爽滑凉感</div>
          <div class="name">天然宽篾头层青碳化竹凉席</div>
        </div>
        <div class="l-wrap">
          <img src="./images/18.png" alt="">
          <div class="reco">宽细夹排，升级爽滑凉感</div>
          <div class="name">天然宽篾头层青碳化竹凉席</div>
        </div>
        <div class="l-wrap">
          <img src="./images/18.png" alt="">
          <div class="reco">宽细夹排，升级爽滑凉感</div>
          <div class="name">天然宽篾头层青碳化竹凉席</div>
        </div>
        <div class="l-wrap">
          <img src="./images/18.png" alt="">
          <div class="reco">宽细夹排，升级爽滑凉感</div>
          <div class="name">天然宽篾头层青碳化竹凉席</div>
        </div>
        <div class="l-wrap">
          <img src="./images/18.png" alt="">
          <div class="reco">宽细夹排，升级爽滑凉感</div>
          <div class="name">天然宽篾头层青碳化竹凉席</div>
        </div>
        <div class="l-wrap">
          <img src="./images/18.png" alt="">
          <div class="reco">宽细夹排，升级爽滑凉感</div>
          <div class="name">天然宽篾头层青碳化竹凉席</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import "../../../static/css/swiper.min.css"
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['banner','home'])
    },
    mounted(){
      this.$store.dispatch('getBanner')
      this.$store.dispatch('getHome')


      new BScroll('.h-list',{
        scrollX:true
      })
      new Swiper('.swiper-container', {
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })

    }

  }
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
      margin-top 170px
      img
        width 100%
        height 100%
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
        background url(images/12.png)
        background-repeat no-repeat
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
        height 480px
        margin-top 20px
        background #fff
        padding-bottom 22px
        .girl-list
          display flex
          .list
            float left
            width 280px
            height 477px
            margin-left 30px
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
            .price
              padding 5px
              font-size 28px
              line-height 1
              text-align left
              color #b4282d
      .moods-item
        background #FEF7E3
        position relative
        width 100%
        height 260px
        span
          position absolute
          top 20%
          left 50%
          transform translateX(-50%)
          color #CAB997
          font-size 36px
        .all
          position absolute
          top 35%
          left 50%
          transform translateX(-50%)
          width 240px
          height 50px
          background #F4E9CB
          margin-top 6px
          font-size 28px
          color #BDAB84
          text-align center
          line-height 50px
    .h-time
      width 100%
      .time-wrap
        height 380px
        padding 30px 40px 30px 56px
        margin-bottom 20px
        overflow hidden
        .left-item
          width 334px
          height 240px
          padding-top 80px
          float left
          .title
            font-size 36px
            line-height 36px
            margin-bottom 24px
            color #333
            letter-spacing 13px
        .right-item
          position relative
          width 320px
          height 320px
          float right
          .item-img
            img
              width 100%
              height 100%
          .item-price
            position absolute
            bottom 34px
            right 20px
            width 96px
            height 96px
            background #F48D1C
            border-radius 50%
            color #fff
            .new-p
              .rmb
                position absolute
                top 20px
                left 8px
                font-size 27px
              .num
                font-size 29px
                position absolute
                right 8px
                top 18px
            .old-p
              .rmb
                position absolute
                left 8px
                bottom 20px
                font-size 27px
              .num
                font-size 29px
                position absolute
                right 8px
                bottom 18px

    .h-goSee
      width 100%
      height 300px
      margin-bottom 30px
      img
        width 100%
        height 100%
    .h-special
      height 563px
      .title
        height 110px
        width 100%
        text-align center
        line-height 110px
        span
          font-size 38px
          color: #B9C1C1
        .iconfont
          font-size 36px
          color: #B9C1C1

      .topic-item
        height 417px
        padding 0 10px 36px
        .top-i
          height 100%
          .t-item
            height 100%
            .list
              width 575px
              height 417px
              margin-left 21px
              a
                width 575px
                height 320px
                margin-bottom 16px
                img
                  width 575px
                  height 312px
                  border-radius 10px
              .list-price
                height 41px
                margin-bottom 2px
                h4
                  float left
                  font-size 28px
                span
                  float right
                  font-size 28px
                  color #b4282d
              .list-info
                font-size 24px
                color #7f7f7f
                float left

    .h-living
      .living
        .l-title
          width 100%
          height 120px
          font-size 32px
          text-align center
          line-height 120px
          color #333
        .l-wrap
          width 345px
          height 546px
          padding-bottom 15px
          margin 0 20px 15px 10px
          float left
          img
            height 345px
            width 345px
          .reco
            width 95%
            font-size 24px
            padding 20px 10px
            color #9F8A60
            background #F1ECE2
          .name
            font-size 32px
            color: #333
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            padding 0 10px
            margin-top 10px



</style>
