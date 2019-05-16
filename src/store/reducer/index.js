import { combineReducers } from 'redux'
import home from './home'
import my from './my'
import classify from './classify'
import shopcart from './shopcart'

let reducer = combineReducers({
  home,
  my,
  classify,
  shopcart
})

export default reducer