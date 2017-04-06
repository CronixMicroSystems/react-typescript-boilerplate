import * as jwtDecode from 'jwt-decode'

const LOCALE = window.localStorage.getItem('locale') || 'en-CA'

let TOKEN = window.localStorage.getItem('token')

const TOKEN_DATA = TOKEN ? jwtDecode(TOKEN)['0'] : {}

if (!TOKEN_DATA || (TOKEN_DATA && 1000 * TOKEN_DATA.exp < Date.now())) {
  window.localStorage.removeItem('token')

  TOKEN = null
}

//  auth
export const AUTH_INITIAL_STATE = {
  isAuthenticated: !!TOKEN,
  loginErrorMesOverall: '',
  userModel: {
    FirstName: TOKEN_DATA.FirstName || 'Super',
    HasPasswordExpired: TOKEN_DATA.HasPasswordExpired || '',
    IsFirstLogin: TOKEN_DATA.IsFirstLogin || '',
    LastName: TOKEN_DATA.LastName || 'User',
    OrganizationUid: TOKEN_DATA.OrganizationUid || '',
    RoleId: TOKEN_DATA.RoleId || 1,
    UserUid: TOKEN_DATA.UserUid || ''
  }
}

//  overall
export const APP_INITIAL_STATE = {
  locale: LOCALE,
  token: TOKEN,
  roles: [],
  networkActive: false,
  loadedApp: true,
  activeMethods: [],
  networkMessage: null,
  sidebarStatus: true,
  sidebarStatusMobile: false,
  headerTitle: '',
  mql: null
}

export const CONTACTS_INITIAL_STATE = {
  PrimaryName: '',
  PrimaryNameUid: '',
  PrimaryEmail: '',
  PrimaryEmailUid: '',
  PrimaryAddress: '',
  PrimaryAddressUid: '',
  PrimaryPhone: '',
  PrimaryPhoneUid: '',
  BillingName: '',
  BillingNameUid: '',
  BillingEmail: '',
  BillingEmailUid: '',
  BillingAddress: '',
  BillingAddressUid: '',
  BillingPhone: '',
  BillingPhoneUid: ''
}

export const USER_INFO_INITIAL_STATE = {
  user: {
    userName: 'Angelina Jolie',
    office: 'Neurosurgery',
    professional: 'Doctor',
    visits: 129
  }
}

export const HISTORY_INITIAL_STATE = {
  activity: [
    {
      day: 'MONDAY',
      data: '17.10.2016',
      dayActivity: [
        {
          time: '09:00',
          title: 'Bypass patients'
        },
        {
          time: '10:00',
          title: 'Admission of patients'
        }
      ]
    },

    {
      day: 'THURSDAY',
      data: '18.10.2016',
      dayActivity: [
        {
          time: '09:00',
          title: 'Bypass patients'
        },
        {
          time: '10:00',
          title: 'Admission of patients'
        }
      ]
    }
  ]
}

export const DIALOG_INITIAL_STATE = {
  toggleDialogAbout: false,
  toggleDialogAlert: false
}

//  navigation
export const NAVIGATION_BAR_INITIAL_STATE = {
  navigationBar: []
}

export const INITIAL_STATE = {
  //  auth
  auth: AUTH_INITIAL_STATE,

  //  overall
  app: APP_INITIAL_STATE,
  navigationBar: NAVIGATION_BAR_INITIAL_STATE,
  dialog: DIALOG_INITIAL_STATE,
  history: HISTORY_INITIAL_STATE,
  user: USER_INFO_INITIAL_STATE,
  contacts: CONTACTS_INITIAL_STATE
}
