import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as cfg from 'config';

export default class homeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trafficImages: [],
      title: 'Traffic Camera app will update you real time'
    }

    this.getTrafficCameras = this.getTrafficCameras.bind(this);
  }

  getTrafficCameras () {
    fetch(cfg.apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(res => {
      const { navigate } = this.props.navigation;
      if(res.length > 0) navigate('Camera', { trafficImages: res })
    }).catch(e => {
      console.log('error',e);
    });
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white}>Traffic Camera app will update you real time </Text>
        <Text style={styles.white}>traffic with all the images.</Text>
        <Button
          title="Go to Camera View"
          onPress={() =>
            this.getTrafficCameras()
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
