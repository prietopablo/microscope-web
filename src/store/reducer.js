import { LOGIN_SUCCESS, UPDATE_LOGIN_FORM } from '../actions/loginActions';

const initialState = {
    email: '',
    password: '',
    pseudo: null,
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
              ...state,
              pseudo: action.payload.pseudo,
            };

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
        
        case UPDATE_LOGIN_FORM:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };

        default:
            return state;
    }
}

export default reducer;
