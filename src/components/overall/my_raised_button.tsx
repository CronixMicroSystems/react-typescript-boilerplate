import * as React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

interface OwnProps {
  label: any
}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {}

const mapStateToProps = null
const mapDispatchToProps = null

class MyRaisedButtonComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  render () {
    let listProps: any = Object.assign({}, this.props)

    delete listProps.active
    delete listProps.toastr
    delete listProps.strings
    delete listProps.dispatch
    delete listProps.locale

    return <RaisedButton {...listProps} />
  }
}
export const MyRaisedButton: any = connect(mapStateToProps, mapDispatchToProps)(MyRaisedButtonComponent)
