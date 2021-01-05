import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import { routes } from './router/routes'
import renderRoutes from './router/renderRouter'

function App({ auth }) {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">
            <Button type="link">主页</Button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <Button type="link">登录</Button>
          </Link>
        </li>
        <li>
          <Link to="/backend">
            <Button type="link">Backend</Button>
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <Button type="link">Admin</Button>
          </Link>
        </li>
      </ul>
      {renderRoutes(auth, routes)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
