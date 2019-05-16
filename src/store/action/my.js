import * as TYPES from '../actionTypes'

let my = {
  // 获取全部订单中类型
  queryFilterItem(key){
    return {
      type:TYPES.QUERYFILTERITEM,
      key
    }
  }
}
export default my