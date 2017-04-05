import {setLocale} from 'react-redux-i18n'

export function fnChangeLanguage (locale) {
  window.localStorage.setItem('locale', locale)
  return dispatch => {
    dispatch(setLocale(locale))
  }
}
