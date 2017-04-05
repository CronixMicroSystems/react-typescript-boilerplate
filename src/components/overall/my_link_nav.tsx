import React, {Component} from 'react'
import {connect} from 'react-redux'
import activeComponent from 'react-router-active-component'
let LinkNav = activeComponent('div', {link: true})

class Footer extends Component {

  render () {
    let listProps = Object.assign({}, this.props)

    delete listProps.nestedLevel
    delete listProps.strings
    delete listProps.toastr
    delete listProps.dispatch
    delete listProps.locale
    delete listProps.params
    delete listProps.location
    delete listProps.routes

    return <LinkNav {...listProps} />
  }
}
export default connect()(Footer)
