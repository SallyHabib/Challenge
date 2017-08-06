/**
 * this component is responsible for SigningUp the user
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Alert } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
 /**
     * importing the action methods that is used within this component 
     */
import { emailChanged, passwordChanged, signingUp,SignIn } from '../actions';

class SignUp extends Component {
    /**
     * this method is responsible for calling action handling the user entering his email 
     * @param {*text} this param is the text entered by user as email 
     */
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    /**
     * this method is responsible for calling action handling the user entering his passowrd 
     * @param {*text} this param is the text entered by user as his password
     */
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    /**
     * this method is responsible for calling action handling the user pressing on SignUp button
     */
    onButtonPress() {
        const { email, password } = this.props;

        this.props.signingUp({ email, password });
    }
    /**
     * this method is responsible for rendering spinner component that is responsible for showing loading 
     */
    renderSpinner() {
        if (this.props.loading) {
            return <Spinner />
        }
    }
    /**
     * this method is responsible for rendering alert for user whenever something wrong happens that is imported from react-native library  
     */
    renderAlert() {
        if (this.props.error === 'success') {
            Alert.alert(
                'Account Created Successfully',
                'You Can now Login',
                [
                   { text: 'OK', onPress: () => { this.props.SignIn();},style: 'cancel' },
                ],
                { cancelable: false }
            );
        }
        else if (this.props.error === 'failed') {
            if (this.props.email === '' || this.props.password === '') {
                Alert.alert(
                    'InComplete Info',
                    'please Complete your Info before signing up',
                    [
                        { text: 'OK', onPress: () => { } },
                    ],
                    { cancelable: false }
                );
            } else {
                Alert.alert(
                    'Account Creation failed',
                    'An internal Server error Has been occured',
                    [
                        { text: 'OK', onPress: () => { } },
                    ],
                    { cancelable: false }
                );
            }
        }
    }
    /**
     * this method is responsible for rendering this component 
     */
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secure={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderAlert()}
                <CardSection>
                    {this.renderSpinner()}
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> SignUp </Button>
                </CardSection>
            </Card>
        );
    }
}
/**
 * this method is responsible for mapping current state to props 
 */
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        signingUp,
        SignIn
    })
    (SignUp);