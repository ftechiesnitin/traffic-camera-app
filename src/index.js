import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from 'components/screens/homeScreen';
import CameraView from 'components/screens/cameraView';

const HomeStackNavigator = StackNavigator(
  {
    Main: { screen: HomeScreen },
    Camera: { screen: CameraView }
  },
  {
    initialRouteName: 'Main'
  },
);

export default HomeStackNavigator;
