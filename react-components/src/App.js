import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar.jsx'
import Home from './components/home.jsx'
import ItemA from './components/itemA.jsx'
import ItemC from './components/itemC.jsx'

import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          {/* <Route path="/itemA" component={ItemA}></Route> */}
          {/* Render Props */}
          <Route path="/itemA" render={ props => <ItemA id="99" {...props} />}></Route>
          <Route path="/itemC" component={ItemC}></Route>
          <Route path="/not-found" component={Home}></Route>
          <Route path="/" component={Home}></Route>
          {/* <Route path="/" exact component={Home}></Route> */}
          {/* 重定向 from to */}
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  )
}

export default App
