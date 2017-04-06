import * as React from 'react'
import {connect} from 'react-redux'
import {Image} from 'react-bootstrap'

interface OwnProps {
  src?: string,
  className?: string,
  responsive?: boolean
}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {}

const mapStateToProps = null
const mapDispatchToProps = null

class MyImageComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  render () {
    let listProps: any = Object.assign({}, this.props)

    delete listProps.active
    delete listProps.toastr
    delete listProps.strings
    delete listProps.dispatch
    delete listProps.locale

    return <Image {...listProps} />
  }
}
export const MyImage: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(MyImageComponent)
