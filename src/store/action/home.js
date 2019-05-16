import * as TYPES from '../actionTypes'

let home = {
  // 获取搜索内容的方法
  querySearchData(value){
    return {
      type:TYPES.QUERYSEARCHDATA,
      value
    }
  }
}
export default home