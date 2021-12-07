import React from 'react';

import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutStack from './routes/AboutStack';
import MainTabScreen from './routes/MainTab';
import BookmarkStack from './routes/BookmarkStack';

import { DrawerContent } from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {

  const [fontLoaded] = useFonts({
    Nunito_Regular: require('./assets/fonts/Nunito-Regular.ttf'),
    Nunito_Bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator 

        drawerContent={props => <DrawerContent {...props}/>}
        screenOptions={{
          headerStyle:{
            backgroundColor: "#009387"
          },
          headerShown: false,
        }} 
      >
        <Drawer.Screen 
          name="HomeDrawer" 
          component={MainTabScreen} 
        />
        <Drawer.Screen 
          name="BookmarkDrawer" 
          component={BookmarkStack} 
        />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
}

