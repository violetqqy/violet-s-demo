import React from 'react'
import queryString from 'query-string'

const home = ({ location }) => {

  const parsed = queryString.parse(location.search)
  console.log(parsed)
  
  return (
    <div>
      Home
    </div>
  )
}

export default home
