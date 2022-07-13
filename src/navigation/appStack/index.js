import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../bottomNavigation/index';
import AuthStack from '../authStack/index';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const index = () => {

    let auth = useSelector(state => state.auth)

    console.log(auth)


    if(false) {
        return <AuthStack />
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="HomeScreen" component={BottomNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index
