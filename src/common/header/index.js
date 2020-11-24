import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  HeaderContent,
  HeaderHeight,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends PureComponent {

  getListArea() {
    const { focus, list } = this.props
    if (focus) {
      return (
        <SearchInfo >
          <SearchInfoTitle>
            热门搜索
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focus, handleInputBlur, handleInputFocus, login, logout } = this.props
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/">
            <Logo/>
          </Link>
          <Nav>
            <Link to="/"><NavItem className="left active">首页</NavItem></Link>
            <NavItem className="left download">下载App</NavItem>
            {
              login ? <NavItem className="right" onClick={logout}>退出</NavItem> :
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
            }
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                  classNames="slide"
                  in={focus}
                  timeout={400}
              >
                <NavSearch
                    className={focus ? 'focus' : ''}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                ></NavSearch>
              </CSSTransition>
              <i className={focus ? 'focus iconfont' : 'iconfont'}>&#xe6e4;</i>
              {this.getListArea()}
            </SearchWrapper>
            <Addition>
              <Link to="/write">
                <Button className="artical">
                  <i className="iconfont">&#xe724;</i>
                  写文章
                </Button>
              </Link>
              <Button className="register">注册</Button>
            </Addition>
          </Nav>
        </HeaderContent>
        <HeaderHeight></HeaderHeight>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.get('header').get('focus'),
    list: state.get('header').get('list'),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)