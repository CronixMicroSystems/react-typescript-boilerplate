import * as React from 'react'
import {connect} from 'react-redux'
import ScrollArea = require('react-scrollbar')
import ReduxToastr from 'react-redux-toastr'

import {Footer} from './footer'
import GoTopBtn from './overall/go_top'
import {AboutDialog} from './dialogs/aboutDialog'

interface OwnProps {}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {
  ScrollArea: {}
}

const mapStateToProps = null
const mapDispatchToProps = null

class WorkareaComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  onScrollChange (value) { this.setState({ScrollArea: value}) }

  render () {
    return (
      <div className="workarea-main">
        <ReduxToastr />
        <ScrollArea
          ref="ScrollArea"
          speed={0.8}
          className="workarea-main__scroll-bar"
          horizontal={false}
          onScroll={this.onScrollChange.bind(this)}>
          <div className="page-wrap workarea-main__scroll-content">
            {this.props.children}
          </div>
          <GoTopBtn scrollArea={this.state.ScrollArea}/>
          <AboutDialog />
          <Footer />
        </ScrollArea>
      </div>
    )
  }
}
export const Workarea: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(WorkareaComponent)
