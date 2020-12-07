import { memo } from 'react'

import { getImageSize } from '@/utils/format-utils'
import styled from './index.module.scss'
function NKTopRank(props) {
    const { info } = props
    const { tracks = [] } = info
    return (
        <div className={styled.wrapper}>
            <div className={styled.header}>
                <div className={styled.imgbox}>
                    <img src={getImageSize(info.coverImgUrl, 80)} alt="cc" />
                    <a className="image_cover" href="tobo"> </a>
                </div>
                <div className={styled.title}>
                    <div><a href='todo'>{info.name} </a></div>
                    <div className={styled.btns}>
                        <div className={styled.play + ' sprite_02'}></div>
                        <div className={styled.favor + ' sprite_02'}></div>
                    </div>
                </div>
            </div>
            <div className={styled.itemList}>
                {tracks.slice(0, 10).map((item, index) => {
                    return (
                        <div className={styled.item} key={index}>
                            <div className={styled.title + ' text-nowrap'}><span className={styled.span}>{index + 1}</span>  {item.name}</div>
                            <div className={styled.operate}>
                                <div className={styled.play+ ' sprite_02'}></div>
                                <div className={styled.addto+ ' sprite_02'} ></div>
                                <div className={styled.favor+ ' sprite_02'}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styled.more}>
                <a href="todo"> {"更多> "} </a>
            </div>
        </div>
    )
}

export default memo(NKTopRank)