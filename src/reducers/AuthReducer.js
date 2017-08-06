/**
 * Intializing the intial state for Login/SignUp view 
 */
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNOUT,
    SIGNUP,
    SIGNINGUP,
    SIGNINGUP_SUCCESS,
    SIGNINGUP_FAIL,
    SIGNIN
} from '../actions/types';

/**
 * Intializing the intial state for Login/SignUp 
 */

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: '' };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', loading: false };
        case SIGNOUT:
            return INITIAL_STATE;
        case SIGNUP:
            return INITIAL_STATE;
        case SIGNINGUP:
            return { ...state, loading: true, error: '' };
        case SIGNINGUP_SUCCESS:
            return { ...state, ...INITIAL_STATE, error: 'success' };
        case SIGNINGUP_FAIL:
            return { ...state, error: 'failed', loading: false };
        case SIGNIN:
            return INITIAL_STATE;
        default:
            return state;
    }
} 