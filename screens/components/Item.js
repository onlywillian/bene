import { StyleSheet, View, Text, Image } from 'react-native';

export default function Item({ marca, peso, preco, tipo, img }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.image}>
                <Image 
                    style={{ height: '100%' }} 
                    source={{uri: typeof img == 'string' ? img : img[1]}}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>{tipo.toUpperCase()}</Text>
                <Text style={styles.text}>MARCA: {marca?.toUpperCase()}</Text>
                <Text style={styles.text}>PESO: {peso}</Text>

                <Text style={{fontSize: 35, fontWeight: 'bold'}}>R$ {preco}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 150,
        borderWidth: 1,
        width: '90%',
        marginVertical: 20,
        alignSelf: 'center',
        padding: 20,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        height: '100%',
        
    },
    item: {
        flex: 2,
        marginLeft: 15,
    },
    text: {
        fontSize: 16
    },
    noImage: {
        backgroundColor: '#fff',
        height: '100%',
    }
});