import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white}>Open up App.js to start working on your app!</Text>
        <Text style={styles.white}>Changes you make will automatically reload.</Text>
        <Text style={styles.white}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white'
  }
});
