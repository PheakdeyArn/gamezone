import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Notification({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Notification Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Notification Screen,</Text>
    </View>
  );
}
