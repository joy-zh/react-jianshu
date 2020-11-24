import React from 'react'
import {
  AuthorWrapper
} from './style'
import cloverPic from '../../statics/img/articleDetail/clover.png'

function Author(props) {
  const {recommend} = props
  return (
    <AuthorWrapper className={recommend ? 'recommend' : ''}>
      <img alt="" className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604928424100&di=eb144de158bef22aba3173c20dccf2ed&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F16%2F20150916235818_HVAk2.jpeg" />
      <div className="author-content">
        <div className="nickname">
          <span className="title">鲁豫</span>
          <img alt="" className="level" src={cloverPic} />
          <div className="follow">关注</div>
        </div>
        {
          recommend
            ?
              <div className="detail">
                <span>总资产1.0W（约714.78元）</span>
              </div>
            :
              <div className="detail">
                <span>2020.11.18 13:35:56</span>
                <span>字数 254</span>
                <span>阅读 20,288</span>
              </div>
        }
      </div>
    </AuthorWrapper>
  )
}

export default Author