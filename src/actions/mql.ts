import {actionTypes as types} from '../constants/action_types'

export function actionInitMQL (mql) {
  return {
    type: types.MQL,
    mql
  }
}
