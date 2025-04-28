import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const login = () => {
    return (
        <>
            <ThemedView style={styles.container}>
                <ThemedLogo style={styles.LogoImage} />
                <ThemedText>Login</ThemedText>

                <ThemedView style={styles.MidArea}>
                    <TextInput placeholder='name' style={styles.InputColor} />
                    <Spacer/>
                    <TextInput placeholder='password' style={styles.InputColor} />
                </ThemedView>
            </ThemedView>
        </>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    MidArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogoImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    InputColor: {
        width: 200,
        height: 50,
        textAlign: 'center',
        backgroundColor: "#fff"
    }
})