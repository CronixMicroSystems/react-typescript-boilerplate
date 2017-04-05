import {actionTypes as types} from '../constants/action_types'
import {toastr} from 'react-redux-toastr'

export function successToast (header, text) { toastr.success(header, text) }
export function warningToast (header, text) { toastr.warning(header, text) }
export function errorToast (header, text) { toastr.error(header, text) }
export function actionChangeToken (token) {
  return {
    type: types.CHANGE_TOKEN,
    token
  }
}
