import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({route, navigation}) {

    // const { itemId } = route.params;
    // const { otherParam } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Review Detail Screen</Text>

      <Text style={globalStyles.contextText}>Title: {route.params.title}</Text>
      <Text style={globalStyles.contextText}>Rating: {route.params.rating}</Text>
      <Text style={globalStyles.contextText}>Body: {route.params.body}</Text>

    </View>
  );
}
