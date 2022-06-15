import { LOGIN_SUCCESS, UPDATE_LOGIN_FORM, SAVE_USER, LOGOUT  } from '../actions/loginActions';
import { UPDATE_SIGNUP_FORM } from '../actions/signupActions';

const initialState = {
    email: '',
    password: '',
    isConnected: false,
    token: null,

    username: null,
    emailSignup: '',
    passwordSignup: '',
    
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // case LOGIN_SUCCESS:
        //     return {
        //       ...state,
        //       pseudo: action.payload.pseudo,
        //     };

        // case UPDATE_EMAIL_VALUE:
        //     return {
        //         ...state,
        //         email: action.payload.value,
        //     };
        // case UPDATE_PASSWORD_VALUE:
        //     return {
        //         ...state,
        //         password: action.payload.value,
        //     };
        case SAVE_USER:
            return {
              ...state,
              // user is connected,  isLogged=true
              isConnected: true,
              username: action.payload.username,
              token: action.payload.token,
              password: '', // empty password value (SECURITY)
            };
        
        case LOGOUT:
            return {
                ...state,
                isConnected: false,
                username: '',
                token: null,
                email: '',
            };

        case UPDATE_SIGNUP_FORM:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };

        case UPDATE_LOGIN_FORM:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isConnected: true,
            };

        default:
            return state;
    }
}

export default reducer;
