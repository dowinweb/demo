import React, {Component} from 'react'
import { connect } from 'react-redux'
import ComponentItem from '../../component/home/componentitem'
import './classifypage.less'

// 分类列表
class ClassifyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      currentIndex:0,
      flag:true,
      index:'',
      isHidden:'none',
      data:[
        {title:'上架时间',time:['2018年7月','2018年6月','2018年5月']},
        {title:'品牌',time:['美的','格力','维嘉','哈哈','嘿嘿','NEAK']},        
        {title:'型号',time:['QA-88','HY-XX','XX-YY','YY-XX','速腾A','NEAK']},        
      ]
    }
  }
  
  // 导航栏的active样式控制
  hadleQueryindex = (index,item) => {
    let flag
    if(item.text === '筛选'){
      this.setState({
        isHidden:''
      })
    } else {
      flag = this.state.currentIndex === index ? !this.state.flag : true
    }
    this.setState({
      currentIndex: index,
      flag
    })


    // // 获得当前点击的索引 存入index中
    // this.setState({index})
    // // 判断点击的index和存入的标识index是否相等 如果不相等更改flag标识为true
    // if(this.state.index !== index){
    //   this.setState({flag:true})
    // }
    // // 更改当前索引为点击索引
    // this.setState({currentIndex:index})
    // // 判断点击索引 和 当前索引是否一致 
    // if(this.state.currentIndex === index){
    //   this.setState({
    //     flag:!this.state.flag
    //   })
    // }
  }

  // 控制筛选的显示和隐藏
  handlemove = () => {   
    this.setState({
      isHidden:'none'
    })
  }

  // 阻止父级点击事件向子级冒泡
  handleStop = (e) => {
    e.stopPropagation()
  }

  render() {
    // search 是从 SearchInput组件传入的 控制这个组件中不需要的部分    
    let {bigcustom, NavHrader,search} = this.props
    let issearch
    {search?issearch = 'none':issearch = ''}
    let {flag,currentIndex, isHidden,data} = this.state
    console.log(currentIndex)
    console.log(this.state.index)
    console.log(flag)
    return(
      <div className = 'searchResult'>
        {/* 筛选层 */}
        <div className = 'screening'
          onClick = {this.handlemove}
          style = {{display:isHidden}}>
          <div className = 'mainContent'
          onClick = {this.handleStop}
          > 
            <div className = 'priceRange'>
              <div className = 'title'>价格区间</div>
              <div>
                <input placeholder = '最低价'/>
                <span> - </span>
                <input placeholder = '最高价'/>
              </div>
            </div>
            {
              data.map((item,index)=>{
                return(
                <div className = 'priceRange' key = {index}>
                  <div className = 'title'>{item.title}</div>
                  <div className = 'item'>
                    {item.time.map((item,index)=>{
                      return(
                        <div className = 'itemText' key = {index} >{item}</div>
                      )
                    })}
                  </div>
                </div>    
                )
              })
            }
            <div className = 'bottomBtn'>
              <div>重置</div>
              <div onClick = {this.handlemove}>确认</div>
            </div>
          </div>
        </div>
        {/* 导航栏 */}
        <div className = 'searchNav'>
          <ul>
            {
              NavHrader.map((item,index)=> {
                return(
                  <li key = {index} 
                    onClick = {()=>this.hadleQueryindex(index,item)}
                    className = {currentIndex===index?'active':''}>
                    <a href = 'javascript:;'>{item.text}</a>
                    <img src = {currentIndex===index?(flag?item.on:item.up):item.noState} />
                  </li>    
                )
              })
            }
          </ul>
        </div>
        {/* 显示数据列表 */}
        <div className = 'BigCustomersBOX' style={{display:issearch}}> 
        {bigcustom.map((item,index)=> {
            return (
              <div className = 'BigComponent' key = {index} >
                <ComponentItem item = {item} flag = {true} index = {index}/>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default connect(state=>({...state.home,...state.classify}))(ClassifyPage)
