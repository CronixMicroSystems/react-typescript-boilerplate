import * as React from 'react'

interface OwnProps {
    visible: boolean
}
interface OwnState {}
interface ConnectedState {}
interface ConnectedDispatch {}


class NetworkSpinner extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  render () {
      const styles: any = {
          display: this.props.visible ? 'flex' : 'none',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          position: 'fixed',
          top: '0',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: '99999'
      }
    return (
      <div style={styles}>
        <div className="spinlogo" style={{
          width: '100px',
          height: '100px',
          margin: '0 auto',
          border: '0px solid black',
          borderRadius: '40px',
          backgroundColor: 'rgba(185, 185, 185, 0.75)',
          backgroundImage: `url('../../images/header_logo.jpg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '70%'
        }}/>
      </div>
    )
  }
}
export default NetworkSpinner
