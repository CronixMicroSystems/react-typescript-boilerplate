import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ValidateGroup } from 'react-validate'
import { I18n } from 'react-redux-i18n'
import { Grid, Row, Col } from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TemplateInput from '../components/templateInput'

import MyGreatPlace from './componentsPages/contactsMarker'
import { fnChangeHeaderTitle, fnChangeNavigationBar } from '../../actions'
import { ValidatorError, ValidatorPhone, ValidatorMessage, ValidatorLastName, ValidatorFirstName } from '../overall/validators'

class Contacts extends Component {

  constructor (props) {
    super(props)
    this.state = {
      FirstName: '',
      LastName: '',
      Phone: '',
      Message: '',
      Errors: []
    }
  }

  componentWillMount () {
    this.props.fnChangeHeaderTitle(I18n.t('ContactsPage.namePage'))
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Contacts',
        url: ''
      }
    ])
  }

  fnFirstNameChange (value) { this.setState({FirstName: value}) }
  fnLastNameChange (value) { this.setState({LastName: value}) }
  fnPhoneChange (value) { this.setState({Phone: value}) }
  fnMessageChange (value) { this.setState({Message: value}) }

  fnSend () {}

  fnError (name, status) { this.setState({Errors: ValidatorError(name, status, this.state.Errors)}) }

  render () {
    return (
      <div className="contactPage">
        <div style={{padding: '15px 15px 0 15px', margin: '0 0 15px 0'}}>
          <Paper zDepth={1} children={
            <div style={{height: '350px'}}>
              <GoogleMap
                bootstrapURLKeys={{
                  key: 'AIzaSyBuX19LuYqiOY1v6PxSXcccczB-hXiqQv4',
                  language: 'en'
                }}
                options={{ scrollwheel: false }}
                defaultCenter={{lat: 59.938043, lng: 30.337157}}
                defaultZoom={9}>
                <MyGreatPlace lat={59.955413} lng={30.337844} text={''} /* Kreyser Avrora */ />
              </GoogleMap>
            </div>
          }/>
        </div>
        <Grid fluid>
          <Row>
            <Col className="contact-form-wrap" md={6}>
              <Paper zDepth={1} children={
                <div className="contact-form">
                  <h3 className="m-sm">Get In Touch</h3>
                  <div className="p-sm">
                    <ValidateGroup>
                      <TemplateInput
                        required
                        hintText="Enter first name"
                        name="FirstName"
                        errorText="The first name must be more than 0 and less than 64 characters long"
                        value={this.state.FirstName}
                        onChange={::this.fnFirstNameChange}
                        onError={::this.fnError}
                        fnValidator={ValidatorFirstName}
                        fullWidth/>
                      <TemplateInput
                        required
                        hintText="Enter LastName"
                        name="LastName"
                        errorText="The last name must be more than 0 and less than 64 characters long"
                        value={this.state.LastName}
                        onChange={::this.fnLastNameChange}
                        onError={::this.fnError}
                        fnValidator={ValidatorLastName}
                        fullWidth/>
                      <TemplateInput
                        required
                        hintText="Enter Phone"
                        name="Phone"
                        errorText="The Phone must be more than 6 and less than 12 characters long"
                        value={this.state.Phone}
                        onChange={::this.fnPhoneChange}
                        onError={::this.fnError}
                        fnValidator={ValidatorPhone}
                        fullWidth/>
                      <TemplateInput
                        required
                        hintText="Enter Message"
                        name="Message"
                        errorText="The Message must be more than 6 and less than 256 characters long"
                        value={this.state.LastName}
                        onChange={::this.fnMessageChange}
                        onError={::this.fnError}
                        fnValidator={ValidatorMessage}
                        multiLine
                        rows={2}
                        rowsMax={4}
                        fullWidth/>
                    </ValidateGroup>
                    <div className="p-t-sm">
                      <RaisedButton
                        disabled={this.state.Errors.length !== 0}
                        label="Send"
                        className="pull-right"
                        onClick={::this.fnSend}
                      />
                    </div>
                  </div>
                </div>
              }/>
            </Col>
            <Col className="contact-info-wrap" md={6}>
              <Paper zDepth={1} children={
                <div className="contact-info">
                  <h3 className="m-sm">Mode Info</h3>
                  <div className="p-sm contact-info-content">
                    <Row >
                      <Col lg={6}>
                        <h4>Corporate Headquarters</h4>
                        <p>Corporate Headquarters</p>
                        <p>Achieve3000</p>
                        <p>1985 Cedar Bridge Ave, Suite 3</p>
                        <p>Lakewood, NJ 08701</p>
                      </Col>
                      <Col lg={6}>
                        <h4>General Contact</h4>
                        <p>Toll-Free: 888-968-6822</p>
                        <p>Phone: 732-367-5505</p>
                        <p>Fax: 732-367-2313</p>
                        <p>Email: office@achieve3000.com</p>
                      </Col>
                    </Row>
                    <Row >
                      <Col lg={6}>
                        <h4>Sales Info & Inquiries</h4>
                        <p>Toll-Free: 800-838-8771</p>
                        <p>Email: info@achieve3000.com</p>
                      </Col>
                      <Col lg={6}>
                        <h4>International Sales</h4>
                        <p>Email: international@achieve3000.com</p>
                        <p>Phone: 732-987-3669</p>
                        <p>Schedule: Monday - Thursday 1:15 AM to 10:30 PM ET | Friday 7:30 AM to
                          10:30 PM ET</p>
                        <p><a href="">See our list of International Sales Partners</a></p>
                      </Col>
                    </Row>
                  </div>
                </div>
              }/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps, { fnChangeHeaderTitle, fnChangeNavigationBar })(Contacts)
