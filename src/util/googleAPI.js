import {firebaseAuth, googleProvider} from '../containers/firebase-config'

export const loginWithGoogle = () => (firebaseAuth().signInWithRedirect(googleProvider))

export const logout = () => (firebaseAuth().signOut())
