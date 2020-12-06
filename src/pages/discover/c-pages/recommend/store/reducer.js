import {Map} from 'immutable'
import * as actionType from './constant'
const initStore ={
    banners:[],
    hotRecommend:[],
    newAlbum:[],
    upRank:{},
    newRank:{},
    orgRank:{}
}
export default function reducer(store=Map(initStore),action){
     switch(action.type){
         case actionType.FENTCHBANNER:
            return store.set('banners',action.banners) 
         case actionType.FENTCHHOTCOMMEND:
             return store.set('hotRecommend',action.hotRecommend)
         case actionType.FENTCHNEWALBUM:
            return store.set('newAlbum',action.newAlbum) 
         case actionType.FENTCHNEWRANK:
             return store.set('newRank',action.newRank)   
         case actionType.FENTCHUPRANK:
             return store.set('upRank', action.upRank)
         case actionType.FENTCHORG:
             return store.set('orgRank', action.orgRank)    
         default:
            return store    
     }
}