import { StyleSheet, Pressable } from 'react-native'
import React from 'react'

const ThemedPressable = ({style, ...props}) => {
  return (
    <Pressable style={({pressed}) => [styles.btn, pressed && styles.btnPressed, style]} {...props}/>
  )
}

export default ThemedPressable

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#AE1DBC',
        borderRadius: 16,
        padding: 10
    },
    btnPressed:{
        backgroundColor: '#8F199A'
    }
})