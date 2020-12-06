import {Fragment, memo,useEffect} from 'react'
import { useDispatch,useSelector,shallowEqual} from 'react-redux'
import NKThemeCover from '@/components/theme-cover'
import NKThemeHeaderRCM from '@/components/theme-header-rcm'

import styled from './index.module.scss'
//
import { FetchHocData } from '../../store/actionCreator'
function NKHotRecmmend(){
     const dispatch = useDispatch()
     const {hocRecomment} = useSelector(store=>({
        hocRecomment:store.getIn(['recommend','hotRecommend'])
     }),shallowEqual)
     useEffect(()=>{
        dispatch(FetchHocData(8))
     },[dispatch])
    return(
     <div>
        <NKThemeHeaderRCM title="热门推荐" types={['华语','流行','摇滚','民谣','电子']} />
         <div className={styled.recommendList}>
             {
                 hocRecomment.map((item,index)=>{
                     return (
                         <Fragment key={index}>
                             <NKThemeCover item={item} />
                         </Fragment>
                     )
                 })
             }
         </div>
     </div>
    )
}

export default memo(NKHotRecmmend)