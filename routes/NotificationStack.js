import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Notification from '../screens/Notification';

const Stack = createStackNavigator();


const NotificationStack = ({navigation}) => {
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
      <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
  );
}

export default NotificationStack;
