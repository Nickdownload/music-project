import {Map} from 'immutable'
import * as actionType from './constans'
const initStore={
   currentSong:{}
}

function reducer(store=Map(initStore),action){
      switch(action.type){
          case actionType.CURRENTSONG:
             return store.set('currentSong',action.currentSong)
          default:
              return store
      }
} 

export default reducer