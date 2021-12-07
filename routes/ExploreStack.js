import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from '../screens/Explore';

const Stack = createStackNavigator();


const ExploreStack = ({navigation}) => {
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
      <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator>
  );
}


export default ExploreStack;