import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  ItemOperator,
  ReadMore
} from '../style'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list && list.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListInfo>
                  <Link className="title" to={'/detail/' + item.get('id')}>{item.get('title')}</Link>
                  <p className="desc">{item.get('desc')}</p>
                  <ItemOperator>
                    <span className="diamond">
                      <i className="iconfont">&#xe602;</i>46.1
                    </span>
                    <span className="nickname">蒙娜丽莎</span>
                    <span className="comment">
                      <i className="iconfont">&#xe60e;</i>46.1
                    </span>
                    <span className="like">
                      <i className="iconfont">&#xe64e;</i>46.1
                    </span>
                    <span className="award">
                      <i className="iconfont">&#xe611;</i>46.1
                    </span>
                  </ItemOperator>
                </ListInfo>
                {
                  item.get('imgUrl') ? <img alt="" className="item-pic" src={item.get('imgUrl')} /> : null
                }
              </ListItem>
            )
          })
        }
        <ReadMore onClick={() => {getMoreList(page)}}>阅读更多</ReadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articalList']),
  page: state.getIn(['home', 'articalPage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)