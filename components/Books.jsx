import { StyleSheet, Image, useColorScheme } from 'react-native'

const Books = () => {
    const colorScheme = useColorScheme();

    return (
        <Image style={styles.img} source={colorScheme === 'dark' ? require('../assets/img/dark-icons/books.png') : require('../assets/img/light-icons/books.png')} />
    )
}

export default Books

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})