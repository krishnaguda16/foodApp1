import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../pages/HomeScreen';
import Notifications from '../../pages/Notifications';
import Chat from '../../pages/Chat';
import Profile from '../../pages/Profile';
import Search from '../../pages/Search';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";



const Tab = createMaterialBottomTabNavigator();


const index = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            // activeColor="#e91e63"
            barStyle={{ backgroundColor: '#fff' }}
            shifting={false} 
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                tabBarLabel: 'Daily',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                tabBarLabel: 'Stores',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="fast-food" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                tabBarLabel: 'Courier',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="food-steak" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                tabBarLabel: 'Orders',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="food-croissant" color={color} size={26} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            /> */}
            
        </Tab.Navigator>
    )
}

export default index
