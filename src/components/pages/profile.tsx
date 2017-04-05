import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fnChangeHeaderTitle, fnChangeNavigationBar} from '../../actions'
import {I18n} from 'react-redux-i18n'

class Profile extends Component {

  componentWillMount () {
    this.props.fnChangeHeaderTitle(I18n.t('ProfilePage.namePage'))
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Profile',
        url: ''
      }
    ])
  }

  render () {
    return (
      <div className="profilePage"/>
    )
  }
}
function mapStateToProps ({history, app, auth, user}) { return {activity: history.activity, app, auth, user} }
export default connect(mapStateToProps, { fnChangeHeaderTitle, fnChangeNavigationBar })(Profile)
