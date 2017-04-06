import {actionTypes as types} from '../constants/action_types'

export function actionToggleDialogAlert (status = false, error, text, where) {
  return {
    type: types.ALERT_DIALOG_PREVIEW,
    status,
    error,
    text,
    where
  }
}
export function actionToggleDialogAbout (status = false) {
  return {
    type: types.ABOUT_DIALOG_PREVIEW,
    status
  }
}
