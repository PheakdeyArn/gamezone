import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={25}/>
                ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={25}/>
                ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-aperture" color={color} size={25}/>
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTabScreen;


  



