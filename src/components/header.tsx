import React, { Component } from 'react'
import { connect } from 'react-redux'
import { blue50 } from 'material-ui/styles/colors'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import RightBar from './overall/header/right-bar'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationOpen from 'material-ui/svg-icons/navigation/menu'
import HelpIcon from 'material-ui/svg-icons/action/help-outline'

import { fnToggleSidebar, fnToggleMobileSidebar, fnToggleDialogAbout } from '../actions'

const STYLES = { title: { cursor: 'pointer' } }

class Navigation extends Component {

  onSetSidebarToggle () {
    if (this.props.app.mql.matches) {
      this.props.fnToggleMobileSidebar(false)
      this.props.fnToggleSidebar(!this.props.app.sidebarStatus)
    } else {
      this.props.fnToggleSidebar(false)
      this.props.fnToggleMobileSidebar(!this.props.app.sidebarStatusMobile)
    }
  }

  render () {
    let button = this.props.app.sidebarStatus ? <IconButton onClick={::this.onSetSidebarToggle}><NavigationOpen /></IconButton> : <IconButton onClick={::this.onSetSidebarToggle}><NavigationOpen /></IconButton>
    const HEADER_TITLE = this.props.app.headerTitle

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
            <IconButton onClick={() => this.props.fnToggleDialogAbout(true)}>
              <HelpIcon color={blue50}/>
            </IconButton>
          </div>
        </div>
      </div>

    )
  }
}
function mapStateToProps ({app, navigationBar}) { return {app, navigationBar} }
export default connect(mapStateToProps, { fnToggleSidebar, fnToggleMobileSidebar, fnToggleDialogAbout })(Navigation)
