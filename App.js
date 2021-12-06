import React, {useState} from 'react';
import Home from './screens/home';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';


export default function App() {

  const [fontLoaded] = useFonts({
    Nunito_Regular: require('./assets/fonts/Nunito-Regular.ttf'),
    Nunito_Bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Home />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );

}

