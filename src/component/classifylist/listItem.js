import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './listItem.less'

class ListItem extends Component {

  handleQueryInfo = (index) => {
    console.log(index)
  }

  render() {
    let {itemData} = this.props
    return(
      <>
      {itemData.map((item,index)=> {
          item.id = index
          return (
          <div className = 'newListBox'  key = {index} onClick = {()=>{this.handleQueryInfo(index)}} >
            <div className = 'newItemBox'>
              <Link to = '/classifypage' >
              <img src = {item.img} />
              <span> {item.text} </span>
              </Link>              
            </div>
          </div>
          )
        })
      }
      </>  
    )
  }
}

export default connect(state=>({...state.classify}))(ListItem)
