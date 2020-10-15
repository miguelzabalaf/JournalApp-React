import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(email, password));
    }, 3000);
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
});

export const startGoogleLogin = () => {
  return ( dispatch ) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then( ({ user }) => {
        console.log("User credentials:", user);
        dispatch(login(user.uid, user.displayName))
      })
      .catch( err => {
        console.log(err)
      })
  };
};