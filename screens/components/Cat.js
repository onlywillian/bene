import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Cat({ element, handleCatClick }) {    
    return (
        <TouchableOpacity 
            style={element.active ? styles.catsActive : styles.cats} 
            key={Math.random()}
            onPress={() => handleCatClick(element.id)}
        >
            <Text style={element.active ? [styles.text, { color: 'white' }] : styles.text }>
                    {element.cat.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cats: {
        width: 100,
        backgroundColor: '#ddd',
        borderRadius: 50,
        margin: 15
    },
    catsActive: {
        width: 100,
        backgroundColor: '#00D264',
        borderRadius: 50,
        margin: 15
    },
    text: {
        textAlign: 'center', 
        textAlignVertical: 'center', 
        height: '100%',
    }
});