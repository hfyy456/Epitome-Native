import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'
export default function Home(props) {
    redirect = () => {
        props.navigation.push('Login')
        console.log('login')
    }
    return (
        <View style={styles.container}>
            <Text h1 style={styles.text}>Epitome</Text>
            <Button
                title="Login/Regist"
                type='outline'
                buttonStyle={styles.btn}
                titleStyle={styles.btnText}
                onPress={redirect}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#437c7d",
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    btnText: {
        fontSize: 18
    },
    text: {
        color: "white",
        marginTop:-250
    },
    btn: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 25
    }
})