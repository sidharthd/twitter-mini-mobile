import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TweetPreview extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.tweet}>Hello CUSAT! I am Sidharth, here at CUSAT to introduce you guys to the super cool technology React Native. Trust me, I am excited to be here :)</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderBottomColor: 'black',
    borderBottomWidth: .2,
  },
  tweet: {
    color: 'white',
    fontSize: 16,
    lineHeight: 18,
  }
})
