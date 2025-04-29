import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const create = () => {
  return (
    <ThemedView style={styles.containerCenter}>
      <ThemedText>create</ThemedText>
    </ThemedView>
  )
}

export default create

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})