import {memo} from 'react'
import {NavLink} from 'react-router-dom'
import styled from './index.module.scss'
import {dicoverMenu} from '@/services/local-data'
import { renderRoutes } from 'react-router-config'
function NkDiscover(props){
    const {route} =props
    return(
        <div className={styled.wapper}>
            <div className={styled.topMenu}>
                <div className={styled.menuList  +' wrap-v1'}>
                    {
                        dicoverMenu.map((item,index)=>{
                            return(
                                <div key={item.title} className={styled.linkItem + ' topmenuList'}>
                                    <NavLink activeClassName="selected" className={styled.link} to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
             {renderRoutes(route.children)}
            </div>             
        </div>
    ) 
}

export default memo(NkDiscover)