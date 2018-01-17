import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from './Home.js';
import Profile from './Profile.js';
import Tweet from './Tweet.js';

export const Stack = StackNavigator({
  Tweets: {
    screen: Home,
  },
  Tweet: {
    screen: Tweet,
  },
},{
  headerMode: 'none',
})

export const Tabs = TabNavigator({
  Home: {
    screen: Stack,
  },
  Profile: {
    screen: Profile,
  },
});
