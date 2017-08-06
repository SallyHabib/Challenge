/**
 * this component is responsible for search view where user enters his searchword
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Alert } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
    /**
     * importing the action methods that is used within this component 
     */
import { search, searchFailed, searchSucess, searchChanged, signOutUser, dataFetch } from '../actions';

class Search extends Component {

    /**
     * this method is responsible for calling action handling the user pressing on search button
     */

    onButtonSearchPress() {
        const { text } = this.props;

        this.props.search({ text });
    }

    /**
     * this method is responsible for calling action handling the user pressing on view my favourites
     */

    onButtonFavouritesPress() {
        Actions.favourites();
    }

    /**
     * this method is responsible for calling action handling the user entering his searchword 
     * @param {*text} this param is the text entered by user as His searchWord
     */

    onSearch(text) {
        this.props.searchChanged(text);
    }

    /**
     * this method is responsible for calling action handling the user pressing on logout button
     */
    onButtoLogoutnPress() {
        Alert.alert(
            'CONFIRM !',
            'Are you sure you want to LOGOUT ?!',
            [
                { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                { text: 'LogOut', onPress: () => { this.props.signOutUser(); }, style: 'cancel' },
            ],
            { cancelable: false }
        );

    }
    /**
     * this method is responsible for rendering this component 
     */
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Search"
                        placeholder="enter search here"
                        onChangeText={this.onSearch.bind(this)}
                        value={this.props.textWord}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonSearchPress.bind(this)}> Search</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonFavouritesPress.bind(this)} style={styles.buttonStyle}> View Your Favourites</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtoLogoutnPress.bind(this)} style={styles.buttonStyle}> Logout</Button>
                </CardSection>
            </Card>
        );
    }
}
    /**
     * this constant is responsible for styles used in this component
     */
const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#009a8f',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'flex-end',
    }

}
    /**
      * this method is responsible for mapping current state to props 
      */
const mapStateToProps = ({ search }) => {
    const { textWord, loading, error } = search;

    return { textWord, loading, error };
};
export default connect(mapStateToProps,
    {
        search, searchFailed, searchSucess, searchChanged, signOutUser, dataFetch
    })
    (Search);