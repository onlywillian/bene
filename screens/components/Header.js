import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import Back from '../../assets/icons/Arrow';
import Cat from './Cat';

export default function Header({ marketName, navigation, handleTypeSwitch }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://ceara-cientifico.herokuapp.com/mercados/categorias');
            const data = await response.json();

            setCategories(data);
        }
        getData();
    }, []);

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

    const render = ({ item }) => (
        <Cat cat={item} handleCatClick={handleCatClick} handleTypeSwitch={handleTypeSwitch}/>
    )

    function handleBackClick() {
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleBackClick}>
                    <Back style={{position: 'absolute', height: 30, width: 30, transform: [{rotate: '180deg'}]}} fill="#fff"/>
                </TouchableOpacity>
                <Text style={styles.headerText}>{ marketName }</Text>
            </View>
            <View style={styles.catsContainer}>
                <FlatList 
                    renderItem={render}
                    data={categories}
                    horizontal={true}
                />
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
        flex: 0.6,
        flexDirection: 'row',
    },
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