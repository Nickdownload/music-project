import * as actionType from './constant'
const initStore ={
    banners:[]
}
export default function reducer(store=initStore,action){
     switch(action.type){
         case actionType.FENTCHBANNER:
            return {...store,banners:action.banners} 
         default:
            return store    
     }
}