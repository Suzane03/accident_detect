import React from 'react';
import { View, Text } from 'react-native';
import ShakeDetector from './ShakeDetector';

const App = () => {
  return (
    <View>
      <Text>Shake the device to detect intensity!</Text>
      <ShakeDetector />
    </View>
  );
};

export default App;
