import { Map } from 'immutable'
import * as actionType from './constans'
const initStore = {
   currentSong: {},
   loveSongs: [],
   currentSongIndex: 0,
   sequence:0   //0是顺序播放  1 是随机  2单曲循环
}

function reducer(store = Map(initStore), action) {
   switch (action.type) {
      case actionType.CURRENTSONG:
         return store.set('currentSong', action.currentSong)
      case actionType.CHANGEINDEX:
         return store.set('currentSongIndex', action.index)
      case actionType.GETLOVELIST:
         return store.set('loveSongs', action.loveSongs)
      case actionType.CHANGEMODE:
         console.log(action.sequence)
         return store.set('sequence', action.sequence)
      default:
         return store
   }
}

export default reducer