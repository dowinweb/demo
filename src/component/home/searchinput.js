import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import action from '../../store/action/index'
import ComponentItem from './componentitem'
import ClassifyPage from '../classifylist/classifypage'
import './searchinput.less'

class SearchInput extends Component {

  handeSeachText = () => {
    let value = this.refs.input.value
    this.props.querySearchData(value)
    this.refs.input.value = ''
  }

  render() {
    let {searchresult} = this.props
    let flag = 'none'
    if(searchresult){flag = ''}
    return(
      <div className = 'SeachBox'>
      <div className = 'seachInput'>
        <input type="text" placeholder = '请输入搜索内容' ref = 'input'/>
        {/* <Input type="text" placeholder='请输入搜索内容' allowClear ref = 'input' /> */}
        <i><img src = '/static/images/搜素.png'></img></i>
        <a href = 'javascript:;' onClick = {this.handeSeachText}>搜索</a>
      </div>
      <div className = 'searchResult'>
        {searchresult?'':<>
        <div className = 'SearchTitle'>
          <p>搜索历史</p>
          {/* 删除按钮 */}
          <a className = 'delicon' href = 'javascript:;'><img src = '/static/images/删除.png'></img></a>      
        </div>
        <div className = 'SearchHistory'>
          <div className = 'SearchItem'>韩派净水器</div>
          <div className = 'SearchItem'>净水</div>
          <div className = 'SearchItem'>净水器</div>
          <div className = 'SearchItem'>水壶</div>
          <div className = 'SearchItem'>韩派水壶</div>
        </div>
        </>}
        {/* 展示搜索结果组件 */}
        <div className = 'searchNav' style = {{display:flag}}>
            {/* 导航菜单组件 */}
            <ClassifyPage search = {true}/>
        </div>
        <div className = 'searchresult' style = {{display:flag}}>
          <div className = 'searchComponent'>
            <ComponentItem item = {searchresult}/>
            <span className = 'prompt'>暂时没有更多了</span>
          </div>
        </div>
      </div>
    </div>
)
  }
}

export default connect(state => ({...state.home}),action.home)(SearchInput)
