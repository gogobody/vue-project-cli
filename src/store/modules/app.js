import {
  login
} from '@/api/index'
import {
  setToken
} from '@/config/auth'
import router from '../../router/index'

const LOGIN = 'LOGIN'

const app = {
  state: {
    phone: '',
    token: ''
  },
  mutations: {
    [LOGIN](state, payload) {
      state.phone = payload.phone
      setToken(payload.token)
    }
  },
  actions: {
    async Login({
      commit
    }, payload) {
      let res = await login(payload.phone, payload.code)
      if (res.flag) {
        commit('LOGIN', res.data)
        commit('setNetState', true)
        router.push('/')
      }
    }
  }
}

export default app
