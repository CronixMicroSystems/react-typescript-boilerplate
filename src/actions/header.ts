import {actionTypes as types} from '../constants/action_types'

export function fnChangeHeaderTitle (headerTitle) {
  return {
    type: types.HEADER_CHANGE_TITLE,
    headerTitle
  }
}

export function fnChangeNavigationBar (arr) {
  return {
    type: types.HEADER_CHANGE_NAVIGATION_BAR,
    arr
  }
}
