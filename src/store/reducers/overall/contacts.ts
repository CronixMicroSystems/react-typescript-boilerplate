import {actionTypes as types} from '../../../constants/action_types'
import {CONTACTS_INITIAL_STATE} from '../initial_state'

function contactsReducer (state = CONTACTS_INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_CONTACTS:
      return {...state,
        PrimaryName: action.PrimaryName,
        PrimaryNameUid: action.PrimaryNameUid,
        PrimaryEmail: action.PrimaryEmail,
        PrimaryEmailUid: action.PrimaryEmailUid,
        PrimaryAddress: action.PrimaryAddress,
        PrimaryAddressUid: action.PrimaryAddressUid,
        PrimaryPhone: action.PrimaryPhone,
        PrimaryPhoneUid: action.PrimaryPhoneUid,
        BillingName: action.BillingName,
        BillingNameUid: action.BillingNameUid,
        BillingEmail: action.BillingEmail,
        BillingEmailUid: action.BillingEmailUid,
        BillingAddress: action.BillingAddress,
        BillingAddressUid: action.BillingAddressUid,
        BillingPhone: action.BillingPhone,
        BillingPhoneUid: action.BillingPhoneUid
      }
    case types.EDIT_CONTACTS_DIALOG:
      return {...state, toggleEditContact: action.status, currentEditKey: action.key, currentEditValue: action.value, currentEditIndex: action.Index, currentEditUid: action.uid}
    default:
      return state
  }
}
export default contactsReducer
