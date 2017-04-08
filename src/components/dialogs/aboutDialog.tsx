import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {I18n} from 'react-redux-i18n'
import { actionToggleDialogAbout } from '../../actions'

interface OwnProps {}
interface ConnectedState {
  dialog: any
}
interface ConnectedDispatch {
  actionToggleDialogAboutLocal: (status: boolean) => void
}
interface OwnState {}

const mapStateToProps = ({dialog}): ConnectedState => ({dialog})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionToggleDialogAboutLocal: (status: boolean) => { dispatch(actionToggleDialogAbout(status)) }
})

class AboutDialogComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  close () { this.props.actionToggleDialogAboutLocal(false) }

  public render () {
    const ACTIONS = [
      <FlatButton
        key={1}
        label={I18n.t('Buttons.OK')}
        primary
        keyboardFocused
        onClick={this.close.bind(this)}
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

export const AboutDialog: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(AboutDialogComponent)
