import React, { PureComponent } from 'react'
import {
  RecommendWrapper
} from '../style'

import Banner1 from '../../../statics/img/recommend/banner-1.png'
import Banner2 from '../../../statics/img/recommend/banner-2.png'
import Banner3 from '../../../statics/img/recommend/banner-3.png'
import Banner4 from '../../../statics/img/recommend/banner-4.png'

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        <img alt="" className="recommend-item" src={Banner1} />
        <img alt="" className="recommend-item" src={Banner2} />
        <img alt="" className="recommend-item" src={Banner3} />
        <img alt="" className="recommend-item" src={Banner4} />
      </RecommendWrapper>
    )
  }
}

export default Recommend
