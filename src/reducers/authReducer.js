import { types } from "../types/types";

// const initialState = {
//   uid: 325252535,
//   name: "Miguel",
//   hobbies: [{id: 1, hobbie: "Play Footbal"}, {id: 2, hobbie: "Listen music"}]
// }

export const authReducer = ( state = {} , action ) => {

  switch ( action.type ) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      }

    case types.logout:
      return { }
  
    default:
      return state;
  }

}