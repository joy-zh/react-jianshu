import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false,
  list: []
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个新的对象
    return state.set('focus', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focus', false)
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set('list', action.data)
  }
  return state
}