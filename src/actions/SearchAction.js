/**
 * this JS file is responsible for all action methods for search process / fetching search results/Adding some of search results to favourites
 */

/**
 * importing firebase Library that is important for signingIn and SigningUp users
 */
import firebase from 'firebase';
/**
 * importing  react-native-router-flux library that is important for navigations
 */
import { Actions } from 'react-native-router-flux';
/**
 * importing  axios library that is important for getting results from Youtube API
 */
import axios from 'axios';
/**
 * Importing types of actions that are used in Search Process
 */
import {
    WORD_CHANGED,
    SEARCH_SUCESS,
    SEARCHING,
    SIGNOUT,
    DATA_FETCH,
    FAVOURITES,
    FAVOURITES_FETCH
} from './types';

var searchWord = '';

/**
 * action handling user enters searchWord
 * @param {*SearchWord} this input is the searchWord entered by user 
 */
export const searchChanged = (text) => {
    searchWord = text;
    return {
        type: WORD_CHANGED,
        payload: text
    };
};
/**
 * this is the action handling the user pressing on search process
 * @param {*SearchWord}  this param is the search word entered by user
 */
export const search = ({ text }) => {
        return (dispatch) => {
            searchSucess(dispatch, text);
        };
};
/**
 * this is the action handling that search succeeded and render user to AfterSearch Component
 */
const searchSucess = (dispatch, text) => {
    dispatch({ type: SEARCH_SUCESS, payload: text });
    Actions.AfterSearch();
}

/**
 * this action is responsible for fetching search results for user 
 */
export const dataFetch = () => {
    return (dispatch) => {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='
            + searchWord + '&key=AIzaSyAVAyFauq8GWIRqm9dkmbkRNXdt0BzBFJw')
            .then(response => {
                dispatch({ type: DATA_FETCH, payload: response.data.items });
            })
    };
}
/**
 * this action handling when user press on add to favourites button , and add the selected video to user's faourites's array
 * @param {*id,snippet} these params are taken from selected video to be saved in Database 
 */
export const addToFavourites = ({id,snippet}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/favourites`)
            .push({id,snippet})
            .then(() => {
                dispatch({ type: FAVOURITES });
                Actions.favourites();
            });
    };
}
/**
 * this action handles rendering to user his favourites that are saved in DB
 */
export const favouritesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/favourites`).on('value', snapshot => {
            dispatch({ type: FAVOURITES_FETCH, payload: snapshot.val() })
        });

    };
};
export const favouriteDelete = ({fid}) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/favourites/${fid}`)
            .remove()
            .then(() => {
                Actions.favourites({ type: 'reset' });
            });
    };
};