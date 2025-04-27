import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
  return (
    <ThemedView style={styles.containerCenter}>
      <ThemedText>About</ThemedText>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})