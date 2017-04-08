import * as React from 'react'
import * as Redux from 'redux'
import { Grid, Form, Row, Col, Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Validate, ValidateGroup } from 'react-validate'
import { I18n, Translate } from 'react-redux-i18n'
import { blue500 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import * as validator from 'validator'

import { actionRestorePassword } from '../../actions/index'

const LOGO = require('../../img/header_logo.jpg')

const STYLES = {
  floatingLabelFocusStyle: {
    color: blue500
  },
  underlineFocusStyle: {
    borderColor: blue500
  }
}

interface OwnProps {}
interface ConnectedState {
  auth: any
}
interface ConnectedDispatch {
  actionRestorePasswordLocal: (password: string) => void
}
interface OwnState {
  Email: string,
  EmailError: string,
  Errors: any[]
}

const mapStateToProps = ({auth}): ConnectedState => ({auth})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionRestorePasswordLocal: (email: string) => { dispatch(actionRestorePassword(email)) }
})

class ResPassComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  constructor (props) {
    super(props)
    this.state = {
      Email: '',
      EmailError: '',
      Errors: []
    }
  }

  fnEmail (event) { this.setState({ Email: event.target.value }) }

  fnRestorePasswordLocal () {
    this.props.actionRestorePasswordLocal(this.state.Email)
    this.setState({Email: ''})
  }

  // Validation rules
  validateEmail (value) {
    let err = this.state.Errors
    if (!validator.isEmail(value) && !validator.isEmpty(value)) {
      err.indexOf('EmailError') === -1 ? err.push('EmailError') : ''
      this.setState({EmailError: 'Invalid email', Errors: err})
    } else {
      err.indexOf('EmailError') !== -1 ? err.splice(err.indexOf('EmailError'), 1) : ''
      this.setState({EmailError: '', Errors: err})
    }
  }

  render () {
    const LOGIN_ERROR_MES_OVERALL = this.props.auth.loginErrorMesOverall
    const ERROR_CONTENT = LOGIN_ERROR_MES_OVERALL ? <div className="auth__error-messages">{LOGIN_ERROR_MES_OVERALL}</div> : ''
    const RES_PASS = (<div>
      <Image src={LOGO}
        className="auth__brand"
        responsive/>
      <Form name="res-pass-form">
        <ValidateGroup>
          <Validate validators={[this.validateEmail.bind(this)]}>
            <TextField
              name="email"
              floatingLabelFocusStyle={STYLES.floatingLabelFocusStyle}
              underlineFocusStyle={STYLES.underlineFocusStyle}
              hintText={I18n.t('RestorePass.emailLabel')}
              errorText={this.state.EmailError}
              value={this.state.Email}
              onChange={this.fnEmail.bind(this)}
              floatingLabelText={I18n.t('RestorePass.email')}
            />
          </Validate>
          <br />
        </ValidateGroup>
        {ERROR_CONTENT}
        <RaisedButton className="auth__btn"
          onClick={this.fnRestorePasswordLocal.bind(this)}
          disabled={this.state.Errors.length !== 0}
          label={I18n.t('RestorePass.restoreButton')}/>
        <div className="auth__box-nav">
          <LinkContainer
            className="text-center p-none"
            to={'/login'}>
            <Button bsStyle="link" className="blue500-color-font">
              <Translate value="RestorePass.login"/>
            </Button>
          </LinkContainer>
        </div>
      </Form>
    </div>)

    return (
      <Grid fluid className="auth res-pass">
        <Row className="auth__row">
          <Col xs={8}
            xsOffset={2}
            md={6}
            mdOffset={3}
            lg={4}
            lgOffset={4}>
            <Paper className="auth__paper"
              zDepth={1}
              children={RES_PASS}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export const ResPass: any = connect(mapStateToProps, mapDispatchToProps)(ResPassComponent)
