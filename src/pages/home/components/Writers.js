import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterHeader,
  WriterItem,
  MoreWriter
} from '../style.js'

class Writers extends Component {
  render() {
    const { list } = this.props
    return (
      <WriterWrapper>
        <WriterHeader>
          <div className="title">推荐作者</div>
          <div className="operator">
          <i className="iconfont">&#xe63f;</i>换一换
          </div>
        </WriterHeader>
        {
          list && list.map(item => {
            return <WriterItem key={item.get('id')}>
              <img alt="" className="avatar" src={item.get('avatar')} />
              <div className="detail">
                <div className="nickname">
                  <span className="name">{item.get('nickname')}</span>
                  <div className="follow"><i className="iconfont plus">&#xe624;</i>关注</div>
                </div>
                <div className="works-detail">写了{item.get('wordNum')}字·{item.get('like')}喜欢</div>
              </div>
            </WriterItem>
          })
        }
        <MoreWriter>查看全部<i className="iconfont right">&#xe625;</i></MoreWriter>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState )(Writers)