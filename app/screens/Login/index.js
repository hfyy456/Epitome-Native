import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Button } from 'react-native-elements';
import service from '~/utils/fetch'
import Toast from 'react-native-root-toast';
import {
    Text,
    View,
    Image,
    ListView,
    TouchableNativeFeedback,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
} from 'react-native';
export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    handleLogin = () => {
        let params = {
            username: username,
            password: password
        }
        service.post('user/login', params).then(res => {
            if (res.code = 200) {
                Toast.show(res.message, { position: Toast.positions.CENTER })
                props.navigation.push('Tab')
            }


        })
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder='Username'
                value={username}
                onChangeText={text => setUsername(text)}
                leftIcon={<Icon
                    name='user'
                    size={24}
                    color='black'
                />}
            />
            <Input
                placeholder='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                leftIcon={<Icon
                    name='lock1'
                    size={24}
                    color='black'
                />}
            />
            <Button
                title="Login"
                type="solid"
                onPress={handleLogin}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tomato',
        flex: 1
    }
})