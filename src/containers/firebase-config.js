import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDB276j55J4kvu9gNCR8LaLc4AbJha4CWM',
  authDomain: 'lumohacks-sleep-diary.firebaseapp.com',
  databaseURL: 'https://lumohacks-sleep-diary.firebaseio.com',
  projectId: 'lumohacks-sleep-diary',
  storageBucket: 'lumohacks-sleep-diary.appspot.com',
  messagingSenderId: '944607255435'
}

firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export default {
  config
}
