import {NavLink} from 'react-router-dom'
import styled from './index.module.css'

import {Fragment} from 'react'
import {headerLinks} from '@/common'
 function listItem(item,index){
     if(index<3){
     return <NavLink to={item.link}>{item.title}</NavLink>
     }else{
     return <a href={item.link}>{item.title}</a>    
     }
 }

function NKHeader(){
    return (
        <div className={styled.appHeader}>
           <div className={'wrap-v1 content '+ styled.warp}>
             <div className={styled.headerLeft}>
                 <a href="#/" className={styled.logo}> </a>
                 {
                     headerLinks.map((item,index)=>{
                     return <Fragment key={item.title}> {listItem(item,index)}</Fragment>
                     })
                 }
            </div> 
             
           </div>
        </div>
    )
}

export default NKHeader