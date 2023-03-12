import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import Back from '../../assets/icons/Arrow';
import Cat from './Cat';

export default function Header({ displayedName, navigation, handleTypeSwitch }) {
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
        
    }
});