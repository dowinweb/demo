import React, {Component} from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import '../static/css/Shopcart.less'

class Shopcart extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      shopcart:[
        {
          img:'/static/images/346346.png',
          title:'dostyle HS310 JBL制造商 滋润心窝立体声 金属耳机 女神专属 ',
          type:'女神款',
          price:'￥888',
          status:'全款购买',
          checked:true,
          number:1,
          id:1
        },
        {
          img:'/static/images/346346.png',
          title:'程序员快乐小拖鞋 JBL制造商 滋润脚心  资深前端专属 ',
          type:'秒杀款',
          price:'￥300',
          status:'全款购买',
          checked:true,
          number:6,
          id:2
        },
        {
          img:'/static/images/346346.png',
          title:'dostyle HS310 JBL OBG listent is all OJBK from Guo Wai ',
          type:'进口的',
          price:'￥99999',
          status:'买不起',
          checked:true,
          number:1,
          id:3
        },
        {
          img:'/static/images/346346.png',
          title:'美的（Midea）家用直饮净水器 双出水400G无桶大流量纯水机',
          type:'女神款',
          price:'￥666',
          status:'租赁',
          checked:true,
          number:1,
          id:4
        },
      ],
      selectAll:true, //存储全选全不选的状态
      pay:'',
    }
  }


  // 单个选择判断
  handleClick = (id) => {
    let item = this.state.shopcart.find(item=>item.id === id)
    item.checked = !item.checked
    //筛选所有数据是否全部都为false 
    let all = this.state.shopcart.every(item=>item.checked === false)
    // 筛选所有数据是否全部都为true
    let single = this.state.shopcart.every(item=>item.checked === true)
    all?this.setState({selectAll:!all}):this.setState({selectAll:single})
  }

  // 点击加减
  handleStepPlus =(id,event) => {
    let item = this.state.shopcart.find(item=>item.id === id)
    let isAdd =  event.target.innerHTML
    if(isAdd === '+'){
      item.number = item.number+=1
      this.setState({
        item:{...item,number:item.number}
      })
      console.log('+++++')
    }else{
      item.number = item.number-=1
      if(item.number < 1){item.number = 1}
      this.setState({
        item:{...item,number:item.number}
      })
      console.log('-----')
    }
  }

  // input输入 内容双向绑定
  handelChange = (id,e) => {
    // debugger
    let num = e.target.value
    if(!num){num = 0}
    let item = this.state.shopcart.map(item=>{
      if(item.id === id){
        item.number = parseFloat(num)
      }
      return item
    })
    this.setState({
      shopcart:[...item]
    })
}
  // 全选or不全选
  handleClickAll = () => {
    this.setState({
      selectAll:!this.state.selectAll
    })
    // setstate异步 不能直接获取改变后的值
    setTimeout(()=>{
      if(this.state.selectAll === true){
        let newArr = this.state.shopcart.map(item=>{
         return {...item,checked:this.state.selectAll}
       })
        this.setState({shopcart:newArr})
      }else{
        let newArr = this.state.shopcart.map(item=>{
          return {...item,checked:this.state.selectAll}
        })
         this.setState({shopcart:newArr}) 
      }   
    },0)
  }
  
  handlePushInfo = () => {
    this.props.history.push('/productdetail')
  }
  // 结算跳转的页面
  hadlePay = () => {
    this.props.history.push('/paySuccess')
  }  
  
  
  render() {
    let {shopcart} = this.state
    // 判断从支付页面传过来的pay控制组件的显示隐藏
    // 判断从交易成功页面传过来的order控制组件的显示隐藏
    let {pay,order} = this.props
    return(
      <div className = 'shopCartBox'>
        <div className = 'cart_notice' style = {{display:pay}} >
          <div className = 'cart_noticeLeft'>
            <span>家电任选</span>
            <div>平台活动，满两件总价998元减150元</div>
          </div>
          <div className = 'cart_noticeRight'>再逛逛 ></div>                   
        </div>
        {
          shopcart.map((item,index) => {
            let {img,title,type,price,status,checked,number, id} = item
            return(
              <div className = 'eeeeee' key = {index}>
              <div className = 'Bottomleft' style = {{display:pay}}>
                <div className = 'imgimg' onClick = {()=>this.handleClick(id)}>
                  <img src = {checked?'/static/images/购物车选中.png':'/static/images/购物车未选中.png'}/>
                </div>
              </div>
              <div className = 'textContent'>
                <div className = 'leftBox' onClick = {this.handlePushInfo} >
                  <img src = {img}></img>
                </div>
                <div className = 'right'>
                  <div className = 'one'>{title}</div>
                  <div className = 'two'>{type}</div>
                  <div className = 'three'>
                    <div>{price}&nbsp;<em style = {{display:order}}>{status}</em></div>
                    {/* 交易成功页传入的有值把步进器隐藏 */}
                    <div className = 'StepPlus' style = {{display:order}}>
                      <span onClick = {this.handleStepPlus.bind(this,id)}>-</span>
                        <input value = {number} onChange = {this.handelChange.bind(this,id)} />
                      <span onClick = {this.handleStepPlus.bind(this,id)}>+</span>
                    </div>
                  </div>
                </div>
                {/* 交易成功页传入的有值 显示这个 */}
                {order?
                <div className = 'orderNeed'>
                  <div className = 'Number'>x{number}</div>
                  <div className = 'Arefund'>申请退款</div>
                </div>
                :''}
              </div>
            </div>    
            )
          })
        }
        <div className = 'bottom' style = {{display:order}}></div>
        <div className = 'shopCartBottom' style = {{display:order}}>
          <div className = 'Bottomleft'>
            <div className = 'imgimg'
            style = {{display:pay}}
            onClick = {this.handleClickAll} >
              <img src = {this.state.selectAll?'/static/images/购物车选中.png':'/static/images/购物车未选中.png'}/>
            </div>
            {/* 如果pay存在 把全选变为 应付金额 把下单改为结算 */}
            {pay?<span className = 'paymany'>应付：￥3611.00</span>:<span className = 'spanspan'>全选</span>}
          </div>
          <div className = 'BottomRight'>
            <span style = {{display:pay}}>￥0.00</span>
            {/*  */}
            {pay?<span className = 'Placepay' onClick = {this.hadlePay}>结算(6)</span>:
            <span className = 'PlaceTheOrder'>下单</span>}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Shopcart))