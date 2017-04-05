import {history} from '../../store/index'
import {actionTypes as types} from '../../constants/action_types'
import {actionChangeToken} from '../../actions/index'

export function actionLoginUser (email, password) {
  console.log(email, password)
  history.push('/')
  return (dispatch) => {
    dispatch(fnLoginReceive({}))
  }
}

export function actionRestorePassword (email) {
  console.log('email', email)
  history.push('/')
  return (dispatch) => {
    dispatch(fnLoginReceive({}))
  }
}

export function actionNewPassword (password) {
  console.log('password', password)
  history.push('/')
  return (dispatch) => {
    dispatch(fnLoginReceive({}))
  }
}

export function actionLogoutUser () {
  return dispatch => {
    dispatch(fnLogoutReceive())
    dispatch(actionChangeToken(null))
    history.push('/login')
  }
}

export function fnLoginErrorMesOverall (loginErrorMesOverall = '') {
  return {
    type: types.LOGIN_ERROR_MES_OVERALL,
    isAuthenticated: false,
    loginErrorMesOverall: loginErrorMesOverall
  }
}
function fnLoginReceive (userModel) {
  return {
    type: types.LOGIN_SUCCESS,
    isAuthenticated: true,
    userModel
  }
}

function fnLogoutReceive () {
  return {
    type: types.LOGOUT_SUCCESS,
    isAuthenticated: false
  }
}
