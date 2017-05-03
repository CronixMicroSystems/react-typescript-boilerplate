import * as React from 'react'
import {Route, Router} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store/index'
import {App} from './containers/app'
import {Auth} from './containers/auth'
import {Login} from './components/auth/login'
import {ResPass} from './components/auth/restore_pass'
import {NewPass} from './components/auth/new_pass'
import {Logout} from './components/auth/logout'
import {Users} from './components/pages/users'
import {Profile} from './components/pages/profile'
import {General} from './components/pages/settings/general'
import {NotFound} from './components/pages/not_found'
import {Contacts} from './components/pages/contacts'
import {FAQ} from './components/pages/faq'
import {Email} from './components/pages/email'

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
            <Route path="/" component={App}>
                <Route path="/users" component={Users}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/settings" component={General}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/email" component={Email}/>
            </Route>
            <Route path="/auth" component={Auth}>
                <Route path="/login" component={Login}/>
                <Route path="/restore_password" component={ResPass}/>
                <Route path="/recover_password" component={NewPass}/>
                <Route path="/logout" component={Logout}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Router>
    </Provider>
)
