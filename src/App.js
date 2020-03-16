import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Users from './components/Users/Users'
import CreateUser from './components/CreateUser/CreateUser'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/create' component={CreateUser} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
