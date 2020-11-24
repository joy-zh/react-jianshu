import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content: '',
  imgUrl: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
        imgUrl: action.imgUrl
      })
    default:
      return state
  }
}