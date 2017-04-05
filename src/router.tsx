import * as React from 'react'
import {Route, Router} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store/index'
// import {App} from './containers/app'
import {Auth} from './containers/auth'
import {Login} from './components/auth/login'
import {ResPass} from './components/auth/restore_pass'
import {NewPass} from './components/auth/new_pass'
import {Logout} from './components/auth/logout'
// import UsersPage from './components/pages/users'
// import ProfilePage from './components/pages/profile'
// import SettingsPage from './components/pages/settings/general'
import NotFoundPage from './components/pages/not_found'
// import ContactsPage from './components/pages/contacts'
// import FAQPage from './components/pages/faq'
// import EmailPage from './components/pages/email'

// function routingCallback () {
//   if (store.getState().auth.isAuthenticated) {
//     const EXCEPTIONS = [
//       '/login',
//       '/restore_password',
//       '/recover_password',
//       '/logout'
//     ]
//     if (EXCEPTIONS.indexOf(history.getCurrentLocation().pathname) === -1) {
//       history.push('/login')
//     }
//   }
//   window.scrollTo(0, 0)
// }

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/auth" component={Auth}>
        <Route path="/login" component={Login}/>
        <Route path="/restore_password" component={ResPass}/>
        <Route path="/recover_password" component={NewPass}/>
        <Route path="/logout" component={Logout}/>
      </Route>
      <Route path="*" component={NotFoundPage}/>
    </Router>
  </Provider>
)