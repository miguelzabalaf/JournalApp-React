/*
  {
    notes: [],
    active: null or
    active: {
      id: '428rh38r38frt',
      title: '',
      body: '',
      imageUrl: '',
      date: 2342424
    }
  }
*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = ( state = initialState, action ) => {
  switch (action.type) {

    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }

      case types.notesLoad:
        return {
          ...state,
          notes: [...action.payload]
        }

    default:
      return state;
  }
} 