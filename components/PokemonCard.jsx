import { ScrollView, StyleSheet, Image, View} from 'react-native'
import React from 'react'
import ThemedView from './ThemedView'
import ThemedText from './ThemedText'

const PokemonCard = ({name}) => {
  return (
    <View style={styles.card}>
        <Image source={require('../assets/img/amazing-dark.png')} style={styles.pokelogo} />
        <ThemedText>{name}</ThemedText>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        gap: 25
        
    },
    pokelogo: {
        width: 25,
        height: 25
    }
})