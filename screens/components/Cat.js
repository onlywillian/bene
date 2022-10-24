import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Cat({ cat, handleCatClick, handleTypeSwitch }) {    
    return (
        <TouchableOpacity 
            style={cat.active ? styles.catsActive : styles.cats} 
            key={Math.random()}
            onPress={() => {handleCatClick(cat.id); handleTypeSwitch(cat.cat)}}
        >
            <Text style={cat.active ? [styles.text, { color: 'white' }] : styles.text }>
                    {cat.cat.toUpperCase()}
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