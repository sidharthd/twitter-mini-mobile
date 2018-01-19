import React from 'react';
import { View, StyleSheet } from 'react-native';

import TweetPreview from './TweetPreview.js';

export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: this.props.navigation.state.params.tweet,
    }
  }
  static navigationOptions = ({  navigation }) => ({
    title: `Tweet by ${navigation.state.params.tweet.author}`,
  });

  render() {
    return(
      <View style={styles.container}>
        <TweetPreview text={this.state.tweet.tweet} author={this.state.tweet.author} image={this.state.tweet.image}/>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
})
