/* eslint-disable import/no-anonymous-default-export */
// In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. 
// The action describes what happened and it is the reducer's job to return the new state based on that action
import { GET_USERS, GET_USERS_SUCCESS } from "../../actions/users-actions";


  /**
   * The initial state for the component.
   */
  const initialState = [];
  
  /**
   * Reduce the specified state into a new instance for the given action.
   * @param {Object} state the current (immutable) state.
   * @param {Object} action the action to be applied.
   * @returns {Object} a state object which will be merged into new redux state.
   */
  export default function (state = initialState, action = {}) {
    switch (action.type) {
      case GET_USERS:
        return  [ ...state ];
  
      case GET_USERS_SUCCESS:
        return [ ...action.users];
  
      default:
        return state;
    }
  }
  