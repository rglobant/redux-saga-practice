import { combineReducers } from "redux";

// Reducers
import usersReducer from "./users/users-reducer";

export default combineReducers({
  users: usersReducer,
});
