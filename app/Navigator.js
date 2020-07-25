import React from 'react';
import Home from './screens/Home'
import Profile from './screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
function RootTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#e91e63',
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='home' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )

}

export default function Navigator() {
    return (
        <NavigationContainer>
            <RootTabs />
        </NavigationContainer>
    )
}

