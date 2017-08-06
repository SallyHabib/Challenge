/**
 * importing types of action used in this reducer that is responsible for fetching user's favourites
 */
import {
    FAVOURITES
} from '../actions/types';

const INITIAL_STATE = {
    id:null,
    snippet:null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FAVOURITES:
            return INITIAL_STATE
        default:
            return state;
    }
} 