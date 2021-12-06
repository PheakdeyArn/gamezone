import React, {useState} from 'react';
import Home from './screens/home';

import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './routes/homeStack';
import ReviewDetails from './screens/reviewDetails';
import About from './screens/about';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();


export default function App() {

  const [fontLoaded] = useFonts({
    Nunito_Regular: require('./assets/fonts/Nunito-Regular.ttf'),
    Nunito_Bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    // <Navigator />

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetail" component={ReviewDetails} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      {/* < HomeStack/> */}
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

  );

}

