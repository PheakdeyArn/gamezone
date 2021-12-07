import React, {useState} from 'react';
import Home from './screens/home';

import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './routes/homeStack';
import ReviewDetails from './screens/reviewDetails';
import About from './screens/about';
import { globalStyles } from './styles/global';

// import HomeStack from './routes/homeStack';
import AboutStack from './routes/aboutStack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNav({navigation}) {
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
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ReviewDetail" component={ReviewDetails} />
      </Stack.Navigator>
  );
}


function AboutStackNav({navigation}) {
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
        <Stack.Screen name="About" component={About} />
     
      </Stack.Navigator>
  );
}



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


      {/* <Stack.Navigator>
        <Stack.Screen options={{headerStyle: globalStyles.header}} name="Home" component={Home} />
        <Stack.Screen name="ReviewDetail" component={ReviewDetails} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator> */}

    <Drawer.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: "#009387"
      },
      headerShown: false,
    }} >
      <Drawer.Screen name="Home" component={HomeStackNav} />
      <Drawer.Screen name="About" component={AboutStackNav} />
    </Drawer.Navigator>


    </NavigationContainer>

    // < NavigationContainer>

    //   <HomeStack/>
    
    // </NavigationContainer>



    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>



  );

}

