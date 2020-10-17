import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { removeError, setError } from "./ui";

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( ({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(removeError());
      })
      .catch( err => {
        dispatch(setError(err.message));
      })
  };
};

export const login = (uid, displayName, photoURL) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    photoURL
  }
});

export const register = (name, email, password, password2) => ({
  type: types.register,
  payload: {
    name,
    email,
    password,
    password2
  }
})

export const startRegisterWithNameEmailPassword = (name, email, password) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(login(user.uid, user.displayName));
      })
      .catch( ({ message }) => {
        dispatch(setError(message))
      } )
      
  }
}

export const startGoogleLogin = () => {
  return ( dispatch ) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then( ({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL))
      })
      .catch( ({ message }) => {
        dispatch(setError(message));
      })
  };
};