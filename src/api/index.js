import fetch from '@/config/fetch'

export function getList(params) {
  return fetch({
    url: '/table/list',
    methods: 'get',
    params
  })
}
