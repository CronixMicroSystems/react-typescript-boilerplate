import {actionTypes as types} from '../../../constants/action_types'
import {AUTH_INITIAL_STATE} from '../initial_state'

function authReducer (state = AUTH_INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return {...state, isAuthenticated: action.isAuthenticated, userModel: action.userModel} }
    case types.LOGIN_ERROR_MES_OVERALL:
      return {...state, loginErrorMesOverall: action.loginErrorMesOverall, isAuthenticated: action.isAuthenticated}
    case types.LOGOUT_SUCCESS:
      return {...state, isAuthenticated: action.isAuthenticated}
    default:
      return state
  }
}
export default authReducer
