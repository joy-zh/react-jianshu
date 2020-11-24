import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import {
  DetailWrapper,
  DetailContent,
  ArticleContent,
  ArticleDetail,
  ArticleTitle,
  Article,
  RecommendContent,
  AuthorArticles,
  SplitLine,
  ArticleList,
  ArticleItem,
  Recommends,
  RecommendHeader,
  RecommendList,
  RecommendItem
} from './style'
import Author from './author'

class Detail extends Component {

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  render() {
    return (
      <DetailWrapper>
        <DetailContent>
          <ArticleContent>
            <ArticleDetail>
              <ArticleTitle>{this.props.title}</ArticleTitle>
              <Author></Author>
              {
                this.props.imgUrl ?
                <img alt="" className="article-pic" src={this.props.imgUrl}/> : null
              }
              <Article dangerouslySetInnerHTML={{__html: this.props.content}}></Article>
            </ArticleDetail>
          </ArticleContent>
          <RecommendContent>
            <AuthorArticles>
              <Author recommend></Author>
              <SplitLine></SplitLine>
              <ArticleList>
                <ArticleItem>
                  <div className="title">矛盾</div>
                  <div className="read-num">阅读 24</div>
                </ArticleItem>
                <ArticleItem>
                  <div className="title">悲惨世界</div>
                  <div className="read-num">阅读 556</div>
                </ArticleItem>
              </ArticleList>
            </AuthorArticles>
            <Recommends>
              <RecommendHeader>推荐阅读</RecommendHeader>
              <RecommendList>
                <RecommendItem>
                  <div className="title">远离私生活混乱的人</div>
                  <div className="read-num">阅读 2400</div>
                </RecommendItem>
                <RecommendItem>
                  <div className="title">证实确实在外找小姐，我竟然觉得舒坦了</div>
                  <div className="read-num">阅读 5566</div>
                </RecommendItem>
              </RecommendList>
            </Recommends>
          </RecommendContent>
        </DetailContent>
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
  imgUrl: state.getIn(['detail', 'imgUrl'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))