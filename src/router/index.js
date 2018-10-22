import Vue from 'vue'
import VueRouter from 'vue-router'

import Interlayer from '../pages/Interlayer/Interlayer.vue'
import Home from '../pages/Home/Home.vue'
import More from '../pages/More/More.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShopItem from '../pages/ShopItem/ShopItem.vue'
import Person from '../pages/Person/Person.vue'
import ToLogin from '../pages/ToLogin/ToLogin.vue'
import TextLogin from '../pages/TextLogin/TextLogin.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/interlayer',
      component: Interlayer
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/more',
      component: More,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      component: ShopItem,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/person',
      component: Person,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/tologin',
      component: ToLogin
    },
    {
      path: '/textlogin',
      component: TextLogin
    },
    {
      path: '/',
      redirect: '/Interlayer'
    }
  ]
})
