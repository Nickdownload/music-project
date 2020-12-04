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
