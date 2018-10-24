
import {
  reqCategory,
  reqHome,
  reqBanner
} from '../api'
import {
  RECEIVE_CATEGORY,
  RECEIVE_BANNER,
  RECEIVE_HOME
} from './mutation-types'

export default {
  async getCategory({commit}){
    const result=await reqCategory()
    commit(RECEIVE_CATEGORY,{category:result.data})
  },
  async getHome({commit}){
    const result=await reqHome()
    commit(RECEIVE_HOME,{home:result.data})
  },
  async getBanner({commit}){
    const result=await reqBanner()
    commit(RECEIVE_BANNER,{banner:result.data})
  },
}
