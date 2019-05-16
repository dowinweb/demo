import * as TYPES from '../actionTypes'



let initData = {
  itemData:[
    {text:'电饭煲',img:'/static/images/100x100.png'},
    {text:'洗衣机',img:'/static/images/100x100.png'},
    {text:'吸尘器',img:'/static/images/100x100.png'},
    {text:'洗碗机',img:'/static/images/100x100.png'},
    {text:'豆浆机',img:'/static/images/100x100.png'},
    {text:'笔记本',img:'/static/images/100x100.png'},
    {text:'笔记本',img:'/static/images/100x100.png'},
    {text:'笔记本',img:'/static/images/100x100.png'},
  ],
  NavHrader:[
    { 
      text:'时间',noState:'/static/images/筛选无状态.png',
      on:'/static/images/筛选 上.png',up:'/static/images/筛选 下.png'
    },
    { 
      text:'人气',noState:'/static/images/筛选无状态.png',
      on:'/static/images/筛选 上.png',up:'/static/images/筛选 下.png'
    },
    { 
      text:'价格',noState:'/static/images/筛选无状态.png',
      on:'/static/images/筛选 上.png',up:'/static/images/筛选 下.png'
    },
    { 
      text:'销量',noState:'/static/images/筛选无状态.png',
      on:'/static/images/筛选 上.png',up:'/static/images/筛选 下.png'
    },
    { 
      text:'筛选',noState:'/static/images/筛选点击前.png',
      on:'/static/images/筛选点击后.png',up:'/static/images/筛选点击后.png'
    },
  ]
}
export default function classify(state = initData,action) {
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){

    default:
    break
  }
  return state
}