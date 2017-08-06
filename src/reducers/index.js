import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SearchReducer from './SearchReducer';
import AfterSearchReducer from './AfterSearchReducer'
import FavouritesReducer from './FavouritesReducer'
import FavouritesFetchReducer from './FavouritesFetchReducer'
export default combineReducers({
    auth: AuthReducer,
    search: SearchReducer,
    videos: AfterSearchReducer,
    videoId: FavouritesReducer,
    favourites: FavouritesFetchReducer
});