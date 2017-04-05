import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fnChangeHeaderTitle, fnChangeNavigationBar} from '../../actions'
import {I18n} from 'react-redux-i18n'

class FAQ extends Component {

  constructor (props) {
    super(props)
    this.fnChangeHeaderTitle = this.props.fnChangeHeaderTitle
    this.fnChangeNavigationBar = this.props.fnChangeNavigationBar
  }

  componentWillMount () {
    this.fnChangeHeaderTitle(I18n.t('FAQPage.namePage'))
    this.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'FAQ',
        url: ''
      }
    ])
  }

  render () {
    return (
      <div className="p-lg wrapPage"/>
    )
  }
}

function mapStateToProps () { return {} }

export default connect(mapStateToProps, { fnChangeHeaderTitle, fnChangeNavigationBar })(FAQ)
