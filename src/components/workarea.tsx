import * as React from "react";
import {connect} from "react-redux";
import ReduxToastr from "react-redux-toastr";

import {Footer} from "./footer";
import {GoTop} from "./overall/go_top";
import {AboutDialog} from "./dialogs/aboutDialog";
import ScrollArea = require("react-scrollbar");

interface OwnProps {}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {
  ScrollArea: any;
}

const mapStateToProps = null;
const mapDispatchToProps = null;

class WorkareaComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  constructor (props) {
      super(props);
      this.state = {
          ScrollArea: null
      };
  }

  onScrollChange (value) { this.setState({ScrollArea: value}); }

  render () {
    const ScrollAreaLocal = ScrollArea["default"];
    return (
      <div className="workarea-main">
        <ReduxToastr />
        <ScrollAreaLocal
          ref="ScrollArea"
          speed={0.8}
          className="workarea-main__scroll-bar"
          horizontal={false}
          onScroll={this.onScrollChange.bind(this)}>
          <div className="page-wrap workarea-main__scroll-content">
            {this.props.children}
          </div>

          <AboutDialog />
          <Footer />
        </ScrollAreaLocal>
      </div>
    );
  }
}
export const Workarea: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(WorkareaComponent);
