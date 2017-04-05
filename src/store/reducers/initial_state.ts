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

//  admin page
export const ADMIN_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  physicians page
export const PHYSICIANS_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  patients page
export const PATIENTS_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  managers page
export const MANAGERS_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  organizations page
export const ORGANIZATIONS_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  viewers page
export const VIEWERS_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  hospitals page
export const HOSPITALS_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  supportWorker page
export const SUPPORT_WORKER_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  HOW page
export const HOW_PAGE_INITIAL_STATE = {
  tableData: {
    iTotalRecords: null,
    tableData: []
  }
}

//  navigation
export const NAVIGATION_BAR_INITIAL_STATE = {
  navigationBar: []
}

//  overview page
export const OVERVIEW_PAGE_INITIAL_STATE = {
  DataLoaded: false,
  Admins: null,
  BillingInfo: '',
  DurationOfContract: null,
  Hospitals: null,
  Name: '',
  NumberOfUsersAllowed: null,
  PatientCount: null,
  Physicians: null,
  SurgeriesCount: 0,
  billingAddress: null,
  billingEmail: null,
  billingName: null,
  billingPhone: null,
  primaryAddress: null,
  primaryEmail: null,
  primaryName: null,
  primaryPhone: null,
  contacts: null
}

export const INITIAL_STATE = {
  //  auth
  auth: AUTH_INITIAL_STATE,

  //  pages
  adminPage: ADMIN_PAGE_INITIAL_STATE,
  physiciansPage: PHYSICIANS_PAGE_INITIAL_STATE,
  overviewPage: OVERVIEW_PAGE_INITIAL_STATE,
  patientsPage: PATIENTS_PAGE_INITIAL_STATE,
  managersPage: MANAGERS_PAGE_INITIAL_STATE,
  HOWPage: HOW_PAGE_INITIAL_STATE,
  organizationsPage: ORGANIZATIONS_PAGE_INITIAL_STATE,
  viewersPage: VIEWERS_PAGE_INITIAL_STATE,
  hospitalsPage: HOSPITALS_PAGE_INITIAL_STATE,
  supportWorkerPage: SUPPORT_WORKER_PAGE_INITIAL_STATE,

  //  overall
  app: APP_INITIAL_STATE,
  navigationBar: NAVIGATION_BAR_INITIAL_STATE,
  dialog: DIALOG_INITIAL_STATE,
  history: HISTORY_INITIAL_STATE,
  user: USER_INFO_INITIAL_STATE,
  contacts: CONTACTS_INITIAL_STATE
}
