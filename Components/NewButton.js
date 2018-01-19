import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

export default class NewButton extends React.Component {
  render() {
    return(
      <TouchableOpacity onPress = {this.props.onPress} style={styles.container}>
        <FontAwesome name="pencil" size={32} color="white" style={styles.icon}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#4ec940',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
