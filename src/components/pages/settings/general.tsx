import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fnChangeHeaderTitle, fnChangeNavigationBar} from '../../../actions'
import {I18n} from 'react-redux-i18n'

class Settings extends Component {

  componentWillMount () {
    this.props.fnChangeHeaderTitle(I18n.t('SettingsPage.namePage'))
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Settings',
        url: ''
      },
      {
        name: 'General',
        url: ''
      }
    ])
  }

  render () {
    return (
      <div/>
    )
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps, { fnChangeHeaderTitle, fnChangeNavigationBar })(Settings)
