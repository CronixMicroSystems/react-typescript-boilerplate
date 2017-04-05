import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {IndexLinkContainer} from 'react-router-bootstrap'
import MyImage from '../overall/my_image'
import MyRaisedButton from '../overall/my_raised_button'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import {I18n, Translate} from 'react-redux-i18n'

const LOGO = require('../../images/header_logo.jpg')

class NotFound extends Component {

  constructor (props) {
    super(props)

    this.muiTheme = getMuiTheme({
      palette: {
        accent1Color: deepOrange500
      }
    })
  }

  render () {
    const NOT_FOUND = (<div>
      <IndexLinkContainer to={'/'}>
        <MyImage src={LOGO}
          className="not-found__brand"
          responsive/>
      </IndexLinkContainer>
      <div>
        <h1>404</h1>
        <strong>
          <Translate value="NotFoundPage.nameError"/>
        </strong>
        <br/>
        <br/>
        <p>
          <Translate value="NotFoundPage.textError"/>
        </p>
        <br/>
        <IndexLinkContainer to={'/'}>
          <MyRaisedButton label={I18n.t('NotFoundPage.homeButton')}/>
        </IndexLinkContainer>
      </div>
    </div>)

    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <Grid fluid className="not-found">
          <Row className="not-found__row">
            <Col xs={8}
              xsOffset={2}
              md={6}
              mdOffset={3}
              lg={4}
              lgOffset={4}>
              <Paper className="not-found__paper"
                zDepth={1}
                children={NOT_FOUND}/>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    )
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps)(NotFound)
