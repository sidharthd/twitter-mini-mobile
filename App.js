import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';

import TweetPreview from './Components/TweetPreview.js';

export default class App extends Component {

  renderItem = ({item}) => {
    return(
      <TweetPreview text={item.tweet} author={item.author} image={item.image} />
    )
  }

  render() {
    const tweets = [
      {
        key: 1,
        tweet: 'Hello CUSAT! I am Sidharth, here at CUSAT to introduce you guys to the super cool technology React Native. Trust me, I am excited to be here :)',
        author: 'Sidharth',
        handle: 'sidharth',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 2,
        tweet: 'You either die a hero, or live long enough to see yourself become the villian.',
        author: 'Harvey',
        handle: 'harvey',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 3,
        tweet: "You don't seize the moment; the moment seizes you",
        author: 'The boy',
        handle: 'theboy',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 4,
        tweet: 'Hello CUSAT! I am Sidharth, here at CUSAT to introduce you guys to the super cool technology React Native. Trust me, I am excited to be here :)',
        author: 'Sidharth',
        handle: 'sidharth',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 5,
        tweet: 'You either die a hero, or live long enough to see yourself become the villian.',
        author: 'Harvey',
        handle: 'harvey',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 6,
        tweet: "You don't seize the moment; the moment seizes you",
        author: 'The boy',
        handle: 'theboy',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 7,
        tweet: 'Hello CUSAT! I am Sidharth, here at CUSAT to introduce you guys to the super cool technology React Native. Trust me, I am excited to be here :)',
        author: 'Sidharth',
        handle: 'sidharth',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 8,
        tweet: 'You either die a hero, or live long enough to see yourself become the villian.',
        author: 'Harvey',
        handle: 'harvey',
        image: 'http://placeimg.com/50/50/people/grayscale',
      },
      {
        key: 9,
        tweet: "You don't seize the moment; the moment seizes you",
        author: 'The boy',
        handle: 'theboy',
        image: 'http://placeimg.com/50/50/people/grayscale',
      }
    ]

    return(
      <View style={styles.container}>
        <FlatList
          data={tweets}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#0c0b38',
  },
})
