import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

import { url } from '../config.js';

import TweetPreview from './TweetPreview.js';
import NewButton from './NewButton.js';

export default class Home extends Component {
  static navigationOptions = ({  navigation }) => ({
    title: 'Home',
    headerRight: <Button title="Profile" onPress={() => navigation.navigate('Profile')}/>,
      headerStyle: styles.header,
  });
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.url = `${url}/api/1/tweets/`;
  }

  componentDidMount() {
    axios.get(this.url)
      .then( response => {
        console.log(response.data)
        this.setState({
          tweets: response.data.tweets,
          loading: false
        })
      }
    )
  }

  renderItem = ({item}) => {
    return(
      <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Tweet', {tweet: item})}
      >
        <View>


        <TweetPreview text={item.tweet} author={item.author} image={item.image}/>
      </View>

    </TouchableOpacity>

    )
  }

  render() {

    return(
      <View style={styles.container}>
        {
          this.state.loading?
            <ActivityIndicator size="large" style={styles.spinner} />
          :
            <FlatList
              data={this.state.tweets}
              renderItem={this.renderItem}
            />
        }

        <NewButton onPress = {() => this.props.navigation.navigate('NewTweet')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
    justifyContent: 'center',
  },
  header: {
    paddingRight: 10,
  }
})
