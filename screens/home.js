import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Home Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Home Screen,</Text>
    </View>
  );
}

