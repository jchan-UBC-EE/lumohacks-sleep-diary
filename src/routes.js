import React from 'react'
import { Switch, Redirect, BrowserRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './containers/App'
import Login from './components/Login'

export const SIGN_IN = '/signin'
export const LANDING = '/'
export const HOME = '/home'
export const ACCOUNT = '/account'

const Routes = (props) => (
  <MuiThemeProvider>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path="/app/home" component={App}/>
        <Redirect from="/" to="/login"/>
        </Switch>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default Routes
