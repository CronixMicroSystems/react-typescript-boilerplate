import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fnChangeHeaderTitle, fnChangeNavigationBar } from '../../actions'
import { I18n } from 'react-redux-i18n'

class Email extends Component {

  componentWillMount () {
    this.props.fnChangeHeaderTitle(I18n.t('EmailPage.namePage'))
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Email',
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
function mapStateToProps () { return {} }
export default connect(mapStateToProps, { fnChangeHeaderTitle, fnChangeNavigationBar })(Email)
