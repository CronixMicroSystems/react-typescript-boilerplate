import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {enCA, enUS} from '../i18n/index'
import {INITIAL_STATE as initialState} from './reducers/initial_state'

const TRANSLATIONS = {
  'en-CA': enCA,
  'en-US': enUS
}

const LOGGER = createLogger()
const STORE = createStore(rootReducer, initialState, compose(applyMiddleware(thunk, LOGGER)))

syncTranslationWithStore(STORE)
STORE.dispatch(loadTranslations(TRANSLATIONS))
STORE.dispatch(setLocale(initialState.app.locale))

export let history = syncHistoryWithStore(browserHistory, STORE)
export default STORE
