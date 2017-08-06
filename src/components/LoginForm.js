/**
 * This component is Responsible for Signing In the user
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Alert } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
/**
 * importing the action methods that is used within this component 
 */
import { emailChanged, passwordChanged, loginUser, signUp } from '../actions';

class LoginForm extends Component {
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
     * this method is responsible for calling action handling the user pressing on login button
     */
    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
    /**
     * this method is responsible for calling action handling the user prsessing on SignUp button
     */
    onButtonSignUpPress() {
        this.props.signUp();
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
        if (this.props.error === 'Authentication Failed') {
            if (this.props.email === '' || this.props.password === '') {
                Alert.alert(
                    'InComplete Info',
                    'please Complete your Info before logging in',
                    [
                        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                    ],
                    { cancelable: false }
                );
            } else {
                if (this.props.error === 'Authentication Failed') {
                    Alert.alert(
                        'Authentication Failed',
                        'an error has been occured',
                        [
                            { text: 'OK', onPress: () => { } },
                        ],
                        { cancelable: false }
                    );
                }
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

                <CardSection>
                    {this.renderAlert()}
                </CardSection>

                <CardSection>
                    {this.renderSpinner()}
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
                </CardSection>
                <CardSection>
                    <Text style={styles.titleStyle}>
                        If You don't Have an Account Please SignUP!!
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonSignUpPress.bind(this)}> SignUP </Button>
                </CardSection>
            </Card>
        );
    }
}

/**
 * Styles used within this component
 */
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 1,
        textAlign: 'center'
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
        loginUser,
        signUp
    })
    (LoginForm);