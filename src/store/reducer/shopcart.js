import * as TYPES from '../actionTypes'

let initData = {
  shopcart:[
    {
      img:'/static/images/346346.png',
      title:'dostyle HS310 JBL制造商 滋润心窝立体声 金属耳机 女神专属 ',
      type:'女神款',
      price:'￥888',
      status:'全款购买',
      checked:true,
      id:1
    },
    {
      img:'/static/images/346346.png',
      title:'程序员快乐小拖鞋 JBL制造商 滋润脚心  资深前端专属 ',
      type:'秒杀款',
      price:'￥300',
      status:'全款购买',
      checked:true,
      id:2
    },
    {
      img:'/static/images/346346.png',
      title:'dostyle HS310 JBL OBG listent is all OJBK from Guo Wai ',
      type:'进口的',
      price:'￥99999',
      status:'买不起',
      checked:true,
      id:3
    },
    {
      img:'/static/images/346346.png',
      title:'美的（Midea）家用直饮净水器 双出水400G无桶大流量纯水机',
      type:'女神款',
      price:'￥666',
      status:'租赁',
      checked:true,
      id:4
    },
  ],
  selectAll:true, //存储全选全不选的状态
}
export default function shopcart (state = initData, action) {
  state = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    // 操作全选全不选状态
    case TYPES.QUERYSECTECSTATUS:
      let value = action.value
      if(value === 'all'){
        // 修改全选状态
        state.selectAll = !state.selectAll
        console.log(state.selectAll)
        // 根据全选状态 给一项添加选中状态
        state.shopcart = state.shopcart.map(item=>{
          return {...item,checked:state.selectAll}
        })
      }else{
        let item = state.shopcart.find(item=>item.id === value)
        item.checked = !item.checked
        // 验证所有项是否都是选中的如果是 全选也要选中
        state.selectAll = state.shopcart.every(item=>item.checked === true)
      }
      break
    default:
      break
  }
  return state
}