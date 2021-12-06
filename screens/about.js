import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >About Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is About Screen,</Text>

      <Button title="Home" onPress={() => navigation.push("Home")} />
      <Button title="Review Detail" onPress={() => navigation.push("ReviewDetail")} />
    
    </View>
  );
}
