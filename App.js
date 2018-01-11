import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TweetPreview from './Components/TweetPreview.js';

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TweetPreview />
        <TweetPreview />
        <TweetPreview />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'teal',
  },
})
