import * as React from 'react'
import * as Redux from 'redux'
import {connect} from 'react-redux'
import {teal50} from 'material-ui/styles/colors'
import {I18n} from 'react-redux-i18n'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import AppsIcon from 'material-ui/svg-icons/navigation/apps'
import OverscanIcon from 'material-ui/svg-icons/action/settings-overscan'
import LanguageIcon from 'material-ui/svg-icons/action/language'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import screenfull = require('screenfull')

import {MyListItem} from '../../overall/my_list_item'
import {MyLinkNav} from '../../overall/my_link_nav'
import {actionChangeLanguage} from '../../../actions'

interface OwnProps {}
interface ConnectedState {
  app: any,
  i18n: any
}
interface ConnectedDispatch {
  actionChangeLanguageLocal: (locale: string) => void
}
interface OwnState {}

const mapStateToProps = ({app, i18n}): ConnectedState => ({app, i18n})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionChangeLanguageLocal: (locale: string) => { dispatch(actionChangeLanguage(locale)) }
})

class RightBarComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  onFullScreen () { screenfull.enabled && screenfull.toggle() }
  fnChangeLanguage (locale) { this.props.actionChangeLanguageLocal(locale) }

  public render () {
    const LANGUAGE_LIST = [
      {
        name: 'en-CA',
        label: I18n.t('Languages.en-CA')
      },
      {
        name: 'en-US',
        label: I18n.t('Languages.en-US')
      }
    ]
    let locale: any = this.props.i18n.locale
    return (
      <div className="header__right-bar">
        <IconMenu
          iconButtonElement={
            <IconButton tooltip={I18n.t('HeaderTools.labelLanguage')}>
              <LanguageIcon color={teal50}/>
            </IconButton>
          }
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          {LANGUAGE_LIST.map((obj, index) => {
            if (obj.name === locale) {
              return (
                <MenuItem className="header__language-bar_active" key={index}
                  onClick={() => this.fnChangeLanguage(obj.name)}
                  primaryText={obj.label}/>
              )
            } else {
              return (
                <MenuItem key={index} onClick={() => this.fnChangeLanguage(obj.name)}
                  primaryText={obj.label}/>
              )
            }
          })}
        </IconMenu>
        <IconButton
          onClick={this.onFullScreen.bind(this)}
          tooltip={I18n.t('HeaderTools.labelFullScreen')}>
          <OverscanIcon color={teal50}/>
        </IconButton>
        <IconMenu
          iconButtonElement={
            <IconButton
              tooltip={I18n.t('HeaderTools.labelTools')}>
              <AppsIcon color={teal50}/>
            </IconButton>
          }
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem className="user-tool__menu-item-wrap" children={
            <MyLinkNav to={'/profile'}>
              <MyListItem primaryText={I18n.t('HeaderTools.toolsMenuItemProfile')}/>
            </MyLinkNav>
          }/>
          <MenuItem className="user-tool__menu-item-wrap" children={
            <MyLinkNav to={'/settings'}>
              <MyListItem primaryText={I18n.t('HeaderTools.toolsMenuItemSettings')}/>
            </MyLinkNav>
          }/>
          <Divider />
          <MenuItem className="user-tool__menu-item-wrap" children={
            <MyLinkNav to={'/logout'}>
              <MyListItem primaryText={I18n.t('HeaderTools.toolsMenuItemLogout')}/>
            </MyLinkNav>
          }/>
        </IconMenu>
      </div>
    )
  }
}
export const RightBar: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(RightBarComponent)
