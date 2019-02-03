export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  GET_USER_FAILED: "users/get_users_success"
};

export const getUserRequest = () => {
  return {
    type: Types.GET_USERS_REQUEST
  };
};

export const getUserRequestSuccess = users => {
  return {
    type: Types.GET_USERS_SUCCESS,
    payload: {
      ...users
    }
  };
};

export const getUserRequestFailed = error => {
  return {
    type: Types.GET_USER_FAILED,
    payload: {
      users: [],
      error
    }
  };
};
