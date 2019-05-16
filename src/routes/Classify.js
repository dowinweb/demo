import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../static/css/Classify.less'
import ListItem from '../component/classifylist/listItem'
// import ClassifyPage from './classifylist/classifypage'



class Classify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:['新品','手机','电脑','电视','平板'],
      currentIndex:0
    }
  }

  handelFocus = () => {
    this.props.history.push('/seach')
  }

  hadleActiveIndex =(index) => {
      this.setState({
        currentIndex:index
      })
  }
  render() {
    let {currentIndex} = this.state
    console.log(this.state.currentIndex)
    return(
      <div className="test">
      <div className = 'classifyBox'>
        <div className = 'classifyBoxLeft'>
          <ul>
            {
              this.state.data.map((item,index)=> {
                return <li key = {index}
                className = {currentIndex === index?'active':''}
                onClick = {()=>this.hadleActiveIndex(index)}
                ><a href = 'javascript:;'>{item}</a></li>
              })
            }
          </ul>
        </div>
        <div className = 'classifyBoxRight'>
            <div className = 'classifytittle'><img src = '/static/images/488162.png' /></div>
            <div className = 'seachInput'>
              <input type="text" placeholder = '请输入搜索内容' onFocus = {this.handelFocus}/>
              <i><img src ='/static/images/搜素.png'></img></i>
            </div>
            <h3><span>—</span> 新品推介 <span>—</span></h3>
            <div className = 'listItem'><ListItem/></div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(state=>({...state.home}))(Classify)
