import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const ListItem = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  .item-pic {
    width: 150px;
    height: 100px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`
export const ListInfo = styled.div`
  flex: 1;
  .title {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const ItemOperator = styled.div`
  font-size: 12px;
  font-weight: 400;
  span {
    margin-right: 10px;
    color: #b4b4b4;
    .iconfont {
      margin-right: 2px;
      font-size: 14px;
    }
  }
  .diamond {
    color: #ea6f5a!important;
  }
`

export const ReadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  display: block;
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  .recommend-item {
    width: 100%;
    margin-bottom: 5px;
  }
`

export const WriterWrapper = styled.div`
  margin-top: 30px;
`
export const WriterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #969696;
  font-size: 14px;
  i {
    font-weight: bold;
  }
`

export const WriterItem = styled.div`
  margin-top: 15px;
  display: flex;
  position: relative;
  align-items: center;
  .avatar{
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .detail {
    flex: 1;
    .nickname {
      font-size: 14px;
      overflow: hidden;
      color: #333;
      .name {
        float: left;
        margin-right: 40px;
      }
      .follow {
        font-size: 13px;
        color: #42c02e;
        float: right;
        .plus {
          font-size: 14px;
        }
      }
    }
    .works-detail {
      margin-top: 5px;
      font-size: 12px;
      color: #969696;
    }
  }
`

export const MoreWriter = styled.div`
  padding: 7px 7px 7px 12px;
  width: 100%;
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  .right {
    margin-left: 3px;
    font-size: 12px;
    font-weight: bold;
  }
`
