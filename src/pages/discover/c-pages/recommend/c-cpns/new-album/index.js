import {memo,useEffect,useRef} from 'react'

import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import {FetchNewAlbumsData} from '../../store/actionCreator'

import { Carousel } from 'antd';
import NKThemeHeaderRCM from '@/components/theme-header-rcm'
import NKAlbumCover from '@/components/album-cover'
import styled from './index.module.scss'
function NKNewAlbum(props) {
   const dispathc = useDispatch()
   const picRef =useRef()
   const {newAlbum} = useSelector(store=>({
       newAlbum:store.getIn(['recommend','newAlbum'])
   }),shallowEqual)
    useEffect(()=>{
      dispathc(FetchNewAlbumsData(10))
      
    },[dispathc])

     return (
         <div className={styled.wrapper}>
          <NKThemeHeaderRCM title="新碟上家" />
          <div className={styled.disk}> 
            <div className={styled.content}>
                 <div className={styled.leftBtn + ' sprite_02'} onClick={e=>picRef.current.prev()}></div>
             <div className={styled.pictrue}>
               <Carousel  ref={picRef}>    
                  {
                    [0,1].map(item=>{
                      return (
                        <div  className={styled.item} key={item}>
                            {newAlbum.slice(item*5,item*5+5).map((item=>{
                              return(
                              <div key={item.pic}>
                                <NKAlbumCover info={item} />
                              </div>
                              )
                            }))}
                        </div>
                      )
                    })
                  }              
               </Carousel>
             </div>
                 <div className={styled.rightBtn+ ' sprite_02'}  onClick={e=>picRef.current.next()}></div>
            </div>
          </div>
         </div>
     )
}

export default memo(NKNewAlbum)