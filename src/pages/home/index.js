import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writers from './components/Writers'
import { actionCreators } from './store'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style.js'

class Home extends Component {

  componentDidMount() {
    this.props.changeHomeData()
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writers></Writers>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)