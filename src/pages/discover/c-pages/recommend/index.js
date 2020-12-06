import {memo,useEffect} from 'react'
import {fetchbanner} from './store/actionCreator'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import styled from './index.module.scss'
//自己组件
import TopBanner from './c-cpns/top-banner'

import NKHotRecmmend from './c-cpns/hot-recommend'
import NKNewAlbum from './c-cpns/new-album'
import Rank from './c-cpns/rank'
function Recommend(){
    const dispatch = useDispatch()
    const {banners}= useSelector((store)=>({
        banners:store.getIn(['recommend','banners'])
    }),shallowEqual)
    useEffect(()=>{
      dispatch(fetchbanner())
    },[dispatch])
    return (
        <div>
            <TopBanner banners={banners}/>
            <div  className={styled.wrap+ ' wrap-v2'}>
              <div className={styled.content}>
                  <div className={styled.left}>
                     <NKHotRecmmend />
                     <NKNewAlbum />
                     <Rank />
                  </div>
                  <div className={styled.right}>
                     {/* <NKHotRecmmend /> */}
                  </div>
              </div>
            
            </div>
            
        </div>
    )
}

export default memo(Recommend)