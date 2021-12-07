import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity } from 'react-native';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import { globalStyles } from '../styles/global';


const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor: "#009387",
        },
        headerTintColor: "#fff",
        headerTitleStyle:{
          fontFamily:"Nunito_Bold",
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387"
          onPress={()=>{navigation.openDrawer()}}/>
        )
      }} 
    >
      <Stack.Screen 
        name="Home" 
        component={Home}
      />
      <Stack.Screen 
        name="ReviewDetail" 
        component={ReviewDetails} 
        options={{
          headerRight: () => (
            <TouchableOpacity 
            style={globalStyles.rightHeaderBtn} 
            onPress={() => navigation.goBack()}
            >
            <Text style={globalStyles.appButtonText} >Back</Text>
          </TouchableOpacity>
          ),}
        }
      />
    </Stack.Navigator>
  );
}

export default HomeStack;


