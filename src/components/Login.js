/* global localStorage */
import React, { Component } from 'react'
import { FontIcon, RaisedButton } from 'material-ui'

import { firebaseAuth } from '../containers/firebase-config'
import { loginWithGoogle } from '../util/googleAPI'

const firebaseAuthKey = 'firebaseAuthInProgress'
const appTokenKey = 'appToken'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      splashScreen: false
    }
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this)
  }

  handleGoogleLogin () {
    loginWithGoogle()
            .catch((error) => {
              alert(error)
              localStorage.removeItem(firebaseAuthKey)
            })
    localStorage.setItem(firebaseAuthKey, '1')
  }

  componentWillMount () {
    if (localStorage.getItem(appTokenKey)) {
      this.props.history.push('/app/home')
      return
    }
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log('User signed in: ', JSON.stringify(user))
        localStorage.removeItem(firebaseAuthKey)
        localStorage.setItem(appTokenKey, user.uid)
        this.props.history.push('/app/home')
      }
    })
  }

  render () {
    //console.log(firebaseAuthKey + '=' + localStorage.getItem(firebaseAuthKey))
    if (localStorage.getItem(firebaseAuthKey) === '1') return <SplashScreen />
    return <LoginPage handleGoogleLogin={this.handleGoogleLogin} />
  }
}

const iconStyles = {
  color: '#ffffff'
}

const LoginPage = ({handleGoogleLogin}) => (
  <div>
    <h1>Login</h1>
    <div>
      <RaisedButton
        label='Sign in with Google'
        labelColor={'#ffffff'}
        backgroundColor='#dd4b39'
        icon={<FontIcon className='fa fa-google-plus' style={iconStyles} />}
        onClick={handleGoogleLogin}
            />
    </div>
  </div>
)

const SplashScreen = () => (<p>Loading...</p>)
