import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  articalList: [],
  writerList: [],
  articalPage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        articalList: fromJS(action.articalList),
        writerList: fromJS(action.writerList)
      })
    case actionTypes.ADD_ARTICAL_LIST:
      return state.merge({
        articalList: state.get('articalList').concat(action.list),
        articalPage: action.nextPage
      })
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}