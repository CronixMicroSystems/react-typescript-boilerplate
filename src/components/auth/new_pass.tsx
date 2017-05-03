import * as React from 'react'
import * as Redux from 'redux'
import { Grid, Form, Row, Col, Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { I18n, Translate } from 'react-redux-i18n'
import { blue500 } from 'material-ui/styles/colors'
import { Validate, ValidateGroup } from 'react-validate'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import * as validator from 'validator'

import { history } from '../../store/index'
import { actionNewPassword, actionChangeToken } from '../../actions/index'

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
  actionNewPasswordLocal: (password: string) => void,
  actionChangeTokenLocal: (token: string) => void
}
interface OwnState {
  Password: string,
  PasswordError: string,
  ConfirmPassword: string,
  ConfirmPasswordError: string,
  Errors: any[]
}

const mapStateToProps = ({auth}): ConnectedState => ({auth})
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): ConnectedDispatch => ({
  actionNewPasswordLocal: (password: string) => { dispatch(actionNewPassword(password)) },
  actionChangeTokenLocal: (token: string) => { dispatch(actionChangeToken(token)) }
})

class NewPassComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  constructor (props) {
    super(props)
    this.state = {
      Password: '',
      PasswordError: '',
      ConfirmPassword: '',
      ConfirmPasswordError: '',
      Errors: []
    }
    console.log(location)
    this.props.actionChangeTokenLocal(history.getCurrentLocation().query.token)
  }

  fnPassword (event) { this.setState({Password: event.target.value}) }
  fnConfirmPassword (event) { this.setState({ ConfirmPassword: event.target.value }) }


  validateConfirmPassword () {
    let err = this.state.Errors
    if (this.state.Password !== this.state.ConfirmPassword) {
      if (err.indexOf('ConfirmPasswordError') === -1) { err.push('ConfirmPasswordError') }
      this.setState({ConfirmPasswordError: 'Passwords do not match', Errors: err})
    } else {
      if (err.indexOf('ConfirmPasswordError') !== -1) { err.splice(err.indexOf('ConfirmPasswordError'), 1) }
      this.setState({ConfirmPasswordError: '', Errors: err})
    }
  }

  fnRestorePasswordLocal () {
    this.validatePassword(this.state.Password, true)
    this.validateConfirmPassword()
    if (this.state.Errors.length === 0) {
      this.props.actionNewPasswordLocal(this.state.Password)
      this.setState({ConfirmPassword: '', Password: ''})
      history.push('/')
    }
  }

  // Validation rules
  validatePassword (value, status) {
    let err = this.state.Errors

    if (!validator.isLength(value, { min: 6, max: 64 }) && !validator.isEmpty(value)) {
      if (err.indexOf('PasswordError') === -1) { err.push('PasswordError') }
      this.setState({PasswordError: 'The Password must be more than 6 and less than 64 characters long', Errors: err})
    } else {
      if (err.indexOf('PasswordError') !== -1) { err.splice(err.indexOf('PasswordError'), 1) }
      this.setState({PasswordError: '', Errors: err})

      if (validator.isEmpty(value) && status) {
        if (err.indexOf('PasswordError') === -1) { err.push('PasswordError') }
        this.setState({PasswordError: 'The password is required and cannot be empty', Errors: err})
      }
    }
  }

  render () {
    const LOGIN_ERROR_MES_OVERALL = this.props.auth.loginErrorMesOverall
    const ERROR_CONTENT = LOGIN_ERROR_MES_OVERALL ? <div className="auth__error-messages">{LOGIN_ERROR_MES_OVERALL}</div> : ''
    const NEW_PASS = (
      <div>
        <Image src={LOGO}
          className="auth__brand"
          responsive/>
        <Form name="new-pass-form">
          <ValidateGroup>
            <Validate validators={[this.validatePassword.bind(this)]}>
              <TextField
                name="password"
                floatingLabelFocusStyle={STYLES.floatingLabelFocusStyle}
                underlineFocusStyle={STYLES.underlineFocusStyle}
                hintText={I18n.t('NewPass.passwordLabel')}
                errorText={this.state.PasswordError}
                onChange={this.fnPassword.bind(this)}
                value={this.state.Password}
                floatingLabelText={I18n.t('NewPass.password')}
                type="password"
              />
              <br />
            </Validate>
            <Validate validators={[this.validateConfirmPassword.bind(this)]}>
              <TextField
                name="password"
                floatingLabelFocusStyle={STYLES.floatingLabelFocusStyle}
                underlineFocusStyle={STYLES.underlineFocusStyle}
                hintText={I18n.t('NewPass.passwordLabelConfirm')}
                errorText={this.state.ConfirmPasswordError}
                onChange={this.fnConfirmPassword.bind(this)}
                value={this.state.ConfirmPassword}
                floatingLabelText={I18n.t('NewPass.passwordConfirm')}
                type="password"
              />
              <br />
            </Validate>
          </ValidateGroup>
          {ERROR_CONTENT}
          <RaisedButton className="auth__btn"
            onClick={this.fnRestorePasswordLocal.bind(this)}
            disabled={this.state.Errors.length !== 0}
            label={I18n.t('NewPass.changeButton')}/>
          <div className="auth__box-nav">
            <LinkContainer
              className="text-center p-none"
              to={'/login'}>
              <Button bsStyle="link" className="blue500-color-font">
                <Translate value="NewPass.login"/>
              </Button>
            </LinkContainer>
          </div>
        </Form>
      </div>
    )

    return (
      <Grid fluid className="auth registration">
        <Row className="auth__row">
          <Col xs={8}
            xsOffset={2}
            md={6}
            mdOffset={3}
            lg={4}
            lgOffset={4}>
            <Paper className="auth__paper"
              zDepth={1}
              children={NEW_PASS}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export const NewPass: any = connect(mapStateToProps, mapDispatchToProps)(NewPassComponent)
