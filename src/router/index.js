import React ,{lazy}from 'react'
import {Redirect} from 'react-router-dom'
import Discover from '@/pages/discover'
//二级菜单 子路由
const Recommend = lazy(()=>import('@/pages/discover/c-pages/recommend'))
const TopList =  lazy(()=>import('@/pages/discover/c-pages/ranking'))
const Songs = lazy(()=>import('@/pages/discover/c-pages/songs'))
const Djradio = lazy(()=>import('@/pages/discover/c-pages/djradio'))
const Artist =  lazy(()=>import('@/pages/discover/c-pages/artist'))
const Album = lazy(()=>import('@/pages/discover/c-pages/album'))

const Friend =  lazy(()=>import('@/pages/friend'))
const Mine =  lazy(()=>import('@/pages/mine'))
const routes=[
    {
      path:'/',
      exact:true,
      render:()=>(<Redirect to="/discover" />)
    },
    {
      path:'/discover',
      component:Discover,
      children:[
        {
          path:'/discover',
          exact:true,
          render:()=>(<Redirect to="/discover/recommend" />),
        },
        {
        path:'/discover/recommend',
        component:Recommend
       },
       {
        path:'/discover/ranking',
        component:TopList
       },
       {
        path:'/discover/songs',
        component:Songs
       },
       {
        path:'/discover/djradio',
        component:Djradio
       },
       {
        path:'/discover/artist',
        component:Artist
       },
       {
        path:'/discover/album',
        component:Album
       },
    ]
    },
    {
        path:'/mine',
        component:Mine
      },
      {
        path:'/friend',
        component:Friend
      },
]

export default routes