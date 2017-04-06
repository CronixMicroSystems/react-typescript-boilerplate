import * as React from 'react'
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List'

interface OwnProps {}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {}

const mapStateToProps = null
const mapDispatchToProps = null

class ListItemsComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  render () {
    let listProps: any = Object.assign({}, this.props)

    delete listProps.active
    delete listProps.toastr
    delete listProps.strings
    delete listProps.dispatch
    delete listProps.locale

    return <ListItem {...listProps} />
  }
}
export const ListItems: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(ListItemsComponent)
