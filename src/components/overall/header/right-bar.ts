import React, { Component } from 'react'
import { connect } from 'react-redux'
import { teal50 } from 'material-ui/styles/colors'
import { I18n } from 'react-redux-i18n'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import AppsIcon from 'material-ui/svg-icons/navigation/apps'
import OverscanIcon from 'material-ui/svg-icons/action/settings-overscan'
import LanguageIcon from 'material-ui/svg-icons/action/language'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import screenfull from 'screenfull'

import MyListItem from '../../overall/my_list_item'
import LinkNav from '../../overall/my_link_nav'
import { fnChangeLanguage } from '../../../actions'

class RightBar extends Component {

  onFullScreen () {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }

  fnChangeLanguage (locale) {
    this.props.fnChangeLanguage(locale)
  }

  render () {
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
    let {locale} = this.props.i18n
    return (
      <div className="header__right-bar">
        <IconMenu
          iconButtonElement={
            <IconButton
              style={{}}
              tooltip={I18n.t('HeaderTools.labelLanguage')}>
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
                  onClick={() => ::this.fnChangeLanguage(obj.name)}
                  primaryText={obj.label}/>
              )
            } else {
              return (
                <MenuItem key={index} onClick={() => ::this.fnChangeLanguage(obj.name)}
                  primaryText={obj.label}/>
              )
            }
          })}
        </IconMenu>
        <IconButton
          style={{}}
          onClick={::this.onFullScreen}
          tooltip={I18n.t('HeaderTools.labelFullScreen')}>
          <OverscanIcon color={teal50}/>
        </IconButton>
        <IconMenu
          iconButtonElement={
            <IconButton
              style={{}}
              tooltip={I18n.t('HeaderTools.labelTools')}>
              <AppsIcon color={teal50}/>
            </IconButton>
          }
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
    )
  }
}
function mapStateToProps ({app, i18n}) { return {app, i18n} }
export default connect(mapStateToProps, { fnChangeLanguage })(RightBar)
