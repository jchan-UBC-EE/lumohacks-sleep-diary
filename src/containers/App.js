import React, { Component } from 'react'
import * as firebase from 'firebase'

class App extends Component {
  componentWillMount () {
    const clientData = firebase.database().ref('client')
    clientData.on('value', (snapshot) => {
      console.log(snapshot.val())
      this.setState({client: snapshot.val(), loading: false})
    })
  }

  render () {
    return (
      <div className='App'>
       Hello World
      </div>
    )
  }
}

export default App
