import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';

import Tabs from './Components/Router.js';

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Tabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0b38',
  },
})
