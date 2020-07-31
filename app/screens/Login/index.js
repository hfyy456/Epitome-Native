import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Button, Text } from 'react-native-elements';
import service from '~/utils/fetch'
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    StyleSheet,
    StatusBar,
    CheckBox
} from 'react-native';
import md5 from 'blueimp-md5'

export default function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [usrMsg, setUsrMsg] = useState('')
    const [pwdMsg, setPwdMsg] = useState('')
    const usr = useRef()
    const pwd = useRef()
    function doCheck() {
        if (!username || username.length < 6 || username.length > 16) {
            setUsrMsg('Username should be between 6-16.')
            usr.current.focus()
            return false
        } else if (!password || password.length < 6 || password.length > 16) {
            setPwdMsg('Password should be between 6-16.')
            pwd.current.focus()
            return false
        }
        return true
    }
    handleLogin = () => {
        const validation = doCheck()
        if (validation) {
            setLoading(true)
            let params = {
                username: username,
                password: md5(password)
            }
            console.log(params)
            service.post('user/login', params).then(res => {
                if (res.code === 20000) {
                    console.log(res)
                    Toast.show(res.message, { position: Toast.positions.CENTER })
                    navigation.push('Tab')
                } else {
                    console.log(res)
                    Toast.show(res.message, { position: Toast.positions.CENTER })
                }
                setLoading(false)
            })
        }
    }
    usrChange = (text) => {
        if (text.length >= 6) {
            setUsrMsg('')
        }
        setUsername(text)
    }
    pwdChange = (text) => {
        if (text.length >= 6) {
            setPwdMsg('')
        }
        setPassword(text)
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
                ref={usr}
                containerStyle={styles.input}
                errorMessage={usrMsg}
                onChangeText={usrChange}
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
                ref={pwd}
                errorMessage={pwdMsg}
                containerStyle={styles.input}
                onChangeText={pwdChange}
                leftIcon={<Icon
                    name='lock1'
                    size={24}
                    color='black'
                />}
            />
            <Button
                title="Login"
                type="outline"
                titleStyle={styles.btnText}
                buttonStyle={styles.btn}
                onPress={handleLogin}
                loading={loading}
            />
            <View>
                <Button
                    title="Regist"
                    type="outline"
                    titleStyle={{ color: '#437c7d' }}
                    buttonStyle={styles.textBtn}
                    onPress={goRegist}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 40
    },
    input: {
        paddingHorizontal: 40
    },
    btnText: {
        fontSize: 18,
        color: 'white'
    },
    textBtn: {
        marginHorizontal: 70,
        fontSize: 25,
        marginTop: 15,
        borderColor: "#437c7d"

    },
    btn: {
        backgroundColor: '#437c7d',
        marginHorizontal: 70,
        fontSize: 25,
        marginTop: 20,
        borderColor: "#437c7d"

    }
})