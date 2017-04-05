import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'

class Panel extends Component {
  render () {
    const TITLE = this.props.title
    const CONTENT = (
      <div className="my-panel">
        <h3 className="my-panel__header">{TITLE}</h3>
        <div className="my-panel__content">{this.props.children} </div>
      </div>
    )
    return <Paper zDepth={1} children={CONTENT}/>
  }
}
export default connect()(Panel)
