import { StyleSheet, Image, useColorScheme } from 'react-native'
import React from 'react'

const Profile = () => {
    const colorScheme = useColorScheme();

    return (
        <Image style={styles.img} source={colorScheme === 'dark' ? require('../assets/img/dark-icons/profile.png') : require('../assets/img/light-icons/profile.png')} />
    )
}

export default Profile

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})