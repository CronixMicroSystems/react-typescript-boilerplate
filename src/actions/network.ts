import {actionTypes as types} from '../constants/action_types'

export function fnNetworkActive (text, name) {
  return {
    type: types.NETWORK_ACTIVE,
    text: text || '',
    name
  }
}

export function fnNetworkInactive (name) {
  return {
    type: types.NETWORK_INACTIVE,
    name
  }
}
