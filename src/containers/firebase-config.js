import * as firebase from 'firebase'

const config = {
}

firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export default {
  config
}
