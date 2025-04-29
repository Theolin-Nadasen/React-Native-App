import { StyleSheet, Image, useColorScheme } from 'react-native'
import React from 'react'

const Create = () => {
    const colorScheme = useColorScheme();

    return (
        <Image style={styles.img} source={colorScheme === 'dark' ? require('../assets/img/dark-icons/create.png') : require('../assets/img/light-icons/create.png')} />
    )
}

export default Create

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})