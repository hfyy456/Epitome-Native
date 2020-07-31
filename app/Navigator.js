import React, { useEffect } from 'react';
import Home from './screens/Home'
import Community from './screens/Community'
import Gallery from './screens/Gallery'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Welcome from './screens/Welcome'
import Regist from './screens/Regist'

import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
function RootTabs() {
    const state = useNavigationState(state => state.index)
    useEffect(() => {
        console.log(state)
    }, [state])
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#2986f7',
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='home' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Gallery" component={Gallery} options={{
                tabBarLabel: 'Gallery',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='earth' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Community" component={Community} options={{
                tabBarLabel: 'Community',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='team' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='user' color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    )

}
const Stack = createStackNavigator()
function RootStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'white', height: 40 },
        }}>
            <Stack.Screen name="Tab" component={RootTabs} options={{
                headerShown: false
            }} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Regist' component={Regist} />
            <Stack.Screen name='Welcome' component={Welcome} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )

}
export default function Navigator() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    )
}

