import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {I18n} from 'react-redux-i18n'

import { fnSendReport, fnToggleDialogAlert } from '../../actions'

class AlertDialog extends Component {
  onCloseConfirmDialog () { this.props.fnToggleDialogAlert() }
  onReloadConfirmDialog () { window.location.reload() }
  onReport () { this.props.fnSendReport(`${this.props.dialog.dialogAlertWhere}  ${this.props.dialog.dialogAlertText}`) }

  render () {
    let err = this.props.dialog.dialogAlertError
    let text = this.props.dialog.dialogAlertText
    let where = this.props.dialog.dialogAlertWhere

    const actions = err ? [
      <FlatButton
        key={1}
        label={I18n.t('Buttons.Report')}
        primary
        onTouchTap={::this.onReport}
        />,
      <FlatButton
        key={2}
        label={I18n.t('Buttons.Reload')}
        primary
        onTouchTap={::this.onReloadConfirmDialog}
        />,
      <FlatButton
        key={3}
        label={I18n.t('Buttons.Close')}
        primary
        keyboardFocused
        onTouchTap={::this.onCloseConfirmDialog}
        />
    ] : [
      <FlatButton
        key={1}
        label={I18n.t('Buttons.Reload')}
        primary
        onTouchTap={::this.onReloadConfirmDialog}
        />,
      <FlatButton
        key={2}
        label={I18n.t('Buttons.Close')}
        primary
        keyboardFocused
        onTouchTap={::this.onCloseConfirmDialog}
        />
    ]

    return (
      <Dialog
        title={err ? `Error ${where}` : `Info ${where}`}
        actions={actions}
        modal
        open={this.props.dialog.toggleDialogAlert}
        onRequestClose={::this.onReloadConfirmDialog}
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

function mapStateToProps ({dialog}) { return {dialog} }
export default connect(mapStateToProps, { fnSendReport, fnToggleDialogAlert }, null, {withRef: true})(AlertDialog)
