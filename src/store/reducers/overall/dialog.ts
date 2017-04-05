import {actionTypes as types} from '../../../constants/action_types'
import {DIALOG_INITIAL_STATE} from '../initial_state'

function dialogReducer (state = DIALOG_INITIAL_STATE, action) {
  switch (action.type) {
    case types.ALERT_DIALOG_PREVIEW:
      return {...state, toggleDialogAlert: action.status, dialogAlertError: action.error, dialogAlertText: action.text, dialogAlertWhere: action.where}
    case types.ABOUT_DIALOG_PREVIEW:
      return {...state, toggleDialogAbout: action.status}
    default:
      return state
  }
}
export default dialogReducer
