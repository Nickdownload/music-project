import React from 'react'
import {Redirect} from 'react-router-dom'
import Discover from '@/pages/discover'
//二级菜单 子路由
import Recommend from '@/pages/discover/c-pages/recommend'
import TopList from '@/pages/discover/c-pages/ranking'
import Songs from '@/pages/discover/c-pages/songs'
import Djradio from '@/pages/discover/c-pages/djradio'
import Artist from '@/pages/discover/c-pages/artist'
import Album from '@/pages/discover/c-pages/album'

import Friend from '@/pages/friend'
import Mine from '@/pages/mine'
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