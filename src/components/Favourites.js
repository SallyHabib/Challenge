/**
 * This copmponent is responsible for rendering user's favourites
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView, View, Text } from 'react-native';
import ListItemFavourite from './ListItemFavourite';
import { favouritesFetch } from '../actions';
class Favourites extends Component {

    /**
     * This methos is called whenever we renders to this component , it used to call the action responsible for fetching user's favourites
     */
    componentWillMount() {
        this.props.favouritesFetch();
        this.createDataSource(this.props);
    }
    /**
     * This methos is made when we have continously changing props 
     */
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);

    }
    /**
     * This methos is responsible for creating listView
     */
    createDataSource({ favourites }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(favourites);
    }
    /**
     * this method is responsible for renderig one row of listView
     * @param {*favourite} this favourite param is only one object of favourites object(Array) of user
     */
    renderRow(favourite) {
        console.log(favourite);
        return <ListItemFavourite favourite={favourite} />
    }
    /**
     * this methos is called whenever we render this component 
     */
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
    /**
     * this method is responsible for mapping current state to props 
     */
    const mapStateToProps = state => {
      const favourites = _.map(state.favourites, (val, index) => {
        return { ...val };
    });
    return { favourites };
}


export default connect(mapStateToProps, { favouritesFetch })(Favourites);