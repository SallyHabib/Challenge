/**
 * this component is responsible for rendering one row "Video" to user
 */
import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Linking, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Button, Card } from './common';
/**
 * importing the action methods that is used within this component 
 */
import { addToFavourites } from '../actions';

class ListItem extends Component {
    /**
     * this method is responsible for calling action method when process to add to favourites
     */
    onButtonPress() {
        const { id, snippet } = this.props.video;
        this.props.addToFavourites({ id, snippet });
    }
    /**
     * this method is responsible for rendering this component
     */
    render() {
        var url = 'https://www.youtube.com/watch?v=' + this.props.video.id.videoId;
        var image = this.props.video.snippet.thumbnails.default.url;
        var title = this.props.video.snippet.title;
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        {title}
                    </Button>
                </CardSection>
                <CardSection>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: image }}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Add to Favourites
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
/**
  * this constant is responsible for styles used in this component
  */
const styles = {
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}
/**
  * this method is responsible for mapping current state to props 
  */
const mapStateToProps = state => {
    const { id, snippet } = state.videoId;

    return { id, snippet };
}

export default connect(mapStateToProps, { addToFavourites })(ListItem);