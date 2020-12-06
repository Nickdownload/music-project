
import { memo ,useCallback,useState,useRef} from 'react'
import { Carousel } from 'antd';
import styled from './index.module.scss'
const NKTopBanner = memo((props) => {
    const {banners} =props
    const [imgUrl,setUrl] =useState()
    const ctorBanner=useRef()
    const changeImage= useCallback((from,to)=>{
        setUrl(banners[to].imageUrl)
    },[banners])
    return (
        <div style={{background:`url(${imgUrl}?imageView&blur=40x20)`}} className={styled.wapper}>
            <div className={styled.wrap + ' wrap-v2'}>
               <div className={styled.left}>
               <Carousel ref={ctorBanner} effect="fade" autoplay beforeChange={changeImage}>
                   {
                     banners.map((item,index)=>{
                       return(
                     <div key={item.encodeId} className={styled.itemList} >
                        <img src={item.imageUrl}  alt='title'/>
                      </div>
                       )
                     })
                   }
                </Carousel>
               </div>
               <div className={styled.right}>

               </div> 
                <div onClick={()=>ctorBanner.current.prev()} className={styled.letfBtn}></div>
                <div onClick={()=>ctorBanner.current.next()} className={styled.rightBtn}></div>
            </div>
            
        </div>
    )
   
})

export default NKTopBanner