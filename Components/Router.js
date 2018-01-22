import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from './Home.js';
import Profile from './Profile.js';
import Tweet from './Tweet.js';
import NewTweet from './NewTweet.js';

export const Stack = StackNavigator({
  Home: {
    screen: Home,
  },
  Tweet: {
    screen: Tweet,
  },
  Profile: {
    screen: Profile,
  },
  NewTweet: {
    screen: NewTweet,
  }
})
