import React, { Component } from 'react'
import {
  DetailWrapper,
  DetailContent,
  ArticleContent,
  ArticleDetail,
  ArticleTitle,
  RecommendContent
} from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <DetailContent>
          <ArticleContent>
            <ArticleDetail>
              <ArticleTitle>中国男人太单纯，找老婆永远只有俩条件，金星总结太到位</ArticleTitle>
            </ArticleDetail>
          </ArticleContent>
          <RecommendContent></RecommendContent>
        </DetailContent>
      </DetailWrapper>
    )
  }
}

export default Detail