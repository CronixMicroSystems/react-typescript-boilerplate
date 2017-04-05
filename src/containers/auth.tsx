import * as React from 'react'
import {connect} from 'react-redux'
import NetworkSpinner from '../components/overall/network_spinner'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReduxToastr from 'react-redux-toastr'
import AlertDialog from '../components/dialogs/alertDialog'

let muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

interface OwnProps {}
interface OwnState {}
interface ConnectedState { app: { networkActive: boolean } }
interface ConnectedDispatch {}

const mapStateToProps = ({app}): ConnectedState => ({app})
const mapDispatchToProps = null

class AuthComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  render () {
    return (
      <div>
        <ReduxToastr />
        <NetworkSpinner visible={this.props.app.networkActive}/>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AlertDialog />
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
export const Auth: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(AuthComponent)