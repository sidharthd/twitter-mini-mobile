import React from 'react';
import { View, StyleSheet } from 'react-native';

import TweetPreview from './TweetPreview.js';

export default class Tweet extends React.Component {
  render() {
    const { tweet } = this.props.navigation.state.params;
    return(
      <View style={styles.container}>
        <TweetPreview text={tweet.tweet} author={tweet.author} image={tweet.image}/>
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
