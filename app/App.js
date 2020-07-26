import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './Navigator';
import store from '~/store';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

/**
 主容器
 */

//const store = configureStore();
export default function App() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}