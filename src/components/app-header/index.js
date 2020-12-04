import {memo} from 'react'
import styled from './index.module.scss'
import {NavLink} from 'react-router-dom'
import {headerLinks} from '@/services/local-data'
import {UserOutlined} from '@ant-design/icons'
import {Input } from 'antd'
function listItem(item,index){
    if(index<3){
      return (<NavLink activeClassName="selected" to={item.link}>
          {item.title}
            <i className={styled.cor + ' three'}></i>
          </NavLink>)
     }else{
     return <a target="_blank" rel="noopener noreferrer" href={item.link}>{item.title}</a>
    }
}
function NKHeader(){
    return (
        <div className={styled.headers}>
            <div className={styled.header + ' wrap-v1'}>
                <div className={styled.topLeft}>
                <a href="#/" className={styled.logo}> </a>
                {headerLinks.map((item,index)=>{
                    return(
                        <div className={styled.itemList} key={item.title}>
                            {listItem(item,index)}
                        </div>
                    )
                })}
                </div>
                <div className={styled.topRight}>
                   <Input prefix={<UserOutlined className="site-form-item-icon" />} className={styled.search} placeholder="音乐/视频/电台/用户" />
                   <div className={styled.center}>创作者中心</div>
                  <div className="">登录</div>
                </div>
            </div>
            <div className={styled.subnav}>

            </div>
        </div>
    )
}

export default memo(NKHeader)