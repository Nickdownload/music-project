import * as actionType from './constant'
import * as Api from '@/services/recommend'


export const fetchbanner = ()=>{
   return dispatch=>{
    Api.getBanners().then(res=>{
        dispatch(getbanner(res.banners))
    })
   } 
}

export const getbanner =(banners)=>({
    type:actionType.FENTCHBANNER,
    banners
})


export const FetchHocData = (num)=>{
    return dispatch=>{
      Api.getHotRcm(num).then(res=>{
          dispatch(getHocRcm(res.result))
      })
    }
} 

export const getHocRcm =(res)=>({
  type:actionType.FENTCHHOTCOMMEND,
  hotRecommend:res
})

export const FetchNewAlbumsData = (limit)=>{
  return dispatch =>{
    Api.getNewAlbum(limit).then(res=>{
      dispatch(getNewAlbums(res.albums))
    })
  }
}

export const getNewAlbums = (newAlbum)=>({
    type:actionType.FENTCHNEWALBUM,
    newAlbum
})


export const FetchRank = (idx)=>{
  return dispatch=>{
    Api.getTopList(idx).then(res=>{
      if(idx===0){
        dispatch(getupRankData(res.playlist))
      }else if(idx===1){
        dispatch(getNewRankData(res.playlist))
      }else if(idx ===3){
        dispatch(getOrgRankData(res.playlist))
      }
    })
  }
}
export const getupRankData = (upRank)=>({
   type:actionType.FENTCHUPRANK,
   upRank
})
export const getNewRankData = (newRank)=>({
  type:actionType.FENTCHNEWRANK,
  newRank
})
export const getOrgRankData = (orgRank)=>({
  type:actionType.FENTCHORG,
  orgRank
})