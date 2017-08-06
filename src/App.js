/**
 * Importing different libraries and modules important for running application
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    /**
     * this method is called whenever app begin to run
     */
    componentWillMount() {
      var config = {
    apiKey: "AIzaSyDfDTT2cvTaTYZUWhr-i0LVT4tyUndWVR4",
    authDomain: "task-c6db7.firebaseapp.com",
    databaseURL: "https://task-c6db7.firebaseio.com",
    projectId: "task-c6db7",
    storageBucket: "task-c6db7.appspot.com",
    messagingSenderId: "475625252400"
  };
  firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers , {} , applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
