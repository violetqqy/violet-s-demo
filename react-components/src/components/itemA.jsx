import React from 'react'
import withTooltip from './hoc/withTooltip'

const itemA = props => {
  return (
    <div className="container">
      <button className="btn btn-primary" type="button">Tooltip A</button>

      {props.action.showTooltip && (
        <span className="badge badge-pill badge-primary ml-2">
          {props.action.content}
        </span>
      )}
    </div>
  )
}

export default withTooltip(itemA)
