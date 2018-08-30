
export default [
  {
    path: '/',
    name: 'HelloWorld',
    meta: {
      title: 'HelloWorld',
    },
    component: () => import('@/views/HelloWorld.vue')
  },
  {
    path: '/HelloChongQing',
    name: 'HelloChongQing',
    meta: {
      title: 'HelloChongQing',
    },
    component: () => import('@/views/HelloChongQing.vue')
  }
]
