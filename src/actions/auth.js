import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'
import { types } from "../types/types"

export const loginWithEmailAndPassword = (email, password) => {

    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(email, password))
        }, 3500);
        

    }

}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        });
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })
