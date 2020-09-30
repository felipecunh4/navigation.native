import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from './Tab';
import Drawer from './Drawer';

export default (props) => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      {/* <Stack /> */}
      {/* <Tab /> */}
      <Drawer />
    </NavigationContainer>
  </SafeAreaView>
);
