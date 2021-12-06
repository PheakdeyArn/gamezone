import React from 'react';
import { StyleSheet, View, Text, Button,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Home Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Home Screen,</Text>

      {/* <Button title="Review Detail" onPress={() => navigation.push("ReviewDetail")} />
      <Button title="About" onPress={() => navigation.push("About")} /> */}

        {/* ReView Detail Navigatoin Button  */}
      <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => navigation.push("ReviewDetail")} >
        <Text style={globalStyles.appButtonText} >Review Detail</Text>
      </TouchableOpacity>

        {/* About Navigatoin Button  */}
      <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => navigation.push("About")} >
        <Text style={globalStyles.appButtonText} >About</Text>
      </TouchableOpacity>

    </View>
  );
}

