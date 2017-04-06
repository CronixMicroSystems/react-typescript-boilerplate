import { fnNetworkInactive, actionToggleDialogAlert, errorToast, successToast, warningToast, fnLoginErrorMesOverall } from '../../actions/index'

export function requestSuccessHandler (name, close, success) {
  return dispatch => {
    close ? close() : ''
    dispatch(fnNetworkInactive(name))
    if (success) {
      successToast(name, 'Successful!')
    }
  }
}

export function requestErrorHandler (name, message, close) {
  return dispatch => {
    close ? close() : ''
    dispatch(actionToggleDialogAlert(true, true, message, `Action ${name}`))
    dispatch(fnNetworkInactive(name))
    errorToast(name, 'Error!')
  }
}

export function requestErrorHandlerAuth (name, message) {
  return dispatch => {
    dispatch(fnLoginErrorMesOverall(message))
    dispatch(fnNetworkInactive(name))
    warningToast(name, message)
  }
}

export function requestErrorHandlerAuthCatch (name, message) {
  return dispatch => {
    dispatch(actionToggleDialogAlert(true, true, message, `Action ${name}`))
    dispatch(fnNetworkInactive(name))
    errorToast(name, 'Error!')
  }
}

export function requestSuccessHandlerAuth (name) {
  return dispatch => {
    dispatch(fnNetworkInactive(name))
    successToast(name, 'Successful!')
  }
}
