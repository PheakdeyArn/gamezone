import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Review Detail Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Review Detail Screen,</Text>
    </View>
  );
}
