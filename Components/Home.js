import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';

import TweetPreview from './TweetPreview.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          key: 1,
          tweet: 'Hello! I am Sidharth, here at CUSAT to introduce you guys to the super cool technology React Native. Trust me, I am excited to be here :)',
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
      ]
    }
  }

  renderItem = ({item}) => {
    return(
      <TweetPreview text={item.tweet} author={item.author} image={item.image} />
    )
  }

  render() {

    return(
      <View>
        <FlatList
          data={this.state.tweets}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
})
