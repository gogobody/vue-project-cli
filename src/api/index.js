import fetch from '@/config/fetch'

export function getList(params) {
  return fetch({
    url: '/table/list',
    methods: 'get',
    params,
    headers: {
    }
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

export function getCode(phone) {
  return fetch.post('/code', {
    phone
  }, {
    headers: {
    }
  })
}
