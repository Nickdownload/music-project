import {combineReducers} from 'redux'
import {reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'
export default combineReducers({
   recommend:recommendReducer
})