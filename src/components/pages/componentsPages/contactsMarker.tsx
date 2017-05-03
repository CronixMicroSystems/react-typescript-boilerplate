import * as React from 'react'
import {connect} from 'react-redux'

interface OwnProps {
  text?: string,
  lat?: number,
  lng?: number
}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {}

const mapStateToProps = null
const mapDispatchToProps = null

class MyGreatPlaceComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  render () {
    let K_WIDTH: number = 30
    let K_HEIGHT: number = 30

    let greatPlaceStyle: any = {
      position: 'absolute',
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,
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
    return (
      <div style={greatPlaceStyle}>
        {this.props.text}
      </div>)
  }
}
export const MyGreatPlace: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(MyGreatPlaceComponent)
