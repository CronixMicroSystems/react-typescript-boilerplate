import React, {Component} from 'react'
import {connect} from 'react-redux'

class MyGreatPlace extends Component {

  constructor (props) {
    super(props)
    this.K_WIDTH = 30
    this.K_HEIGHT = 30

    this.greatPlaceStyle = {

      position: 'absolute',
      width: this.K_WIDTH,
      height: this.K_HEIGHT,
      left: -this.K_WIDTH / 2,
      top: -this.K_HEIGHT / 2,
      '-moz-transform': 'rotate(-45deg)',
      '-ms-transform': 'rotate(-45deg)',
      '-webkit-transform': 'rotate(-45deg)',
      '-o-transform': 'rotate(-45deg)',
      'transform': 'rotate(-45deg)',
      border: '3px solid #2196F3',
      borderRadius: '40px 40px 40px 0',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    }
  }

  render () {
    return (
      <div style={this.greatPlaceStyle}>
        {this.props.text}
      </div>)
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps)(MyGreatPlace)
