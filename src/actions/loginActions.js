// export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// export const UPDATE_PASSWORD_VALUE = 'UPDATE_PASSWORD_VALUE';
// export const UPDATE_EMAIL_VALUE = 'UPDATE_EMAIL_VALUE';

// export const actionSubmitLogin = () => ({
//       type: SUBMIT_LOGIN,
// });

// export const updateEmailValue = (value) => ({
//     type: UPDATE_EMAIL_VALUE,
//     payload: {
//         value: value,
//     }
// });

// export const updatePasswordValue = (value) => ({
//     type: UPDATE_PASSWORD_VALUE,
//     payload: {
//         value: value,
//     }
// });

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const actionLoginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
  },
});

export const UPDATE_LOGIN_FORM = "UPDATE_LOGIN_FORM";
export const updateLoginForm = (field, value) => ({
  type: UPDATE_LOGIN_FORM,
  payload: {
    field: field,
    value: value,
  },
});

export const SEND_LOGIN = "SEND_LOGIN";
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const SAVE_USER = "SAVE_USER";
export const actionSaveUser = (username, token) => ({
  type: SAVE_USER,
  payload: {
    username,
    token,
  },
});

export const LOGOUT = "LOGOUT";
export const actionLogout = () => ({ type: LOGOUT });