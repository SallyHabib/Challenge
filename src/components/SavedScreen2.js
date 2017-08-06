/**
 * this screen is responsible for the favourites page
 */
import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import { ListItemFavourite } from '../components';


const FAVOURITES = [
    { id: 1, text: 'Appartment Near GUC', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', rooms: 3, area: '140m2', price: '5000', type: 'Appartment', location: 'New Cairo' },
    { id: 2, text: 'FlatShare Near Auc', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', rooms: 2, area: '100m2', price: '5000', type: 'flatShare', location: 'New Cairo' },
    { id: 3, text: 'Appartment Near GUC', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg', rooms: 3, area: '150m2', price: '5000', type: 'Appartment', location: 'New Cairo' },
    { id: 4, text: 'FlatShare Near GUC', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg', rooms: 4, area: '1700m2', price: '5000', type: 'flatShare', location: 'New Cairo' },
    { id: 5, text: 'Appartment Near GUC', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', rooms: 1, area: '80m2', price: '5000', type: 'Appartment', location: 'New Cairo' },
    { id: 6, text: 'FlatShare Near GUC', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', rooms: 3, area: '130m2', price: '5000', type: 'flatShare', location: 'New Cairo' },
    { id: 7, text: 'FlatShare Near GUC', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg', rooms: 2, area: '110m2', price: '5000', type: 'flatShare', location: 'New Cairo' },
    { id: 8, text: 'Appartment Near GUC', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg', rooms: 1, area: '90m2', price: '5000E', type: 'Appartment', location: 'New Cairo' },
];
class SavedScreen extends Component {

    static navigationOptions = {
        header:
         
        <ElevatedView 
        elevation={1} style={{
        width: null,
        height: 100,
        marginBottom: 2,
         backgroundColor: '#191970',
    }}
        >
            <Text
                style={{
                    paddingTop: 40,
                    fontSize: 20,
                    color: '#C0C0C0'
                }}
            > Saved
      </Text>
      </ElevatedView>
    };
    componentWillMount() {
        this.createDataSource(FAVOURITES);
    }

    createDataSource() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(FAVOURITES);
    }

    renderRow(favourite) {
        console.log(favourite);
        return <ListItemFavourite favourite={favourite} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

export default SavedScreen;
