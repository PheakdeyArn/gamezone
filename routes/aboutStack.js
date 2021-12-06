import {createStackNavigator} from '@react-navigation/stack';

import About from '../screens/about';


const screens = {
    About: {
      screen: About,
      navigationOptions: {
        title: 'About GameZone'
      },
    },
}

// const AboutStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {
//       headerTintColor: '#444',
//       headerStyle: { backgroundColor: '#eee', height: 60 },
//     }
//   });

const AboutStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
);
  
