import {memo} from 'react'
import styled from './index.module.scss'
import {shallowEqual, useSelector} from 'react-redux'

import PlaneList from './c-cpns/plane-list'
function NKAppPlane(){
    const {loveSongs} =useSelector((store)=>({
        loveSongs:store.getIn(['palyer','loveSongs'])
    }),shallowEqual)
    return(
        <div className={styled.wrapper}>
             <div className={styled.header}>
               <div className={styled.left}>
                   <div className={styled.list}>
                     播放列表({loveSongs.length})
                   </div>
                   <div className={styled.info}>
                     <div className={styled.collection}>
                         收藏全部
                     </div>
                     <div className={styled.clear}>
                         清除
                     </div>
                   </div>
               </div>
               <div className={styled.right}>
               
               </div>
            </div>
            <div className={styled.content}>
              <div className={styled.left}>
              <PlaneList />
              </div>
              <div className={styled.right}>

              </div>
            </div>
           
        </div>
    )
}

export default memo(NKAppPlane)