import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'; //Middleware para peticiones asincronas
import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducers";
import { uiReducer } from "../reducers/uiReducer";

// Los store solo reciben un reducer, asi que por escalabilidad usaremos combine reducers
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  );