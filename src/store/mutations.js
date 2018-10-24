import {
  RECEIVE_CATEGORY,
  RECEIVE_BANNER,
  RECEIVE_HOME
} from './mutation-types'

export default {
  [RECEIVE_CATEGORY](state,{category}){
    state.category=category
  },
  [RECEIVE_BANNER](state,{banner}){
    state.banner=banner
  },
  [RECEIVE_HOME](state,{home}){
    state.home=home
  },
}
