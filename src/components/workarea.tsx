import * as React from 'react'
import { connect } from 'react-redux'
import * as ScrollArea from 'react-scrollbar'
import ReduxToastr from 'react-redux-toastr'

import Footer from './footer'
import GoTopBtn from './overall/go_top'
import AboutDialog from './dialogs/aboutDialog'

class Workarea extends Component {
  constructor (props) {
    super(props)
    this.state = { ScrollArea: {} }
  }

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
          onScroll={::this.onScrollChange}>
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
function mapStateToProps () { return {} }
export default connect(mapStateToProps)(Workarea)
