import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/itemA">itemA</Link></li>
      <li><Link to="/itemC">itemC</Link></li>
    </ul>
  )
}

export default navBar
