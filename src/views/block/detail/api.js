import request from '@/utils/request'

export function getDetail(height) {
  return request({
    url: '/block/' + height,
    method: 'get'
  })
}
