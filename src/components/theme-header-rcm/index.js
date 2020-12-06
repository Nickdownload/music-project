import {memo} from 'react'
import PropTypes from 'prop-types'

import styled from './index.module.scss'

function NKThemeHeaderRCM(props){
    const {title,types} =props
    return(
        <div className={styled.wapper}>
           <div className={styled.left}>
            <div className={styled.title}>
                {title}
                <span className={styled.hot+ ' sprite_02'}></span>
            </div>
            {
              types.map((item,index)=>{
                  return(
                      <div className={styled.linkItem} key={item}>
                          <a href="todo">{item}</a>
                          <span className={styled.line}> | </span>
                      </div>
                  )
              })
            }
           </div>
           <div className={styled.right}>
               <a href='todo'>更多 <i className={styled.icon+ ' sprite_02'}></i></a>
           </div>
        </div>
    )
}

NKThemeHeaderRCM.propTypes={
    title:PropTypes.string.isRequired
}
NKThemeHeaderRCM.defaultProps = {
    types:[]
}

export default memo(NKThemeHeaderRCM)