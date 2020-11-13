import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writers from './components/Writers'
import { actionCreators } from './store'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style.js'

class Home extends PureComponent {

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
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
        {
          this.props.showScroll
            ? <BackTop onClick={() => this.handleScrollTop()}>回到<br />顶部</BackTop>
            : null
        }
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 300) {
      const action = actionCreators.toggleTopShow(true)
      dispatch(action)
    } else {
      const action = actionCreators.toggleTopShow(false)
      dispatch(action)
    }
  }
})

export default connect(mapState, mapDispatch)(Home)