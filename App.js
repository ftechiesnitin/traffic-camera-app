import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Main from './src'

const AppContainer = styled.View`
  flex: 1;
`;

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <StatusBar hidden={true} />
        <Main />
      </AppContainer>
    );
  }
}
