import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Profile({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Profile Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Profile Screen,</Text>
    </View>
  );
}