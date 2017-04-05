import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image} from 'react-bootstrap'

class MyImage extends Component {

  render () {
    let listProps = Object.assign({}, this.props)

    delete listProps.active
    delete listProps.toastr
    delete listProps.strings
    delete listProps.dispatch
    delete listProps.locale

    return <Image {...listProps} />
  }
}
export default connect()(MyImage)
