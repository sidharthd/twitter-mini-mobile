import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Stack from './Router.js';

export default class TweetPreview extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: this.props.image}} />
        <View style={styles.content}>
          <Text style={styles.author}>{this.props.author}</Text>
          <Text style={styles.tweet}>{this.props.text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    borderBottomColor: '#efeff4',
    borderBottomWidth: .5,
  },
  content: {
    flex: 1,
  },
  tweet: {
    fontSize: 16,
    lineHeight: 18,
  },
  author: {
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    width:50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  }
})
