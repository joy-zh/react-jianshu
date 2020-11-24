import styled from 'styled-components'

export const DetailWrapper = styled.div`
  background-color: #f9f9f9;
`

export const DetailContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 66px);
  padding-top: 10px;
  font-size: 16px;
`

export const ArticleContent = styled.div`
  width: 730px;
  margin-bottom: 24px;
  margin-right: 10px;
  background: #fff;
`
export const ArticleDetail = styled.section`
  padding: 32px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  .article-pic{
    width: 100%;
    margin-bottom: 25px;
  }
`

export const ArticleTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  color: #404040;
  margin-bottom: 0.5em;
`
export const AuthorWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  .avatar {
    display: block;
    border-radius: 50%;
    border: 1px solid #eee;
    min-width: 48px;
    min-height: 48px;
    width: 48px;
    height: 48px;
  }
  .author-content {
    margin-left: 8px;
    .nickname {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      .title {
        font-size: 16px;
        font-weight: 500;
        margin-right: 8px;
      }
      .level {
        width: 16px;
        height: 16px;
        min-width: 16px;
        min-height: 16px;
        margin-right: 8px;
      }
      .follow {
        padding: 2px 9px;
        font-size: 12px;
        color: #ec7259;
        background-color: #fff;
        border: 1px solid #ec7259;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
      }
    }
    .detail {
      color: #969696;
      font-size:13px;
      span {
        margin-right: 10px;
      }
    }
  }
  &.recommend {
    margin-bottom: 0;
    .avatar {
      min-width: 45px;
      min-height: 45px;
      width: 45px;
      height: 45px;
    }
    .author-content {
      .nickname {
        .title {
          font-size: 14px;
        }
        .follow {
          padding: 2px 12px;
          line-height: 17px;
        }
      }
      .detail {
        font-size: 12px;
      }
    }
  }
`

export const Article = styled.article`
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;
  word-break: break-word;
  p {
    margin-bottom: 20px;
  }
`

export const RecommendContent = styled.div`
  width: 260px;
`

export const AuthorArticles = styled.div`
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
`
export const SplitLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #eee;
`

export const ArticleList = styled.div``
export const ArticleItem = styled.div`
  margin-top: 16px;
  .title {
    font-size: 14px;
    line-height: 22px;
    color: #2d2d2d;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .read-num {
    font-size: 12px;
    color: #969696;
  }
`

export const Recommends = styled.div`
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
`

export const RecommendHeader = styled.div`
  font-size: 16px;
  padding-left: 6px;
  height: 18px;
  line-height: 18px;
  border-left: 4px solid #ec7259;
`

export const RecommendList = styled.div``
export const RecommendItem = styled.div`
  margin-top: 16px;
  .title {
    font-size: 14px;
    line-height: 22px;
    color: #2d2d2d;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .read-num {
    font-size: 12px;
    color: #969696;
  }
`