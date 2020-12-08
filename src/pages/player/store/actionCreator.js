import {getSongDetail} from '@/services/player'
import  {CURRENTSONG,CHANGEINDEX,GETLOVELIST} from './constans'


export const fetchSongDetail=(ids)=>{
    return (dispatch,getStore)=>{
        var loveSongs= getStore().getIn(['palyer','loveSongs'])
        getSongDetail(ids).then(res=>{
            dispatch(getCurrentSong(res.songs[0]))
            dispatch(addToLoveList(ids))
            changeCurrentSongIndex(loveSongs.length-1)
        })
    }
}
const changeCurrentSongIndex = (index)=>({
    type:CHANGEINDEX,
    index
})

export const addToLoveList =(ids)=>{
    return (dispatch,getStore)=>{
       var loveSongs= getStore().getIn(['palyer','loveSongs'])
       const index = loveSongs.findIndex(item=>item.id===ids)
       if(index === -1){
           console.log(index)
        getSongDetail(ids).then(res=>{
            const song = res.songs && res.songs[0];
            if (!song) return;
            const loveSong =song 
            var newLoveSongs = [...loveSongs,loveSong]
            dispatch(changeCurrentSongAction(newLoveSongs)) 
        })
       }else{ 
         return
       }
    }
}
const changeCurrentSongAction=(loveSongs)=>({
    type:GETLOVELIST,
    loveSongs
})


const getCurrentSong = (currentSong)=>({
    type:CURRENTSONG,
    currentSong
})


export const updownSong=(num)=>{
    return (dispatch,getStore)=>{
        const loveSongs=getStore().getIn(['palyer','loveSongs'])
        const currentSongIndex = getStore().getIn(['palyer','currentSongIndex'])       
    }
}