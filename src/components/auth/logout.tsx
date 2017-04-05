import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { actionLogoutUser } from '../../actions/index'

interface OwnProps {}
interface ConnectedState {}
interface ConnectedDispatch {
    actionLogoutUserLocal: () => void
}
interface OwnState {}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
    actionLogoutUserLocal: () => { dispatch(actionLogoutUser()) }
})

class LogoutComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  componentWillMount () { this.props.actionLogoutUserLocal() }
  public render() { return (<div/>) }
}
export const Logout: React.ComponentClass<OwnProps> = connect(null, mapDispatchToProps)(LogoutComponent)
