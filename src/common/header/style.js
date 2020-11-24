import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 2;
`

export const HeaderContent = styled.div`
  position: fixed;
  height: 56px;
  left: 0;
  right: 0;
  top: 0;
  /* overflow: hidden; */
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  z-index: 1;
`
export const HeaderHeight = styled.div`
  position: relative;
  height: 56px;
  display: block;
  z-index: 0;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  cursor: pointer;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &.download:hover {
    background: #f5f5f5;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    cursor: pointer;
    color: #969696;
    &.focus {
      background: #666;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 200px;
  height: 38px;
  padding: 0 32px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #333;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 280px;
  }
  &.slide-enter {
    transition: all .4s ease-out;
  }
  &.slide-enter-active {
    width: 280px;
  }
  &.slide-exit {
    transition: all .4s ease-out;
  }
  &.slide-exit-active {
    width: 200px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  background: #fff;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  color: #787878;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.register {
    margin-right: 5px;
    color: #ec6149;
  }
  &.artical {
    margin: 9px 12px 0;
    background: #ec6149;
    color: #fff;
  }
`