import {getSongDetail} from '@/services/player'
import  {CURRENTSONG} from './constans'
//191469



export const fetchSongDetail=(ids)=>{
    return dispatch=>{
        getSongDetail(ids).then(res=>{
            dispatch(getCurrentSong(res.songs[0]))
        })
    }
}

const getCurrentSong = (currentSong)=>({
    type:CURRENTSONG,
    currentSong
})