import React, {Component} from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

class MyRaisedButton extends Component {

  render () {
    let listProps = Object.assign({}, this.props)

    delete listProps.active
    delete listProps.toastr
    delete listProps.strings
    delete listProps.dispatch
    delete listProps.locale

    return <RaisedButton {...listProps} />
  }
}
export default connect()(MyRaisedButton)
