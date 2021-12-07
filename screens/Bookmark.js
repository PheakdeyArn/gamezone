import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Bookmark({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Bookmark Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Notification Screen,</Text>
    </View>
  );
}