import {memo,useState,useEffect,useRef} from 'react'
import { shallowEqual, useDispatch, useSelector} from 'react-redux'
import styled from './index.module.scss'
import {
    fetchSongDetail,
    updownSong,
    changeCurrentMode
} from './store/actionCreator'
import { 
    getPlayUrl,
    getImageSize,
    formatMinuteSecond
} from '@/utils/format-utils';

import { Slider } from 'antd';
import NKAppPlane from './c-cpns/app-plane'


function NKPlayer(){
    const [playNow,setPlayNow] = useState(false)
    const [flag,setFlag] =useState(true)
    const [progress,setProgress] = useState(0)
    const [currentTime,setCurrentTime] = useState(0)
    const dispatch = useDispatch()
    const audioRef = useRef()
    const {currentSong,smode,loveSongs} = useSelector(store=>({
        currentSong:store.getIn(['palyer','currentSong']),
        smode:store.getIn(['palyer','sequence']),
        loveSongs:store.getIn(['palyer','loveSongs'])
    }),shallowEqual)
    useEffect(()=>{
        dispatch(fetchSongDetail(191469))
    },[dispatch])

    useEffect(()=>{
        audioRef.current.src=getPlayUrl(currentSong.id)  || ''
        audioRef.current.play().then(res => {
            setPlayNow(true)
          }).catch(err => {
            setPlayNow(false)
          });
    },[currentSong])

    function isPlay(){
        if(playNow){
            audioRef.current.pause()  
            setPlayNow(false)
        }else{
            audioRef.current.play()
            setPlayNow(true)
        }
    }

    function getPostition(){
        if(playNow){
           return '0 -165px'
        }else{
           return '0 -204px'  
        }
    }
    function timeUpdate(e){
        if(flag){
            setCurrentTime(e.target.currentTime*1000)
            var newProgress = Math.floor((e.target.currentTime*1000/currentSong.dt)*100)
            setProgress(newProgress)
        } 
    }
    
    function musicPlay(timer){
        setCurrentTime(timer)
        var newProgress = Math.floor((timer/currentSong.dt)*100)
        setProgress(newProgress)
    }

    function changeHandle(e){
        setFlag(false)
        setProgress(e)
        setPlayNow(true)
    }
    
    function afterChange(e){
        var time = (e/100)*currentSong.dt
        musicPlay(time)
        audioRef.current.currentTime=(time/1000)
        audioRef.current.play()
        setFlag(true)
    }


    //prevSong
     function upOrdownSong(num){
           dispatch(updownSong(num))
     }
   
     function handleMusicEnded(){
        if(smode===2){
            audioRef.current.currentTime=0
            audioRef.current.play()            
        }else{
            dispatch(updownSong(1))
        }
        
     }
     //更改模式
     function changeMode(){
         console.log(smode)
         var sequence=smode+1
         if(sequence>2){
            sequence=0
         }
         console.log(sequence)
         console.log(changeCurrentMode(sequence))
         dispatch(changeCurrentMode(sequence))   
     }

     function modePosition(smode){
       if(smode ===0){
          return '-3px -344px' 
       }else if(smode === 1){
          return '-66px -248px'
       }else{
          return '-66px -344px'
       }
     }

   const picUrl = (currentSong.al && currentSong.al.picUrl) || 'http://s4.music.126.net/style/web2/img/default/default_album.jpg'

    return(
        <div className={styled.wrapper}>
            <div className={styled.content+ ' wrap-v2'}>
             <div className={styled.left}>
               <span onClick={()=>{upOrdownSong(-1)}} className={styled.prev + ' sprite_playbar'}></span>
               <span onClick={e=>{isPlay(e)}} style={{backgroundPosition:`${getPostition()}`}} className={styled.play + ' sprite_playbar'} ></span>
               <span onClick={()=>{upOrdownSong(1)}} className={styled.next + ' sprite_playbar'}></span>
             </div>
             <div className={styled.center}>
                 <div className={styled.pic}>
                     <img src={getImageSize(picUrl,34)}  alt="cc" />
                     <a href="c" >  </a>
                 </div>
                <div className={styled.slider}>
                  <Slider defaultValue={0} value={progress} onAfterChange={afterChange} onChange={changeHandle} />
                </div>
                <div className={styled.timer}>
                   <span>{formatMinuteSecond(currentTime)}</span>
                     <span> / </span>
                     <span>{formatMinuteSecond(currentSong.dt)}</span>
                </div>
             </div>
             <div className={styled.right}>
             <div className={styled.leftBt}>
                <span className={ styled.favor + ' sprite_playbar'}></span>
                <span className={ styled.share + ' sprite_playbar'}></span>
          </div>
          <div className={styled.rightBt + ' sprite_playbar'}>
            <span className={ styled.volume + ' sprite_playbar'} ></span>
            <span style={{backgroundPosition:`${modePosition(smode)}`}} className={ styled.loop + ' sprite_playbar'}  onClick={e=>changeMode()} ></span>
    <span className={ styled.playlist + ' sprite_playbar'}> {loveSongs.length}</span>
          </div>


             </div>
            </div>
            <audio ref={audioRef} onEnded={e => handleMusicEnded()} onTimeUpdate={e=>{timeUpdate(e)}} />    
            <NKAppPlane />     
        </div>
    )
}

export default memo(NKPlayer)