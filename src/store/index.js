import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    requestState: false,
  },
  mutations: {
    // 加载动画
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    // 控制页面渲染
    setNetState(state, requestState) {
      state.requestState = requestState;
    },
  },
  actions: {

  },
  modules: {
    app
  },
  getters
})

export default store
