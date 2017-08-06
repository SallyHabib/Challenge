/**
 * Importing types for Fetching search results actions
 */
import {
     DATA_FETCH
} from '../actions/types';

/**
 * Intializing the intial state for searchResults view 
 */
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
          case DATA_FETCH:
          console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
} 