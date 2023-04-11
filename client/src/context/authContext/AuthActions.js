export const loginStart = () => ({
  type: "LOGIN_START",
});
export const getIdStart = () => ({
  type: "GETID_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const getIdSuccess = (token) => ({
  type: "GETID_SUCCESS",
  payload: token,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});
export const getIdFailure = () => ({
  type: "GEIID_FAILURE",
});

//logout

export const logout = () => ({
  type: "LOGOUT",
});
