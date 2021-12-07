import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ExploreStack from './ExploreStack';
import NotificationStack from './NotificationStack';


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#009387' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={24}/>
                ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={24}/>
                ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={24}/>
                ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStack}
                options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-aperture" color={color} size={24}/>
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTabScreen;


  



