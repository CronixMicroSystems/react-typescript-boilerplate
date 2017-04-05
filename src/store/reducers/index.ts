import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {i18nReducer} from 'react-redux-i18n'
import appReducer from './overall/app'
import authReducer from './auth/auth'
import historyReducer from './overall/history'
import userReducer from './overall/user'
import dialogReducer from './overall/dialog'
import contactsReducer from './overall/contacts'
import navigationReducer from './overall/navigationBar'

const ROOT_REDUCER = combineReducers({
  auth: authReducer,
  app: appReducer,
  toastr: toastrReducer,
  navigationBar: navigationReducer,
  dialog: dialogReducer,
  history: historyReducer,
  user: userReducer,
  routing: routerReducer,
  contacts: contactsReducer,
  i18n: i18nReducer
})
export default ROOT_REDUCER

