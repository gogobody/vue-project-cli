import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)

const HelloWorld = () =>
  import ('@/views/HelloWorld')
const HelloChongQing = () =>
  import ('@/views/HelloChongQing')

const routes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld,
  meta: {
    title: 'HELLO'
  }
}, {
  path: '/hellochongqing',
  name: 'HelloChongQing',
  component: HelloChongQing,
  meta: {
    title: 'HelloChongQing'
  }
}]

const router = new Router({
  routes
})

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
      isPush = true
      method.apply(null, args)
    }
    // console.log(method)
})

router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      // 判断是否是ios右滑前进
      if (!isPush && (Date.now() - endTime) > 377) {
        store.commit('updateDirection', {
          direction: ''
        })
      } else {
        store.commit('updateDirection', {
          direction: 'forward'
        })
      }
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {
          direction: ''
        })
      } else {
        store.commit('updateDirection', {
          direction: 'reverse'
        })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {
      direction: 'forward'
    })
  }
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0)
  }
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   if (!isLogin()) {
  //     return next({
  //       path: '/'
  //     })
  //   }
  // }
  // if (to.matched.some(record => record.meta.requireNotAuth)) {
  //   if (isLogin()) {
  //     return next({
  //       path: '/wantreport'
  //     })
  //   }
  // }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  store.commit('updateLoadingStatus', {
    isLoading: true
  })
  store.commit('setNetState', false)
  next()
})

router.afterEach((to) => {
  store.commit('updateLoadingStatus', {
    isLoading: false
  })
})

export default router
