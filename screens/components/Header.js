import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Back from '../../assets/icons/Arrow';
import Blob from '../../assets/icons/Blob';
import Leaf from '../../assets/icons/Leaf';

export default function Header({ displayedName, navigation }) {
    function handleBackClick() {
        console.log('hello');
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.container}>
                <Blob style={{position: 'absolute', height: 250, width: 300, top: -150, left: -120}} />
                <Blob style={{position: 'absolute', height: 150, width: 300, bottom: -20, right: -150}} />
                <Leaf style={{position: 'absolute', height: 80, width: 150, top: -40, left: -75, transform: [{rotate: '170deg'}]}} fill='#fff'/>
                <Leaf style={{position: 'absolute', height: 60, width: 100, top: -30, left: 20, transform: [{rotate: '125deg'}]}} fill='#fff'/>
                <Leaf style={{position: 'absolute', height: 80, width: 100, bottom: 0, right: -60, transform: [{rotate: '300deg'}]}} fill='#fff'/>

                <TouchableOpacity onPress={handleBackClick} style={styles.backButton}>
                    <Back style={{transform: [{rotate: '180deg'}]}} fill="#fff"/>
                </TouchableOpacity>
                <Text style={styles.headerText}>{ displayedName.toUpperCase() }</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        position: 'relative',
        backgroundColor: '#00D264',
        width: '100%',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        zIndex: 10,
    },
    backButton: {
        position: 'absolute', 
        zIndex: 1, 
        top: 20, 
        left: 30, 
        height: 30, 
        width: 30
    },
    headerText: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 50,
        textShadowColor: '#888',
        textShadowRadius: 3,
        textShadowOffset: { width: 0, height: 3 }
    }
});