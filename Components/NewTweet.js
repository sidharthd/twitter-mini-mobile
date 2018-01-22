import React from 'react';

import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

import { url } from '../config.js';

export default class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.maxlength = 140;
    this.state = {
      tweet: '',
      tweetLengthPercent: 0,
      posting: false,
    }
    this.url = `${url}/api/1/post-tweet/`;
  }
  updateTweet = (text) => {
    this.setState({
      tweet: text,
      tweetLengthPercent: (text.length/this.maxlength)*100,
    })
  }

  postTweet = () => {
    this.setState({
      posting: true,
    })
    axios.post(this.url, {
      tweet: this.state.tweet
    }).then((response) => this.props.navigation.goBack())
    .catch((error) => console.error(error))
  }

  render() {
    styles = StyleSheet.create({
      container: {
        padding: 50,
        backgroundColor: 'white',
        flex: 1,
      },
      input: {
        fontSize: 20,
        marginBottom: 20,
      },
      tweetLengthBackground: {
        height: 1,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 20,
      },
      tweetLengthBar: {
        width: `${this.state.tweetLengthPercent}%`,
        flex: 1,
        backgroundColor: 'green',
      }
    })



    return(
      <View style={styles.container}>
        {this.state.posting?
          <ActivityIndicator size='large' />:

          <View>
            <TextInput placeholder="What's happening?" multiline={true} underlineColorAndroid="transparent" maxLength={this.maxlength}
              style={styles.input}
              onChangeText={this.updateTweet}
            />
            <View style={styles.tweetLengthBackground}>
              <View style={styles.tweetLengthBar}/>
            </View>
            <Button title='Tweet!' onPress={this.postTweet}/>
          </View>
        }

      </View>
    )
  }
}
