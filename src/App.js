import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Users from './components/Users/Users'
import CreateUser from './components/CreateUser/CreateUser'
import DetailsUser from './components/DetailsUser/DetailsUser'
import EditUser from './components/EditUser/EditUser'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/create' component={CreateUser} />
        <Route path='/details' component={DetailsUser} />
        <Route path='/edit' component={EditUser} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
