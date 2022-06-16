export const UPDATE_SIGNUP_FORM = 'UPDATE_SIGNUP_FORM';
export const updateSignupForm = (field, value) => ({
    type: UPDATE_SIGNUP_FORM,
    payload: {
        field: field,
        value: value,
    },
});

export const SEND_SIGNUP = 'SEND_SIGNUP';
export const sendSignup = () => ({
    type: SEND_SIGNUP,
});

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS,
});
