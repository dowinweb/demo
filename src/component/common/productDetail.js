import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Carousel, Rate, Checkbox  } from 'antd'
import {Link} from 'react-router-dom'
import Comment from './Comment'
import './productDetail.less'

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden:'none',
      data:[
        {title:'规格',time:['蒙奇奇A款','蒙奇奇B款','蒙奇奇C款']},
        {title:'颜色',time:['高雅白色','慕丝妮黑','蒂芬妮蓝']},        
      ],
      number:1,
      flag:true
    }
  }
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  // 控制筛选的显示和隐藏
  handlemove = (e) => {
    if(this.state.isHidden){
      this.setState({
        isHidden:''
      })
      return  
    }
    this.setState({
      isHidden:'none'
    })
  }

  // 阻止父级点击事件向子级冒泡
  handleStop = (e) => {
    e.stopPropagation()
  }

  onChange = () => {
    this.setState({
      flag:!this.state.flag
    })
  }

    // 点击加减
  handleStepPlus =(event) => {
    let {number} = this.state
    number =  parseFloat(number)
    let isAdd =  event.target.innerHTML
    if(isAdd === '+'){
      this.setState({
        number:number+=1
      })
      console.log('+++++')
    }else{
      this.setState({
        number:number-=1
      })
      console.log('-----')
    }
  }
  handelChange = (e) => {
    this.setState({
      number:e.target.value
    })
  }

  // 点击跳转支付页面
  handleGoPay = () => {
    this.props.history.push('/pay')
  } 

  render() {
    let {isHidden,data,number,flag} = this.state
    return(
      <div className = 'ProductDetailBox'>
      {/* 数量选择遮盖层 */}
      <div className = 'screening'
          onClick = {this.handlemove}
          style = {{display:isHidden}}>
          <div className = 'mainContent'
          onClick = {this.handleStop}
          > 
          {/* 商品数据 */}
            <div className = 'textContent'>
              <div className = 'leftBox'>
                <img src = '/static/images/346346.png'></img>
              </div>
              <div className = 'right'>
                <div className = 'three'>
                  <div>￥398.20</div>
                </div>                
                <div className = 'two'>库存 2350件</div>
                <div className = 'one'>已选：<span>蒙奇奇A款，</span>请选择规格</div>
            </div>
            </div>
            {/* 生成规格和颜色数据 */}
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
              <div className = 'title'>模式</div>
              <div className = 'ModeSelect'>
                <div>
                  <Checkbox checked = {flag} onChange={this.onChange}/>
                  <span>全款购买</span>
                </div>
                <div>
                  <Checkbox checked = {!flag} onChange={this.onChange}/>
                  <span>租赁</span>
                </div>
              </div>
              <div className = 'title'>数量</div>
              <div className = 'StepPlus'>
                <span onClick = {this.handleStepPlus}>-</span>
                  <input value = {number} onChange = {this.handelChange} />
                <span onClick = {this.handleStepPlus}>+</span>
              </div>
            {/* 底部确认按钮 */}
            <div className = 'bottomBtn'>
              <div onClick = {this.handleGoPay}>确认</div>
            </div>
          </div>
        </div>
        <div className = 'ProductDetailSwipe'>
          <Carousel autoplay>
            <div><img src = '/static/images/Swipe.jpg'/></div>
            <div><img src = 'https://dummyimage.com/750x700' /></div>
            <div><img src = 'https://dummyimage.com/750x700' /></div>
            <div><img src = 'https://dummyimage.com/750x700' /></div>
          </Carousel>
        </div>
        <div className = 'ProductDetailInfo'>
          <div className = 'ProductDetailLeft'>
            <div className = 'title'>
              蒙奇奇 耳机入耳式 运动跑步电脑耳麦音乐游戏吃鸡
                K歌有线hifi耳塞式通话魔音声 火红蒙奇奇                     
            </div>
            <div className = 'main_price'>
              <div className = 'current_price'>￥398.20</div>
              <div>
                <div className = 'ori_price'>￥898.00</div>
                <div className = 'discount'>7折</div>
              </div>
            </div>
          </div>
          <div className = 'ProductDetailRight'>
            <div className = 'demo'>
              <div className = 'good_rate'>98%</div>
              <div><Rate disabled defaultValue={3} 
              style = {{fontSize:'.02rem',width:'.9rem',display:'inline'}} /></div>
              <div className = 'total_comment'>28评价</div>
            </div>
          </div>
        </div>
        <div className = 'main_line'>
          <div>租赁价：<span>￥300.00</span>/月  押金<span>￥1800.00</span></div>
          <div>了解租赁模式></div>
        </div>
        <div className = 'lalalalla'>
          <div>运费: 0.00</div>
          <div>销量: 13999</div>
          <div>广东 中山</div>
        </div>
        <div className = 'hahahahha'>
          <div >返积分</div>
          <div>购买后返回10000积分 送999朵玫瑰</div>
        </div>
        <div className = 'twoItem'>
          <div className = 'item' onClick = {this.handlemove} >
            <div>规格数量选择</div>
            <div>></div>
          </div>
          <div className = 'item'>
            <Link to = '/service'>产品售后服务</Link>
            <div>></div>
          </div>
        </div>       
        <div className = 'main_comment'>
          <div className="comment_info">
            <div className = 'left'>用户评价(999+)</div>
            <div className = 'Right'><Link to = '/comment'><span>98.8%</span> 好评率  ></Link></div>
          </div>
          <Comment flag = {true}/>
          {/* <div class="comment_detail">
              <div class="comment_user">
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
                <div class="comment_img">
                  <img src="https://dummyimage.com/148x148"/>
                  <img src="https://dummyimage.com/148x148"/>
                  <img src="https://dummyimage.com/148x148"/>
                </div>
              </div>
          </div> */}
        </div>
        <div className= 'phoneImg'>
        <img src="https://dummyimage.com/375x375"/>
      </div>
      </div>
    )
  }
}

export default connect()(ProductDetail)
