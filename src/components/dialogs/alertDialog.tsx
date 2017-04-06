import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {I18n} from 'react-redux-i18n'

import { actionToggleDialogAlert } from '../../actions'

interface OwnProps {}
interface ConnectedState {
  dialog: any
}
interface ConnectedDispatch {
  actionToggleDialogAlertLocal: (status?: boolean, error?: string, text?: string, where?: string) => void
}
interface OwnState {}

const mapStateToProps = ({dialog}): ConnectedState => ({dialog})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionToggleDialogAlertLocal: (status?: boolean, error?: string, text?: string, where?: string) => { dispatch(actionToggleDialogAlert(status, error, text, where)) }
})


class AlertDialogComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  onCloseConfirmDialog () { this.props.actionToggleDialogAlertLocal(false) }
  onReloadConfirmDialog () { window.location.reload() }

  render () {
    let err = this.props.dialog.dialogAlertError
    let text = this.props.dialog.dialogAlertText
    let where = this.props.dialog.dialogAlertWhere

    const actions = err ? [
      <FlatButton
        key={2}
        label={I18n.t('Buttons.Reload')}
        primary
        onTouchTap={this.onReloadConfirmDialog.bind(this)}
        />,
      <FlatButton
        key={3}
        label={I18n.t('Buttons.Close')}
        primary
        keyboardFocused
        onTouchTap={this.onCloseConfirmDialog.bind(this)}
        />
    ] : [
      <FlatButton
        key={1}
        label={I18n.t('Buttons.Reload')}
        primary
        onTouchTap={this.onReloadConfirmDialog.bind(this)}
        />,
      <FlatButton
        key={2}
        label={I18n.t('Buttons.Close')}
        primary
        keyboardFocused
        onTouchTap={this.onCloseConfirmDialog.bind(this)}
        />
    ]

    return (
      <Dialog
        title={err ? `Error ${where}` : `Info ${where}`}
        actions={actions}
        modal
        open={this.props.dialog.toggleDialogAlert}
        onRequestClose={this.onReloadConfirmDialog.bind(this)}
      >
        <Row>
          <Col xs={12}>
            {text}
          </Col>
        </Row>
      </Dialog>
    )
  }
}
export const AlertDialog: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(AlertDialogComponent)
