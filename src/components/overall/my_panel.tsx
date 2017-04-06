import * as React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'

interface OwnProps {
    title: string
}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {}

const mapStateToProps = null
const mapDispatchToProps = null

class PanelComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  render () {
    return <Paper zDepth={1} children={(
      <div className="my-panel">
        <h3 className="my-panel__header">{this.props.title}</h3>
        <div className="my-panel__content">{this.props.children} </div>
      </div>
    )}/>
  }
}
export const Panel: any = connect(mapStateToProps, mapDispatchToProps)(PanelComponent)
