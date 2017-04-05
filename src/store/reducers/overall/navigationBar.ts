import {actionTypes as types} from '../../../constants/action_types'
import {NAVIGATION_BAR_INITIAL_STATE} from '../initial_state'

function navigationReducer (state = NAVIGATION_BAR_INITIAL_STATE, action) {
  switch (action.type) {
    case types.HEADER_CHANGE_NAVIGATION_BAR:
      return {...state, navigationBar: action.arr}
    default:
      return state
  }
}
export default navigationReducer
