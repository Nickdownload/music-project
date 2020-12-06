import {memo} from 'react'
import styled from './index.module.scss'
import {getImageSize} from '@/utils/format-utils'

function NKAlbumCover(props){
    const {info} =props
    return(
        <div className={styled.wrapper}>
          <div className={styled.imgBox}>
             <a className={styled.go + ' sprite_covor'}  href="todo"> </a> 
             <span></span>
            <img src={`${getImageSize(info.picUrl,100)}`} alt="cc" />
          </div>
          <div className={styled.company + " text-nowrap"}>
            {info.company}      
          </div>
          <div className={styled.name}>
          {info.artist.name} 
          </div>
        </div>
    )
}

export default memo(NKAlbumCover)
