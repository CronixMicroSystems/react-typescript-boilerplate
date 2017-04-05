import {actionTypes as types} from '../../../constants/action_types'
import {APP_INITIAL_STATE} from '../initial_state'

function appReducer (state = APP_INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_TOKEN:
      !action.token ? window.localStorage.removeItem('token') : window.localStorage.setItem('token', action.token)
      return {...state, token: action.token}
    case types.GET_ROLES:
      return {...state, roles: action.roles}
    case types.HEADER_CHANGE_TITLE:
      return {...state, headerTitle: action.headerTitle}
    case types.NETWORK_ACTIVE:
      let listActive = state.activeMethods
      listActive.indexOf(action.name) === -1 ? listActive.push(action.name) : console.error('1!!!', action.name)
      return {...state, networkActive: true, networkMessage: action.message, activeMethods: listActive}
    case types.NETWORK_INACTIVE:
      let list = state.activeMethods
      let status = true
      list.indexOf(action.name) !== -1 ? list.splice(list.indexOf(action.name), 1) : console.error('2!!!', action.name)
      list.length === 0 ? status = false : ''
      return {...state, networkActive: status, activeMethods: list}
    case types.TOGGLE_SIDEBAR:
      return {...state, sidebarStatus: action.sidebarStatus}
    case types.TOGGLE_MOBILE_SIDEBAR:
      return {...state, sidebarStatusMobile: action.sidebarStatusMobile}
    case types.MQL:
      return {...state, mql: action.mql}
    case types.LOADED_APP_INACTIVE:
      return {...state, loadedApp: action.status}
    default:
      return state
  }
}

export default appReducer
