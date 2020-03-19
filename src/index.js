import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import React from 'react';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="ligth-content" backgroundColor="#7159c1" />
        <Routes />
      </>
    </NavigationContainer>
  );
}
