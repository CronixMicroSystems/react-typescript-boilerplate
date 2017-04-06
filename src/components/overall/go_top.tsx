import * as React from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import UpwardIcon from 'material-ui/svg-icons/navigation/arrow-upward'

interface OwnProps {
  scrollArea?: any
}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {}

const mapStateToProps = ({}): ConnectedState => ({})
const mapDispatchToProps = null

class GoTopComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  handleSomeAction () { this.context.scrollArea.scrollTop() }

  render () {
    return (
      <div className="go-top-btn">
        {this.props.scrollArea.containerHeight < this.props.scrollArea.topPosition ? <FloatingActionButton onClick={this.handleSomeAction.bind(this)}><UpwardIcon /></FloatingActionButton> : ''}
      </div>
    )
  }
}
export const GoTop: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(GoTopComponent)
