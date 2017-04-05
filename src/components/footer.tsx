import React, {Component} from 'react'
import {connect} from 'react-redux'

class Footer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      version: '1.0.0'
    }
  }

  render () {
    return (
      <footer className="site-footer clear-fix">
        <div className="pull-left">Copyright © 2017</div>
        <div className="pull-right">v{this.state.version}</div>
      </footer>
    )
  }
}

function mapStateToProps () { return {} }
export default connect(mapStateToProps)(Footer)
