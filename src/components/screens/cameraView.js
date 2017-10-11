import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class homeScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log('heyyyy', this.props);
  }

  static navigationOptions = {
    title: 'Camera Views',
  };

  render() {
    console.log('helllllll');
    return (
      <View style={styles.container}>
        <Text style={styles.red}>This is a camera view!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  red: {
    color: 'red'
  }
});
