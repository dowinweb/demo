import React, {Component, useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import './NavBottom.less'

// export default function NavBottom (props) {
//   const [data, setData] = useState([
//     {icon_active: '/static/images/home_active.png', icon:'/static/images/home.png',path:'/',text:'首页'},
//     {icon_active: '/static/images/home_active.png',icon:'/static/images/购物车点击前.png',path:'/classify',text:'分类'},
//     {icon_active: '/static/images/home_active.png',icon:'/static/images/购物车点击前.png',path:'/shopcart',text:'购物车'},
//     {icon_active: '/static/images/home_active.png',icon:'/static/images/我的点击前.png',path:'/my',text:'我的'}
//   ])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   useEffect(() => {
//     const pathname = window.location.hash.slice(1)
//     setCurrentIndex(data.findIndex(item => item.path == pathname))
//   })

//   return (
//     <footer className = 'NavFooterBox'>
//     {
//        data.map((item,index) => {
//         let {text, icon, path, icon_active } = item
//         return (
//         <NavLink to = {path} key = {index} onClick={() => setCurrentIndex(index)}>
//           {/* {currentIndex === index ? <img src = {icon_active} /> : <img src = {icon} />} */}
//           <img src = {currentIndex === index ? icon_active : icon} />
//           <span>{text}</span>
//         </NavLink>
//         )
//       })
//     }
//     </footer>
//   )
// }

class NavBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {icon_active: '/static/images/home_active.png', icon:'/static/images/home.png',path:'/',text:'首页'},
        {icon_active: '/static/images/分类 点击后.png',icon:'/static/images/分类点击前.png',path:'/classify',text:'分类'},
        {icon_active: '/static/images/购物车 点击后.png',icon:'/static/images/购物车点击前.png',path:'/shopcart',text:'购物车'},
        {icon_active: '/static/images/我的 点击后.png',icon:'/static/images/我的点击前.png',path:'/my',text:'我的'}
      ],
      currentIndex: 0
    }
  }
  componentDidMount () {
    const pathname = this.props.location.pathname
    this.setState({
      currentIndex: this.state.data.findIndex(item => item.path == pathname)
    })
  }
  handleClick = (index) => {
    this.setState({
      currentIndex: index
    })
  }
  render() {
    const { currentIndex } = this.state
    return(
      <footer className = 'NavFooterBox'>
      {
        this.state.data.map((item,index) => {
          let {text, icon, path, icon_active } = item
          return (
          <NavLink to = {path} key = {index} onClick={() => this.handleClick(index)}>
            {/* {currentIndex === index ? <img src = {icon_active} /> : <img src = {icon} />} */}
            <img src = {currentIndex === index ? icon_active : icon} />
            <span>{text}</span>
          </NavLink>
          )
        })
      }
      </footer>
    )
  }
}

export default withRouter(connect()(NavBottom))
