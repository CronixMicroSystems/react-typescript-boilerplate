import * as React from 'react'

class EmptyTable extends React.Component<{}, {}> {
  public render () {
    return <div className="table-com__empty-rows-view">No data</div>
  }
}
export default EmptyTable
