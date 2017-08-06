/**
 * this component is responsible for rendering one row "Favourite Video" to user
 */
import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Linking, Image,WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
/**
  * importing the action methods that is used within this component 
  */
import { CardSection, Button, Card } from './common';
var videoId='';
class ListItemFavourite extends Component {

    /**
      * this method is responsible for rendering this component
      */
    render() {
        videoId=this.props.favourite.id.videoId;
        var url = 'https://www.youtube.com/watch?v=' + this.props.favourite.id.videoId;
        var image = this.props.favourite.snippet.thumbnails.default.url;
        var title = this.props.favourite.snippet.title;
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        {title}
                    </Button>
                </CardSection>
                <WebView  
                    source={{ html: playLink }}
                    style={styles.imageStyle}
                />
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
const playLink ='<iframe width="560" height="315" src="http://www.youtube.com/embed/"'+videoId+ 'frameborder="0"></iframe>'
export default ListItemFavourite;