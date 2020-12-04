import {memo,useEffect} from 'react'
import {fetchbanner} from './store/actionCreator'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
function Recommend(){
    const dispatch = useDispatch()
    const {banners}= useSelector((store)=>({
        banners:store.recommend.banners
    }),shallowEqual)
    console.log(banners)
    useEffect(()=>{
      dispatch(fetchbanner())
    },[dispatch])
    return (
        <div>
            recommend 
        </div>
    )
}

export default memo(Recommend)