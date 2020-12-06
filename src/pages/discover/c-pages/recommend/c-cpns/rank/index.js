import {memo,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styled from './index.module.scss'
import {FetchRank } from '../../store/actionCreator'
import NKThemeHeaderRCM from '@/components/theme-header-rcm'
import NKTopRank from '@/components/top-rank'
function Rank(){
    const dispatch = useDispatch()
    const {upRank,newRank,orgRank}= useSelector(store=>({
        upRank:store.getIn(['recommend','upRank']),
        newRank:store.getIn(['recommend','newRank']),
        orgRank:store.getIn(['recommend','orgRank'])
    }))
    useEffect(()=>{
      dispatch(FetchRank(0))
      dispatch(FetchRank(1))
      dispatch(FetchRank(3))
    },[dispatch])
    return (
        <div>
            <NKThemeHeaderRCM title="榜单" />
            <div className={styled.content + ' bg'}>
                 <NKTopRank info={upRank} />
                 <NKTopRank info={newRank} />
                 <NKTopRank info={orgRank} />
            </div>
        </div>
    )
}

export default memo(Rank)