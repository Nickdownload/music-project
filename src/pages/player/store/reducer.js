import { Map } from 'immutable'
import * as actionType from './constans'
const initStore = {
   currentSong: {},
   loveSongs: [],
   currentSongIndex: 0
}

function reducer(store = Map(initStore), action) {
   switch (action.type) {
      case actionType.CURRENTSONG:
         return store.set('currentSong', action.currentSong)
      case actionType.CHANGEINDEX:
         return store.set('currentSongIndex', action.index)
      case actionType.GETLOVELIST:
         return store.set('loveSongs', action.loveSongs)
      default:
         return store
   }
}

export default reducer