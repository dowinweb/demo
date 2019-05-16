import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Rate } from 'antd'
import './Comment.less'

class Comment extends Component {


  componentDidMount(){
    let {flag} =  this.props
    if(flag) return
    this.refs.textBox.style.padding = '0.4rem 0 0.3rem 0.4rem'
  }
  render() {
    return(
      <div className = 'CommentInfoBox' ref = 'textBox'>
      <div className="comment_detail">
          <div className="comment_user">
            <span className = 'comment_userImg'><img src="https://dummyimage.com/64x64"/></span>
            <span>采菇凉的小蘑菇</span>
          <div><Rate disabled defaultValue={5} 
          style = {{fontSize:'.27rem',width:'.9rem',display:'inline'}} /></div>
          </div>
          <div className = 'comment_userContext'>
            <div className = 'contentTime'>2018.03.15 12:30  蓝色 全款购买</div>
            <div className = 'contenttext'>品质上佳，质量上乘，主要是乖乖的，美美的。呵
                  呵的，简直没上天际，支持支持，哈哈
            </div>
            <div className="comment_img">
              <img src="https://dummyimage.com/148x148"/>
              <img src="https://dummyimage.com/148x148"/>
              <img src="https://dummyimage.com/148x148"/>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default connect()(Comment)
