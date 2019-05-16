import * as TYPES from '../actionTypes'

let initData = {
  // 首页限时抢购数据
  newlist:[
    {img:'/static/images/图片1.png',text:'限时抢购'},
    {img:'/static/images/图片2.png',text:'每日新品'},
    {img:'/static/images/图片3.png',text:'新品快抢'},
    {img:'/static/images/图片4.png',text:'免费领取'},
  ],
  // 首页消息列表数据
  messagelistdata:[
    {data:'08月12日',title:'促销信息',text:'新用户进店送200元代金券',id:0},
    {data:'09月13日',title:'商家通知',text:'店铺整改，暂停服务，开业时间未定',id:1},
    {data:'10月14日',title:'商城助手',text:'您购买的宝贝已经发货',id:2},
    {data:'11月15日',title:'退货通知',text:'你退货的商品卖家已签收，待退款',id:3},
  ],
  // 大客户专区数据
  bigcustom:[
    {img:'/static/images/346346.png',title:'爆品',text:'海马懒人圆凳简洁风',price:'￥300'},
    {img:'/static/images/346346.png',title:'新品',text:'程序员办公桌简洁风',price:'￥666'},
    {img:'/static/images/346346.png',title:'今日特价',text:'快乐小拖鞋',price:'￥233'},
    {img:'/static/images/346346.png',title:'秒杀价',text:'快乐小拖鞋',price:'￥233'},
  ],
  // 搜索结果
  searchresult:''
}
export default function home (state = initData, action) {
  state = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case TYPES.QUERYSEARCHDATA:
      // 查找搜索内容
      let item = state.bigcustom.find(item =>item.title === action.value)
      // 如果查找到 放入搜索结果 searchresult 中
      if(item){state.searchresult = item}     
      break




    default:
      break
  }
  return state
}