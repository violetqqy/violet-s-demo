import React from 'react'
import WithTooltip from './rp/withTooltip'

const itemC = props => {
  return (
    <div className="container">
      {/* <WithTooltip render={({ showTooltip, content}) => (
        <>
          <button className="btn btn-primary" type="button">Tooltip C</button>
          {showTooltip && (
            <span className="badge badge-pill badge-primary ml-2">
              {content}
            </span>
          )}
        </>
      )}/> */}
      <WithTooltip>
        {({ showTooltip, content}) => (
          <>
            <button className="btn btn-primary" type="button">Tooltip C</button>
            {showTooltip && (
              <span className="badge badge-pill badge-primary ml-2">
                {content}
              </span>
            )}
          </>
        )}
      </WithTooltip>
    </div>
  )
}

export default itemC
