import React, { Component } from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import UpwardIcon from 'material-ui/svg-icons/navigation/arrow-upward'

class GoTop extends Component {

  handleSomeAction () { this.context.scrollArea.scrollTop() }

  render () {
    let goTopBtn = this.props.scrollArea.containerHeight < this.props.scrollArea.topPosition ? <FloatingActionButton onClick={::this.handleSomeAction}><UpwardIcon /></FloatingActionButton> : ''

    return (
      <div className="go-top-btn">
        {goTopBtn}
      </div>
    )
  }
}
GoTop.contextTypes = {
  scrollArea: React.PropTypes.object
}
export default connect()(GoTop)
