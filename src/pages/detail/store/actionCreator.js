import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetail = ({title, content, imgUrl}) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content,
  imgUrl
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data
      dispatch(changeDetail(result))
    })
  }
}