import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';

import { Tabs, Stack } from './Components/Router.js';

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Stack />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
