import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class homeScreen extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.white}>Traffic Camera app will update you real time </Text>
        <Text style={styles.white}>traffic with all the images.</Text>
        <Button
          title="Go to Camera View"
          onPress={() =>
            navigate('Camera', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'black'
  }
});
