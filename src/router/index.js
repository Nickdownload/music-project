import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'
const routes=[
    {
      path:'/',
      exact:true,
      component:Discover
    },
    {
      path:'/discover',
      exact:true,
      component:Discover
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