/**
 * this component is used whenever I want to have a Spinner "Loading" in my application
 */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.SpinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};
/**
 * Style of spinner "How it looks like!"
 */
const styles ={
    SpinnerStyle:{
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center'
    }
};

export { Spinner };