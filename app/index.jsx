import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

//Themed Components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedPressable from '../components/ThemedPressable'


const home = () => {

    return (
        <ThemedView style={styles.containerCenter}>
            <ThemedLogo style={styles.logoImage}/>
            <Spacer height={20}/>

            <ThemedText title={true} style={styles.title}>AMAZING APP</ThemedText>
            <Spacer height={5}/>



            <Link href={"/about"}>
                <ThemedText>Go To About</ThemedText>
            </Link>
            <Spacer height={5}/>

            <Link href={"/login"}>
                <ThemedText>Go To Login</ThemedText>
            </Link>
            <Spacer height={5}/>
            
            <Link href={"/profile"}>
                <ThemedText>Go To Profile</ThemedText>
            </Link>
            <Spacer height={5}/>
        </ThemedView>
    )
}

export default home

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width : 100,
        height : 100,
        resizeMode: "contain"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
})