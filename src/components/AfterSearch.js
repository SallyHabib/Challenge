
/**
 * This component is responsible for showing search results to user 
 */

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView, View, Text } from 'react-native';
import ListItem from './ListItem';
/**
 * importing the action methods that is used within this component 
 */
import { dataFetch } from '../actions';

class AfterSearch extends Component {
    /**
     * this method is called whenver we renders to this component 
     */
    componentWillMount() {
        this.props.dataFetch();
        this.createDataSource(this.props);
    }
    /**
     * this method is called whenver we have continously changing props
     */
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);

    }
    /**
     * This methos is responsible for creating listView
     */
    createDataSource({ videos }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(videos);
    }
     /**
     * this method is responsible for renderig one row of listView
     * @param {*video} this video param is only one object of videos object(Array) of search results
     */
    renderRow(video) {
        console.log(video);
        return <ListItem video={video} />
    }
    render() {
        console.log(this.props);

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
    const videos = _.map(state.videos, (val, index) => {
        return { ...val };
    });
    return { videos };
}


export default connect(mapStateToProps, { dataFetch })(AfterSearch);