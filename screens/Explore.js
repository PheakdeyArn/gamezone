import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Explore({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Explore Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Explore Screen,</Text>
    </View>
  );
}