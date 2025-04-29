import { StyleSheet } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {

    return (
        <Stack screenOptions={{animation: 'slide_from_bottom'}}>
            <Stack.Screen name='index' options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name='about' options={{ title: 'About', headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ title: 'Auth', headerShown: false }} />
            <Stack.Screen name='(dashboard)' options={{ title: 'Dash', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})