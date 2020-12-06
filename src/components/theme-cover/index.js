import {memo} from 'react'
import styled from './index.module.scss'
import {getCount,getImageSize} from '@/utils/format-utils'
function NKThemeCover(props){
    return(
      <div className={styled.wrapper}>
         <div className={styled.imgBox}>
           <img src={ getImageSize(props.item.picUrl,140) } alt='sc' />
            <div className= {styled.cover + ' sprite_covor'}>
              <div className={styled.info + ' sprite_covor'}>
              <span>
              <i className={styled.erji + ' sprite_icon'}></i>
              {getCount(props.item.playCount)}
            </span>
             <i className={styled.play + ' sprite_icon'}></i>
              </div>
           </div>
         </div> 
         <div className={styled.detail}>  
           {props.item.name}
         </div> 
      </div>
    )
}

export default memo(NKThemeCover)