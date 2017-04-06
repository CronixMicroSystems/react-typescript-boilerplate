import * as React from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { teal50 } from 'material-ui/styles/colors'
import { Button } from 'react-bootstrap'
import { I18n, Translate } from 'react-redux-i18n'
import Divider from 'material-ui/Divider'
import EqualizerIcon from 'material-ui/svg-icons/social/group'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import ContactsIcon from 'material-ui/svg-icons/communication/contacts'
import FAQIcon from 'material-ui/svg-icons/action/help-outline'
import BuildingIcon from 'material-ui/svg-icons/action/build'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import AppsIcon from 'material-ui/svg-icons/navigation/more-vert'
import MailIcon from 'material-ui/svg-icons/content/mail'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ScrollArea = require('react-scrollbar')
import { ROLES } from '../data/enums'

import MyListItem from './overall/my_list_item'
import LinkNav from './overall/my_link_nav'
import { actionToggleSidebar, actionToggleMobileSidebar } from '../actions'

interface OwnProps {}
interface ConnectedState {
  app: any,
  auth: any
}
interface ConnectedDispatch {
  actionToggleSidebarLocal: (status: boolean) => void,
  actionToggleMobileSidebarLocal: (status: boolean) => void
}
interface OwnState {}

const mapStateToProps = ({app, auth}): ConnectedState => ({app, auth})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionToggleSidebarLocal: (status: boolean) => { dispatch(actionToggleSidebar(status)) },
  actionToggleMobileSidebarLocal: (status: boolean) => { dispatch(actionToggleMobileSidebar(status)) }
})

class SidebarComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  onSetSidebarToggle () {
    if (this.props.app.mql.matches) {
      this.props.actionToggleSidebarLocal(!this.props.app.sidebarStatus)
      this.props.actionToggleMobileSidebarLocal(false)
    } else {
      this.props.actionToggleSidebarLocal(false)
      this.props.actionToggleMobileSidebarLocal(!this.props.app.sidebarStatusMobile)
    }
  }

  public render () {
    let nav = null
    if (this.props.app.mql.matches) {
      nav = (<IndexLinkContainer to={'/'}>
        <Button className="brand" bsStyle="link">
          <Translate value="Sidebar.brand"/>
        </Button>
      </IndexLinkContainer>)
    } else {
      nav = (<div className="sidebar-main__wrap-mobile-brand">
        <IndexLinkContainer to={'/'}>
          <Button className="brand" bsStyle="link">
            <Translate value="Sidebar.brand"/>
          </Button>
        </IndexLinkContainer>
        <IconButton
          className="sidebar-main__toggle-slider-btn"
          onClick={this.onSetSidebarToggle.bind(this)}>
          <NavigationClose color={teal50}/>
        </IconButton>
      </div>)
    }

    let userModel = this.props.auth.userModel
    let userRole = 'Administrator'
    let userRoleId = 1

    let content = {
      mail: <LinkNav activeClassName="sidebar-main__link-active" to={'/email/'}>
        <MyListItem className="sidebar-main__link"
          primaryText={I18n.t('Sidebar.emailMenuItem')}
          leftIcon={<MailIcon color={teal50}/>}/>
      </LinkNav>,
      users: <LinkNav activeClassName="sidebar-main__link-active" to={'/users'}>
        <MyListItem className="sidebar-main__link"
          primaryText={I18n.t('Sidebar.usersMenuItem')}
          leftIcon={<EqualizerIcon color={teal50}/>}/>
      </LinkNav>,
      contacts: <LinkNav activeClassName="sidebar-main__link-active" to={'/contacts'}>
        <MyListItem className="sidebar-main__link"
          primaryText={I18n.t('Sidebar.contactsMenuItem')}
          leftIcon={<ContactsIcon color={teal50}/>}/>
      </LinkNav>
    }

    let mailContent = userRoleId === ROLES.HOW ? content.mail : ''
    let usersContent = userRoleId === ROLES.HOW ? content.users : ''
    let contactsContent = userRoleId !== ROLES.HOW ? content.contacts : ''

    return (
      <div className="sidebar-main">
        <div className="sidebar-main__brand">
          <h1 className="sidebar-main__brand-h1">
            {nav}
          </h1>
        </div>
        <div className="user-info">
          <Paper className="user-info__avatar"
            zDepth={1} circle/>
          <div className="user-info__info">
            <p>{userModel.FirstName} {userModel.LastName}</p>
            <p>{userRole}</p>
            <IconMenu
              iconButtonElement={
                <IconButton
                  tooltip={I18n.t('HeaderTools.labelTools')}>
                  <AppsIcon color={teal50}/>
                </IconButton>
              }
              className="user-info__tool-btn"
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem className="user-tool__menu-item-wrap" children={
                <LinkNav to={'/profile'}>
                  <MyListItem primaryText={I18n.t('HeaderTools.toolsMenuItemProfile')}/>
                </LinkNav>
              }/>
              <MenuItem className="user-tool__menu-item-wrap" children={
                <LinkNav to={'/settings'}>
                  <MyListItem primaryText={I18n.t('HeaderTools.toolsMenuItemSettings')}/>
                </LinkNav>
              }/>
              <Divider />
              <MenuItem className="user-tool__menu-item-wrap" children={
                <LinkNav to={'/logout'}>
                  <MyListItem primaryText={I18n.t('HeaderTools.toolsMenuItemLogout')}/>
                </LinkNav>
              }/>
            </IconMenu>
          </div>
        </div>
        <ScrollArea
          speed={0.8}
          className="sidebar-main__scroll-bar"
          contentClassName="sidebar-main__scroll-content"
          horizontal={false}
        >
          <div>
            <div className="menu-main">
              <List>
                <div className="sidebar-main__text-color">
                  <Subheader>
                    <Translate value="Sidebar.generalMenuLabel"/>
                  </Subheader>
                </div>
                {usersContent}
                {mailContent}
                <div className="sidebar-main__text-color">
                  <Subheader>
                    <Translate value="Sidebar.moreMenuLabel"/>
                  </Subheader>
                </div>
                <MyListItem
                  className="sidebar-main__text-color"
                  primaryText={I18n.t('Sidebar.settingsMenuItem')}
                  leftIcon={<SettingsIcon color={teal50}/>}
                  initiallyOpen={false}
                  primaryTogglesNestedList
                  nestedItems={[
                    <LinkNav activeClassName="sidebar-main__link-active" key={1}
                      to={'/settings'}>
                      <MyListItem className="sidebar-main__link sidebar-main__link-wrap"
                        primaryText={I18n.t('Sidebar.settingsMenuGeneral')}
                        leftIcon={<BuildingIcon color={teal50}/>}/>
                    </LinkNav>
                  ]}
                />
                {contactsContent}
                <LinkNav activeClassName="sidebar-main__link-active" to={'/faq'}>
                  <MyListItem className="sidebar-main__link"
                    primaryText={I18n.t('Sidebar.FAQMenuItem')}
                    leftIcon={<FAQIcon color={teal50}/>}/>
                </LinkNav>
              </List>
            </div>
          </div>
        </ScrollArea>
      </div>
    )
  }
}
export const SidebarContent: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent)
