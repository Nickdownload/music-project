import {getSongDetail} from '@/services/player'
import  {CURRENTSONG,CHANGEINDEX,GETLOVELIST,CHANGEMODE} from './constans'


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
        const sequence = getStore().getIn(['palyer','sequence'])
        var nextIndex 
        if(loveSongs.length===0){
            return
        }
        console.log(currentSongIndex)
        if(sequence===1){
            var n =Math.floor(Math.random()*(loveSongs.length))
            if(loveSongs.length>1){
                while(currentSongIndex===n){
                   n =Math.floor(Math.random()*(loveSongs.length)) 
                } 
            }
            nextIndex=n
        }else{
            nextIndex  =currentSongIndex+num
        }
        
        if(nextIndex<0){
            nextIndex=loveSongs.length-1
        }else if(nextIndex>loveSongs.length-1){
            nextIndex=0
        }
        dispatch(getCurrentSong(loveSongs[nextIndex])) 
        dispatch(changeCurrentSongIndex(nextIndex)) 
    }
}

export const changeCurrentMode=(sequence)=>({
    type:CHANGEMODE,
    sequence
})