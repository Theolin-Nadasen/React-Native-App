import { StyleSheet } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {

    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Home' }} />
            <Stack.Screen name='about' options={{ title: 'About', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})