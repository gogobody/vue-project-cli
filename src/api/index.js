import fetch from '@/config/fetch'

export function getList(params) {
  return fetch({
    url: '/table/list',
    methods: 'get',
    params
  })
}

export function login(phone, code) {
  return fetch({
    url: '/login',
    methods: 'post',
    data: {
      phone,
      code
    }
  })
}
