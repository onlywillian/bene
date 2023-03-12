import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import Back from '../../assets/icons/Arrow';
import Cat from './Cat';

export default function Header({ displayedName, navigation, handleTypeSwitch }) {
    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch('https://ceara-cientifico.herokuapp.com/mercados/categorias');
    //         const data = await response.json();

    //         setCategories(data);
    //     }
    //     getData();
        
    //     handleCatClick(0)
    // }, []);
    
    // function handleCatClick(id) {
    //     const newCategories = categories.map(e => {
    //         if (e.id === id) {
    //             e.active = true
    //         } else {
    //             e.active = false
    //         }

    //         return e;
    //     })
        
    //     return setCategories(newCategories);
    // }

    // const render = ({ item }) => (
    //     <Cat cat={item} handleCatClick={handleCatClick} handleTypeSwitch={handleTypeSwitch}/>
    // )

    function handleBackClick() {
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleBackClick}>
                    <Back style={{position: 'absolute', height: 30, width: 30, transform: [{rotate: '180deg'}]}} fill="#fff"/>
                </TouchableOpacity>
                <Text style={styles.headerText}>{ displayedName }</Text>
            </View>
            {/* <View style={styles.catsContainer}>
                <FlatList 
                    renderItem={render}
                    data={categories}
                    horizontal={true}
                />
            </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        backgroundColor: '#00D264',
        width: '100%',
    },
    headerText: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 50,
        
    },
    catsContainer: {
        flex: 0.6,
        minHeight: 0.5,
        flexDirection: 'row',
    },
    cats: {
        width: 100,
        minHeight: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        margin: 15
    },
    catsActive: {
        width: 100,
        minHeight: 10,
        backgroundColor: '#00D264',
        borderRadius: 50,
        margin: 15
    }
});