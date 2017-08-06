//This JS file is responding for handling action that is relayed to authentication 

/**
 * importing firebase Library that is important for signingIn and SigningUp users
 */
import firebase from 'firebase';

/**
 * importing  react-native-router-flux library that is important for navigations
 */
import { Actions } from 'react-native-router-flux';

/**
 * Importing types of actions in AuthReducer
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
} from './types';

/**
 * Action handling user entering his email
 */
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
/**
 * Action handling user entering his passowrd
 */

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

/**
 * Action handling user attempting to login
 */
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                loginUserFail(dispatch);
            });
    };
};

/**
 * Action handling if attempting to login user failed
 */

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
}

/**
 * Action handling if attempting to login user succeeded
 */

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    Actions.Test();
}

/**
 * Action handling if user wants to logOut 
*/

export const signOutUser = () => {
    return (dispatch) => {
        dispatch({ type: SIGNOUT });

        firebase.auth().signOut()
            .then(() => {
                Actions.login({ type: 'reset' });
            })
    }
}

/**
 * Action handling if user wants to SignUp , it is called when user presses on signUp Button
*/

export const signUp = () => {
    return (dispatch) => {
        navigateSignUpForm(dispatch);
    };
};

/**
 * Action handling navigationg to SignUp form
*/

const navigateSignUpForm = (dispatch) => {
    dispatch({ type: SIGNUP });
    Actions.SignUp();
}

/**
 * Action handling when User attempts to SignUp
*/

export const signingUp = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNINGUP });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => signingUpSuccess(dispatch))
            .catch(() => {
                signingUpFail(dispatch);
            })

    }
};

/**
 * Action handling if attempting to SignUp user succeeded
 */
const signingUpSuccess = (dispatch) => {
    dispatch({ type: SIGNINGUP_SUCCESS });
}

/**
 * Action handling when user SigningUp succeeded and now wants to login , so it calls action for navigating to LoginForm
 */
export const SignIn = () => {
    return (dispatch) => {
        navigateLoginForm(dispatch);
    };
};

/**
 * Action handling Navigating to loginForm
 */

const navigateLoginForm = (dispatch) => {
    dispatch({ type: SIGNIN });
    Actions.login({ type: 'reset' });
}

/**
 * Action handling if attempting to SignUp user Failed
 */

const signingUpFail = (dispatch) => {
    dispatch({ type: SIGNINGUP_FAIL });
}
