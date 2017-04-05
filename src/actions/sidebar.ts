import {actionTypes as types} from '../constants/action_types'

export function actionToggleSidebar (sidebarStatus) {
  return {
    type: types.TOGGLE_SIDEBAR,
    sidebarStatus
  }
}

export function actionToggleMobileSidebar (sidebarStatusMobile) {
  return {
    type: types.TOGGLE_MOBILE_SIDEBAR,
    sidebarStatusMobile
  }
}
