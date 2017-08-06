/**
 * Importing different libraries and modules important for running application
 */
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
/**
 * Importing different components important for navigation
 */
import LoginForm from './components/LoginForm';
import Search from './components/Search';
import AfterSearch from './components/AfterSearch';
import SignUp from './components/SignUp';
import Favourites from './components/Favourites';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="login" component={LoginForm} title="VideosApp"initial />
            <Scene key="Test" component={Search} title="Search" />
            <Scene key="AfterSearch" component={AfterSearch} title="Search results" />
            <Scene key="SignUp" component={SignUp} title="SignUp" />
            <Scene key="favourites" component={Favourites} title="Your Favourites!!" />

        </Router>
    );
}

export default RouterComponent;
