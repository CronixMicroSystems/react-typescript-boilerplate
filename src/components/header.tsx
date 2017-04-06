import * as React from 'react'
import { connect } from 'react-redux'
import { blue50 } from 'material-ui/styles/colors'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import RightBar from './overall/header/right-bar'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationOpen from 'material-ui/svg-icons/navigation/menu'
import HelpIcon from 'material-ui/svg-icons/action/help-outline'
import { actionToggleSidebar, actionToggleMobileSidebar, actionToggleDialogAbout } from '../actions'

const STYLES = { title: { cursor: 'pointer' } }

interface OwnProps {}
interface ConnectedState {
  app: any,
  navigationBar: any
}
interface ConnectedDispatch {
  actionToggleSidebarLocal: (status: boolean) => void,
  actionToggleMobileSidebarLocal: (status: boolean) => void,
  actionToggleDialogAboutLocal: (status: boolean) => void
}
interface OwnState {}

const mapStateToProps = ({app, navigationBar}): ConnectedState => ({app, navigationBar})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionToggleSidebarLocal: (status: boolean) => { dispatch(actionToggleSidebar(status)) },
  actionToggleMobileSidebarLocal: (status: boolean) => { dispatch(actionToggleMobileSidebar(status)) },
  actionToggleDialogAboutLocal: (status: boolean) => { dispatch(actionToggleDialogAbout(status)) }
})

class NavigationComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  onSetSidebarToggle () {
    if (this.props.app.mql.matches) {
      this.props.actionToggleMobileSidebarLocal(false)
      this.props.actionToggleSidebarLocal(!this.props.app.sidebarStatus)
    } else {
      this.props.actionToggleSidebarLocal(false)
      this.props.actionToggleMobileSidebarLocal(!this.props.app.sidebarStatusMobile)
    }
  }

  render () {
    let button = this.props.app.sidebarStatus ? <IconButton onClick={this.onSetSidebarToggle.bind(this)}><NavigationOpen /></IconButton> : <IconButton onClick={this.onSetSidebarToggle.bind(this)}><NavigationOpen /></IconButton>
    const HEADER_TITLE: string = this.props.app.headerTitle

    let titleContent = <span style={STYLES.title}>{HEADER_TITLE}</span>
    return (
      <div>
        <AppBar
          className="header-main"
          title={titleContent}
          iconElementLeft={button}
          iconElementRight={<RightBar />}
        />
        <div className="header-navigation-bar">
          {this.props.navigationBar.navigationBar.map((obj, index) => {
            if (obj.url !== '') {
              if (index + 1 < this.props.navigationBar.navigationBar.length) {
                return (
                  <div key={index}>
                    <LinkContainer
                      className="p-none blue50-color-font"
                      to={`${obj.url}`}>
                      <Button bsStyle="link">
                        {obj.name}
                      </Button>
                    </LinkContainer>
                    <span className="m-l-sm m-r-sm">/</span>
                  </div>
                )
              } else {
                return (
                  <div key={index}>
                    <LinkContainer
                      className="p-none blue50-color-font"
                      to={`${obj.url}`}>
                      <Button bsStyle="link">
                        {obj.name}
                      </Button>
                    </LinkContainer>
                  </div>
                )
              }
            } else {
              if (index + 1 < this.props.navigationBar.navigationBar.length) {
                return (
                  <div key={index}>
                    <span className="blue50-color-font p-none">
                      {obj.name}
                    </span>
                    <span className="m-l-sm m-r-sm">/</span>
                  </div>
                )
              } else {
                return (
                  <div key={index}>
                    <span className="blue50-color-font p-none">
                      {obj.name}
                    </span>
                  </div>
                )
              }
            }
          })}

          <div className="header-navigation-bar__help-btn">
            <IconButton onClick={() => this.props.actionToggleDialogAboutLocal(true)}>
              <HelpIcon color={blue50}/>
            </IconButton>
          </div>
        </div>
      </div>

    )
  }
}
export const Navigation: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)
