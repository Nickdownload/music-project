import request from '@/utils/request'

export const getBanners = ()=>{
  return  request({
        url:'/banner'
    })
}

export const getHotRcm = (num)=>{
  return  request({
        url:'/personalized',
        params:{
          limit:num
        }
    })
}

export function getNewAlbum(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}