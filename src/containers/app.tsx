import * as React from 'react'
import * as Redux from 'redux'
import {connect} from 'react-redux'
import {Header} from '../components/header'
import {SidebarContent} from '../components/sidebar'
import {Workarea} from '../components/workarea'
import {history} from '../store/index'
import {Grid} from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import NetworkSpinner from '../components/overall/network_spinner'
import {actionToggleSidebar, actionToggleMobileSidebar, actionInitMQL} from '../actions/index'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {AlertDialog} from '../components/dialogs/alertDialog'
import {SIDEBAR_STYLE} from '../data/styles'

const muiTheme = getMuiTheme({palette: {accent1Color: deepOrange500}})

interface OwnProps {}
interface OwnState {}
interface ConnectedState {
  app: {
    mql: any,
    loadedApp: boolean,
    sidebarStatus: boolean,
    sidebarStatusMobile: boolean,
    networkActive: boolean
  },
  auth: {},
  values: {}
}
interface ConnectedDispatch {
  actionToggleSidebarLocal: (status: boolean) => void,
  actionToggleMobileSidebarLocal: (status: boolean) => void,
  actionInitMQLLocal: (mql: any) => void
}

const mapStateToProps = ({app, auth, values}): ConnectedState => ({app, auth, values})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionToggleSidebarLocal: (status: boolean) => { dispatch(actionToggleSidebar(status)) },
  actionToggleMobileSidebarLocal: (status: boolean) => { dispatch(actionToggleMobileSidebar(status)) },
  actionInitMQLLocal: (mql: any) => { dispatch(actionInitMQL(mql)) }
})

class AppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState>  {
  constructor (props) {
    super(props)
    history.listen(() => { this.props.actionToggleMobileSidebarLocal(false) })
  }

  mediaQueryChanged (mql) {
    if (mql) {
      if (mql.matches) {
        this.props.actionToggleSidebarLocal(true)
      } else {
        this.props.actionToggleSidebarLocal(false)
        this.props.actionToggleMobileSidebarLocal(false)
      }
    } else {
      if (this.props.app.mql.matches) {
        this.props.actionToggleSidebarLocal(true)
      } else {
        this.props.actionToggleSidebarLocal(false)
        this.props.actionToggleMobileSidebarLocal(false)
      }
    }
  }

  onSetSidebarOpen () { this.props.actionToggleMobileSidebarLocal(false) }

  componentWillMount () {
    let mql = window.matchMedia('(min-width: 800px)')
    mql.addListener(() => this.mediaQueryChanged.bind(this))
    this.props.actionToggleMobileSidebarLocal(!mql.matches)
    this.props.actionInitMQLLocal(mql)
    this.mediaQueryChanged(mql)
  }

  componentWillUnmount () {
    let mql = this.props.app.mql
    mql.removeListener(() => {this.mediaQueryChanged.bind(this)})
    this.props.actionInitMQLLocal(mql)
  }

  public render () {
    let content = <div />
    if (this.props.app.loadedApp) {
      content = (<div>
        <Sidebar sidebar={<SidebarContent />}
                 open={this.props.app.sidebarStatusMobile}
                 docked={this.props.app.sidebarStatus}
                 onSetOpen={this.onSetSidebarOpen.bind(this)}
                 styles={SIDEBAR_STYLE}>
          <div className="app">
            <Header />
            <AlertDialog />
            <Workarea>
              <Grid fluid style={{width: '100%', padding: '0'}}>
                {this.props.children}
              </Grid>
            </Workarea>
          </div>
        </Sidebar>
      </div>)
    }
    return (
        <div>
          <NetworkSpinner visible={this.props.app.networkActive}/>
          <MuiThemeProvider muiTheme={muiTheme}>
            {content}
          </MuiThemeProvider>
        </div>
    )
  }
}
export const App: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(AppComponent)