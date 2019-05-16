import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import './css/Service.less'
import { Menu } from 'antd'

 

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initdata:[
        {title:'申请售后',key:'a'},
        {title:'待安排',key:'b'},
        {title:'待服务',key:'c'},
        {title:'已完成',key:'d'},
      ],
      shopcart:[
        {
          img:'/static/images/346346.png',
          title:'dostyle HS310 JBL制造商 滋润心窝立体声 金属耳机 女神专属 ',
          type:'女神款',
          price:'￥888',
          status:'全款购买',
          checked:true,
          number:1,
          id:'c'
        },
        {
          img:'/static/images/346346.png',
          title:'程序员快乐小拖鞋 JBL制造商 滋润脚心  资深前端专属 ',
          type:'秒杀款',
          price:'￥300',
          status:'全款购买',
          checked:true,
          number:6,
          id:'a'
        },
        {
          img:'/static/images/346346.png',
          title:'dostyle HS310 JBL OBG listent is all OJBK from Guo Wai ',
          type:'进口的',
          price:'￥99999',
          status:'买不起',
          checked:true,
          number:1,
          id:'b'
        },
        {
          img:'/static/images/346346.png',
          title:'美的（Midea）家用直饮净水器 双出水400G无桶大流量纯水机',
          type:'女神款',
          price:'￥666',
          status:'租赁',
          checked:true,
          number:1,
          id:'d'
        },
      ],
      current: 'a',
      shopCarCar:[]
    }
  }
  componentDidMount(){
    let Item = this.state.shopcart.find(item=>item.id === 'a')
    this.setState({
      shopCarCar:[Item]
    })
  }
  
  handleClick = (e) => {
    this.setState({current: e.key});
    setTimeout(()=>{
      let newItem = this.state.shopcart.find(item=>item.id === this.state.current)
      this.setState({
        shopCarCar:[newItem]
      })
    },0)
  }

  // 控制路由跳转
  handlePushInfo = () => {
    this.props.history.push('/aftersell')
  }

  render() {
    let {shopCarCar} = this.state
    let {afterSell} = this.props
    return(
    <div className = 'ServiceBoxContent'>
    {afterSell?'':
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className = 'NavBoxFlex'
      >
      {this.state.initdata.map((item)=>{
        return(
        <Menu.Item key={item.key} className = 'ServerNavBox'>
          {item.title}
        </Menu.Item>
        )
      })}
      </Menu>
      
    }
      {/* 显示列表 */}              
        {
          shopCarCar.map((item,index) => {
            let {img,title,type,price,} = item
            return(
            <>
            {afterSell?'':
              <div key = {index}  className = 'activeTopBox'>订单编号：230102566</div>
            }              
            <div className = 'eeeeee' >
              <div className = 'textContent'>
                <div className = 'leftBox' onClick = {this.handlePushInfo} >
                  <img src = {img}></img>
                </div>
                <div className = 'right'>
                  <div className = 'one'>{title}</div>
                  <div className = 'two'>{type}{afterSell?<span>x1</span>:''}</div>
                  <div className = 'three'>
                    <div>{price}</div>
                    {afterSell?'':
                      <div className = 'shouhou'
                       onClick = {this.handlePushInfo}>申请售后</div>
                    }
                  </div>
              </div>
              </div>
            </div> 
            </>   
            )
          })
        }
    </div>
    )
  }
}

export default connect()(Service)
