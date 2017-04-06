import {actionTypes as types} from '../constants/action_types'

export function actionChangeHeaderTitle (headerTitle) {
  return {
    type: types.HEADER_CHANGE_TITLE,
    headerTitle
  }
}

export function actionChangeNavigationBar (arr) {
  return {
    type: types.HEADER_CHANGE_NAVIGATION_BAR,
    arr
  }
}
