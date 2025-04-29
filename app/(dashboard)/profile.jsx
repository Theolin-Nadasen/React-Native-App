import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

const profile = () => {
  return (
    <ThemedView style={styles.containerCenter}>
      <ThemedText title={true}>Profile</ThemedText>
    </ThemedView>
  )
}

export default profile

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})