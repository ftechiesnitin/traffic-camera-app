import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import * as _ from 'lodash';

export default class homeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Camera Views',
  };

  render() {
    let trafficImages = _.get(this.props, 'navigation.state.params.trafficImages', []);
    var cards = trafficImages.length > 0
        ? trafficImages.map(function(card, index) {
          let text = "Camera: " + card.CameraID + ", Latitude: " + card.Latitude + ", Longitude: " + card.Longitude
            return (<Card key={index}>
                <CardImage source={{uri: card.ImageLink}}/>
                <CardContent text={text}/>
              </Card>);
        }): (
            <View style={styles.container}>
              <Text style={styles.white}>Loading ....</Text>
              />
            </View>
          );
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {cards}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
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
