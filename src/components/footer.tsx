import * as React from 'react'
import {connect} from 'react-redux'

interface OwnProps {}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {
  version: string
}

const mapStateToProps = null
const mapDispatchToProps = null

class FooterComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  constructor(props) {
    super(props)
    this.state = {
      version: '1.0.0'
    }
  }

  public render() {
    return (
      <footer className="site-footer clear-fix">
        <div className="pull-left">Copyright © 2017</div>
        <div className="pull-right">v{this.state.version}</div>
      </footer>
    )
  }
}

export const Footer: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(FooterComponent)
