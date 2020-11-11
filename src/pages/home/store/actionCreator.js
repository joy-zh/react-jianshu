import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articalList: result.articalList,
  writerList: result.writerList
})

const addHomeList = (result, nextPage) => ({
  type: actionTypes.ADD_ARTICAL_LIST,
  list: fromJS(result),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      const action = addHomeList(result, page + 1)
      dispatch(action)
    })
  }
}