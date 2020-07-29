import React, { useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import service from '~/utils/fetch'
export default function Home(props) {
    function login() {
        let params = {
            username: 'admin',
            password: 'admin'
        }
        service.post('user/login', params).then(res => {
            console.log(res)
        })
    }
    useEffect(() => {
        //login()
    })
    redirect = () => {
        props.navigation.push('Welcome')
        console.log('login')
    }
    return (
        <View style={styles.out}>
            <Swiper style={styles.wrapper}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>

                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            <Button
                title="Solid Button"
                onPress={redirect}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    out: {
        height: 250,
    },
    wrapper: {
        height: 250,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})