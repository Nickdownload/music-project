import {memo,useEffect} from 'react'
import styled from './index.module.scss'

import {shallowEqual, useSelector} from 'react-redux'

export default memo(()=>{
    const {loveSongs} =useSelector((store)=>({
        loveSongs:store.getIn(['palyer','loveSongs'])
    }),shallowEqual)
    useEffect(()=>{
    
    },[])
    return(
      <div className={styled.wrapper}>
           {
        loveSongs.map((item, index) => {
          return (
            <div className={styled.playItem} key={item.id}>
              <div className={styled.left}>{item.name}</div>
              <div className={styled.right} >
                <span className= {styled.singer } >{item.ar[0].name}</span>
                <span className={styled.duration}></span>
                <span className={styled.link + ' sprite_playlist'}></span>
              </div>
            </div>
          )
        })
      }
      </div>
    )
})