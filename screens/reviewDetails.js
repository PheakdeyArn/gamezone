import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Review Detail Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Review Detail Screen,</Text>
      {/* <Button title="Home" onPress={() => navigation.push("Home")} />
      <Button title="About" onPress={() => navigation.push("About")} /> */}

      {/* ReView Detail Navigatoin Button  */}
      <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => navigation.goBack()} >
        <Text style={globalStyles.appButtonText} >Review Detail</Text>
      </TouchableOpacity>

        {/* About Navigatoin Button  */}
      {/* <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => navigation.push("About")} >
        <Text style={globalStyles.appButtonText} >About</Text>
      </TouchableOpacity> */}
    </View>
  );
}
