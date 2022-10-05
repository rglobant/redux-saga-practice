// Constants in Redux help us in easily finding all the usages of a particular functionality across our entire project 
// Constants can be used during actions creation, and reducers (Saga if applies)

// Types
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

/**
 * Create an action item for getting user information.
 * @returns {Object} an {GET_USERS} action instance.
 */
export const getUsers = () => ({
  type: GET_USERS
});

/**
 * Create an action item for getting users information when its success.
 * @param {string} users info for the users collection.
 * @returns {Object} an {GET_USERS_SUCCESS} action instance.
 */
export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  users,
});

/**
 * Create an action item for getting users information whet its an error .
 * @param {string} error info for the users collection.
 * @returns {Object} an {GET_USERS_FAIL} action instance.
 */
export const getUsersFAIL = (error) => ({
  type: GET_USERS_FAIL,
  error,
});
