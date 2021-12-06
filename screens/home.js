import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText} >Home Screen</Text>
      <Text style={styles.contextText} >Hello! This is Home Screen,</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: 'Nunito_Bold',
    fontSize: 24,
  },

  contextText: {
    fontFamily: 'Nunito_Regular',
    fontSize: 14,
  },

});