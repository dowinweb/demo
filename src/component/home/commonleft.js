import React, {Component} from 'react'
import { connect } from 'react-redux'
import './commonleft.less'

class ComponentLeft extends Component {
  render() {
    return(
      <div className = 'componentleftbox'>
      <div className = 'leftBox'>
        <img src = '/static/images/346346.png' ></img>
      </div>
        <div className = 'rightBox'>
          <span>热卖促销</span>
          <div className = 'one'>花样魔幻电力报 370精悍小</div>
          <div className = 'two'>用心生活 良心制造</div>
          <div className = 'three'>￥998<em>起</em></div>
        </div>
      </div>
    )
  }
}

export default connect()(ComponentLeft)