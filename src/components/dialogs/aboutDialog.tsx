import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {I18n} from 'react-redux-i18n'
import { fnToggleDialogAbout } from '../../actions'

class AboutDialog extends Component {

  open () { this.props.fnToggleDialogAbout(true) }
  close () { this.props.fnToggleDialogAbout() }

  render () {
    const ACTIONS = [
      <FlatButton
        key={1}
        label={I18n.t('Buttons.OK')}
        primary
        keyboardFocused
        onTouchTap={this.close.bind(this)}
      />
    ]

    return (
      <Dialog
        title="About page"
        actions={ACTIONS}
        modal
        open={this.props.dialog.toggleDialogAbout}
        onRequestClose={this.close.bind(this)}
      >
        <Row>
          <Col xs={12}>
            Description
          </Col>
        </Row>
      </Dialog>
    )
  }
}

function mapStateToProps ({dialog}) { return {dialog} }
export default connect(mapStateToProps, {fnToggleDialogAbout}, null, {withRef: true})(AboutDialog)
