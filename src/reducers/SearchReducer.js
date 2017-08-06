/**
 * Importing types for search actions
 */
import {
    WORD_CHANGED,
    SIGNOUT,
    SEARCH_SUCESS,
    SEARCH_FAILED,
    SEARCHING
} from '../actions/types';

/**
 * Intializing the intial state for search view 
 */
const INITIAL_STATE = {
    textWord: '',
    loading: false,
    error: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WORD_CHANGED:
            return { ...state, textWord: action.payload, error: '', loading: false };
        case SEARCH_SUCESS:
            return { INITIAL_STATE, loading: false, textWord: '' };
        case SEARCHING:
            return { ...state, loading: true, error: '' };
        case SEARCH_FAILED:
            return { ...state, error: 'Search Failed', loading: false };
        default:
            return state;
    }
} 