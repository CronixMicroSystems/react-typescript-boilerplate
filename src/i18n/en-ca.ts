const COMMON = {}

export default {
  Errors: {
    ...COMMON,
    Email: 'Invalid Email',
    Invalid: 'Invalid "%{label}',
    Length: 'The "%{label}" must be more than %{min} and less than %{max} characters long',
    Numeric: 'The "%{label}" must be numeric',
    Password: 'The "%{label}" must be more than %{min} and less than %{max} characters long'
  },
  Labels: {
    ...COMMON,
    Active: 'Active',
    hintText: 'Enter %{label}',
    FirstName: 'First name',
    LastName: 'Last name',
    Email: 'Email'
  },
  Buttons: {
    Cancel: 'Cancel',
    Close: 'Close',
    Reload: 'Reload',
    Report: 'Report',
    Add: 'Add',
    Edit: 'Edit',
    OK: 'OK'
  },

  Login: {
    ...COMMON,
    email: 'Email',
    emailLabel: 'Enter email',
    password: 'Password',
    passwordLabel: 'Enter password',
    loginButton: 'Login',
    registration: 'Register now!',
    forgotPass: 'Forgot password?'
  },
  Registration: {
    ...COMMON,
    email: 'Email',
    emailLabel: 'Enter email',
    password: 'Password',
    passwordLabel: 'Enter password',
    passwordConfirm: 'Confirm password',
    passwordLabelConfirm: 'Enter password',
    registrationButton: 'Registration',
    login: 'Login now!'
  },
  RestorePass: {
    ...COMMON,
    email: 'Email',
    emailLabel: 'Enter email',
    restoreButton: 'Restore password',
    login: 'Login now!'
  },
  NewPass: {
    ...COMMON,
    password: 'Password',
    passwordLabel: 'Enter password',
    passwordConfirm: 'Confirm password',
    passwordLabelConfirm: 'Enter password',
    changeButton: 'Change password',
    login: 'Login now!'
  },
  Sidebar: {
    ...COMMON,
    brand: 'React-boilerplate',
    generalMenuLabel: 'Common',
    moreMenuLabel: 'Other',
    usersMenuItem: 'Users',
    contactsMenuItem: 'Contacts',
    FAQMenuItem: 'FAQ',
    emailMenuItem: 'Email',
    settingsMenuItem: 'Settings',
    profileMenuItem: 'Profile',
    settingsMenuGeneral: 'General'
  },
  NotFoundPage: {
    ...COMMON,
    homeButton: 'Go home',
    textError: 'The site configured at this address does not contain the requested file.',
    nameError: 'Page not found'
  },
  UsersPage: {
    ...COMMON,
    namePage: 'Users'
  },
  ProfilePage: {
    ...COMMON,
    profession: 'Profession',
    visits: 'Visits',
    office: 'Office',
    namePage: 'Profile'
  },
  SettingsPage: {
    ...COMMON,
    namePage: 'Settings'
  },
  EmailPage: {
    ...COMMON,
    namePage: 'Email'
  },
  ContactsPage: {
    ...COMMON,
    namePage: 'Contacts'
  },
  FAQPage: {
    ...COMMON,
    namePage: 'FAQ'
  },
  Languages: {
    ...COMMON,
    'en-CA': 'English (Canada)',
    'en-US': 'English (United States)'
  },
  HeaderTools: {
    ...COMMON,
    labelLanguage: 'Language',
    labelFullScreen: 'FullScreen',
    labelNotifications: 'Notifications',
    labelTools: 'Tools',
    toolsMenuItemProfile: 'Profile',
    toolsMenuItemSettings: 'Settings',
    toolsMenuItemLogout: 'Logout'
  }
}
