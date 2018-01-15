import React from 'react';

import { TabNavigator } from 'react-navigation';

import Home from './Home.js';
import Profile from './Profile.js';

const Tabs = TabNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});

export default Tabs;
