import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List'

class ListItems extends Component {

  render () {
    let listProps = Object.assign({}, this.props)

    delete listProps.active
    delete listProps.toastr
    delete listProps.strings
    delete listProps.dispatch
    delete listProps.locale

    return <ListItem {...listProps} />
  }
}
export default connect()(ListItems)
