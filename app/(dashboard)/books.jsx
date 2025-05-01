import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import PokemonCard from '../../components/PokemonCard'

const books = () => {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        setPokemons(response.data.results);
        response.data.results.forEach(element => {
          console.log(element.name)
        })
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);


  return (
    <ThemedView style={styles.containerCenter} safe={true}>
      {loading ? (
        <ThemedText>Loading...</ThemedText>
      )
        :
        (
          <ScrollView>
  
            {pokemons.map((element, index) => (
            <PokemonCard key={index} name={element.name}>
            </PokemonCard>
            ))}
            
          </ScrollView>
        )
      }
    </ThemedView>
  )
}

export default books

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  }
})