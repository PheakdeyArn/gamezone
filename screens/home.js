import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Home Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Home Screen,</Text>
    </View>
  );
}

