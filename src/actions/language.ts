import {setLocale} from 'react-redux-i18n'

export function actionChangeLanguage (locale) {
  window.localStorage.setItem('locale', locale)
  return dispatch => {
    dispatch(setLocale(locale))
  }
}
