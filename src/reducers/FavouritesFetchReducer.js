/**
 * Importing types for Fetching Favourites results actions
 */
import {
    FAVOURITES_FETCH
} from '../actions/types';

/**
 * Intializing the intial state for fetching favourites results 
 */

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FAVOURITES_FETCH:
            return action.payload;
        default:
            return state;
    }
} 