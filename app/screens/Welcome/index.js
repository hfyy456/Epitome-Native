import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements'
import Swiper from 'react-native-swiper'

export default function Home(props) {
    redirect = () => {
        props.navigation.push('Login')
        console.log('login')
    }
    goBack = () => {
        props.navigation.pop()
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#437c7d" barStyle="light-content" />
            <View style={styles.back}>
                <Icon
                    reverse
                    name='close'
                    type='antdesign'
                    color='#437c7d'
                    onPress={goBack}
                /></View>
            <View style={styles.out}>
                <Swiper style={styles.wrapper}>
                    <View style={styles.slider}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slider}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slider}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
            <Button
                title="Login/Regist"
                type='outline'
                buttonStyle={styles.btn}
                titleStyle={styles.btnText}
                onPress={redirect}
            />
            <View style={styles.iconList}>
                <Icon
                    reverse
                    name='QQ'
                    type='antdesign'
                    color='#437c7d'
                />
                <Icon
                    reverse
                    name='wechat'
                    type='antdesign'
                    color='#437c7d'
                />
                <Icon
                    reverse
                    name='mail'
                    type='antdesign'
                    color='#437c7d'
                /></View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#437c7d",
        // justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    btnText: {
        fontSize: 18,
        color: '#437c7d'
    },
    back: {
        marginTop: -10,
        alignSelf: 'flex-start'
    },
    iconList: {
        marginTop: 20,
        flexDirection: "row"
    },
    btn: {
        backgroundColor: 'white',
        paddingHorizontal: 60,
        borderRadius: 20,
        fontSize: 25,
        marginTop: 30
    },
    out: {
        height: 300
    },
    wrapper: {
        height: 300
    },
    slider: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#437c7d'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})