import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
      screen: Home,
    },
    ReviewDetails: {
      screen: ReviewDetails,
    },

    
  };

  const Stack = createStackNavigator();
  
  // home stack navigator screens
//   const HomeStack = createStackNavigator(screens);

  const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
  
//   export default NavigationContainer(HomeStack);
  export default HomeStack;

