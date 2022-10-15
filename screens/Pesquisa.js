import { StyleSheet, View, ScrollView } from 'react-native';

import Header from './components/Header';

export default function Pesquisa({ route }) {
    const { marketName } = route.params;

    const obj = [
        {
            nome: 'ARROZ PARBORIZADO',
            marca: 'ITIJUCA',
            peso: '1kg',
            preco: 'R$ 4,50'
        },
        {
            nome: 'MANTEIGA',
            marca: 'JAJAJA',
            peso: '500 g',
            preco: 'R$ 7,00'
        },
        {
            nome: 'ARROZ PARBORIZADO',
            marca: 'ITIJUCA',
            peso: '1kg',
            preco: 'R$ 4,50'
        },
    ]

    return (
        <>
            <Header marketName={marketName}/>
            <ScrollView style={styles.container}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    {obj.map(item => (
                        <View style={styles.item}>
                            
                        </View>
                    ))}
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '65%'
    },
    item: {
        height: 200,
        borderWidth: 1,
        width: '90%',
        marginVertical: 20,

    }
});