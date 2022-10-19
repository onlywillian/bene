import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Back from '../../assets/icons/Arrow';

export default function Header({ marketName, navigation }) {
    const [categories, setCategories] = useState([
        {
            id: 1,
            active: true,
            cat: 'Todos',
        },
        {
            id: 2,
            active: false,
            cat: 'Açucar',
        },
        {
            id: 3,
            active: false,
            cat: 'Feijão',
        },
        {
            id: 4,
            active: false,
            cat: 'Arroz',
        },
    ]);

    function handleCatClick(id) {
        const newCategories = categories.map(e => {
            if (e.id === id) {
                e.active = true
            } else {
                e.active = false
            }

            return e;
        })

        return setCategories(newCategories);
    }

    function handleBackClick() {
        navigation.back()
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headerText}>{ marketName }</Text>
            </View>
            <View style={styles.catsContainer}>
                {categories.map(element => (
                    <TouchableOpacity 
                        style={element.active ? styles.catsActive : styles.cats} 
                        key={Math.random()}
                        onPress={() => handleCatClick(element.id)}
                    >
                        <Text style={element.active ? [styles.text, { color: 'white' }] : styles.text }>
                                {element.cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00D264',
        width: '100%',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 50,
        marginTop: 20,
    },
    catsContainer: {
        flex: 0.5,
        flexDirection: 'row',
    },
    cats: {
        flex: 1,
        backgroundColor: '#ddd',
        borderRadius: 50,
        margin: 15
    },
    catsActive: {
        flex: 1,
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