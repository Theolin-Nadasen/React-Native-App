import { Image, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors';

// Images
import DarkLogo from '../assets/img/amazing-dark.png'
import LightLogo from '../assets/img/amazing-light.png'


const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

    return (
        <Image source={logo} {...props}/>
    )
}

export default ThemedLogo