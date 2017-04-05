import React, { Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-redux-i18n'
import { fnChangeHeaderTitle, fnChangeNavigationBar } from '../../actions'

class Users extends Component {

  componentDidMount () {
    this.props.fnChangeHeaderTitle(I18n.t('UsersPage.namePage'))
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Users',
        url: ''
      }
    ])
  }

  render () {
    return (
      <div className="wrapPage"/>
    )
  }
}
function mapStateToProps ({app}) { return {app} }
export default connect(mapStateToProps, { fnChangeHeaderTitle, fnChangeNavigationBar })(Users)
