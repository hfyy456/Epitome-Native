import React, { useState, useRef, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Button } from 'react-native-elements';
import service from '~/utils/fetch'
import Toast from 'react-native-root-toast';

import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native';
import md5 from 'blueimp-md5'
import { useNavigation } from '@react-navigation/native';

export default function Regist() {
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    handleRegist = () => {
        setLoading(true)
        let params = {
            username: username,
            password: md5(password),
            email: email
        }
        console.log(params)
        service.post('user/regist', params).then(res => {
            if (res.code === 20000) {
                console.log(res)
                Toast.show(res.message, { position: Toast.positions.CENTER })
                props.navigation.push('Tab')
            } else {
                console.log(res)
                Toast.show(res.message, { position: Toast.positions.CENTER })
            }
            setLoading(false)
        })
    }
    goRegist = () => {
        navigation.push('Regist')
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Input
                placeholder='Username'
                value={username}
                containerStyle={styles.input}
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
                containerStyle={styles.input}
                onChangeText={text => setPassword(text)}
                leftIcon={<Icon
                    name='lock1'
                    size={24}
                    color='black'
                />}
            />
            <Input
                placeholder='E-mail'
                value={email}
                secureTextEntry={true}
                containerStyle={styles.input}
                onChangeText={text => setEmail(text)}
                leftIcon={<Icon
                    name='mail'
                    size={24}
                    color='black'
                />}
            />
            <Button
                title="Confirm"
                type="outline"
                titleStyle={styles.btnText}
                buttonStyle={styles.btn}
                onPress={handleRegist}
                loading={loading}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 20
    },
    input: {
        paddingHorizontal: 40
    },
    btnText: {
        fontSize: 18,
        color: 'white'
    },
    btn: {
        backgroundColor: '#437c7d',
        marginHorizontal: 60,
        borderRadius: 20,
        fontSize: 25,
        marginTop: 30
    }
})