import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/colors';
import Profile from '../../components/Profile';
import Create from '../../components/Create';
import Books from '../../components/Books';

const dashLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs screenOptions={{headerShown: false,
    tabBarActiveBackgroundColor : theme.tabBackground,
    tabBarInactiveBackgroundColor: theme.background,
    tabBarActiveTintColor: theme.iconActive,
    tabBarInactiveTintColor: theme.iconColor}}>

        <Tabs.Screen name='profile' options={{title: 'Profile', tabBarIcon: Profile}}/>
        <Tabs.Screen name='create' options={{title: 'Create', tabBarIcon: Create}}/>
        <Tabs.Screen name='books' options={{title: 'Pokemon', tabBarIcon: Books}}/>

    </Tabs>
  )
}

export default dashLayout

const styles = StyleSheet.create({})