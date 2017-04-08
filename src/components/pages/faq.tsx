import * as React from 'react'
import * as Redux from 'redux'
import {connect} from 'react-redux'
import {I18n} from 'react-redux-i18n'
import { actionChangeHeaderTitle, actionChangeNavigationBar } from '../../actions'

interface OwnProps {}
interface ConnectedState {}
interface ConnectedDispatch {
  actionChangeHeaderTitleLocal: (title: string) => void,
  actionChangeNavigationBarLocal: (list: any[]) => void
}
interface OwnState {}

const mapStateToProps = null
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionChangeHeaderTitleLocal: (title: string) => { dispatch(actionChangeHeaderTitle(title)) },
  actionChangeNavigationBarLocal: (list: any[]) => { dispatch(actionChangeNavigationBar(list)) }
})
class FAQComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  componentWillMount () {
    this.props.actionChangeHeaderTitleLocal(I18n.t('FAQPage.namePage'))
    this.props.actionChangeNavigationBarLocal([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'FAQ',
        url: ''
      }
    ])
  }

  render () {
    return (
        <div className="profilePage"/>
    )
  }
}
export const FAQ: any = connect(mapStateToProps, mapDispatchToProps)(FAQComponent)
