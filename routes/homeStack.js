import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

// const screens = {
//     Home: {
//       screen: Home,
//     },
//     ReviewDetails: {
//       screen: ReviewDetails,
//     },

    
//   };

// const Stack = createStackNavigator();

// const HomeStack = () => (
//   <Stack.Navigator>
//       <Stack.Screen options={{headerStyle: globalStyles.header}} name="Home" component={Home} />
//       <Stack.Screen name="ReviewDetail" component={ReviewDetails} />
//   </Stack.Navigator>
// );

// export default HomeStack;

const Stack = createStackNavigator();

export default  HomeStack = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};




