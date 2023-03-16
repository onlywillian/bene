import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";

import Header from "./components/Header";

export default function Detalhes({ route, navigation }) {
    const { marca, peso, preco, tipo, img, mercado, descricao } = route.params;

    const [statsInfo, setStatsInfo] = useState([])

    useEffect(() => {
        async function getItemsByTypeData() {
            const allItemsResponse = await fetch(`https://backend-project-l0bm1asm2-gabrielmarquezin.vercel.app/${mercado.toLowerCase()}/produtos?tipo=${tipo}`);
            const allItemsData = await allItemsResponse.json();
            
            setStatsInfo(allItemsData.statisticData);
        }
        getItemsByTypeData();
    }, [])

    return (
        <>
            <Header displayedName={tipo}/>
            <View style={styles.container}>
                <View style={{ flex: 3, flexDirection: 'row', gap: 20 }}>
                    <View style={styles.imgLocation}>
                        <Image 
                            style={{ height: '100%', width: '100%' }} 
                            source={{uri: typeof img == 'string' ? img : img[1]}}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={styles.productInfo}>
                        <Text style={styles.headerText}>{descricao}</Text>
                        <Text>Marca: {marca}</Text>
                        <Text>Mercado: {mercado}</Text>
                        <Text>Peso: {peso}</Text>
                        <Text style={styles.headerText}>R$ {preco.toFixed(2)}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                    <Text style={styles.centerText}>O preço que mais aparece:</Text>
                    <Text style={styles.centerText}>Regularidade do preço:</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', gap: 20 }}>
                    <View style={styles.ball}>
                        <Text style={styles.headerText}>R$ {statsInfo.Moda}</Text>
                    </View>
                    <View style={styles.ball}>
                        <Text style={styles.headerText}>{statsInfo.DesvioPadrao}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#fff',
        padding: 20,
        gap: 20
    },
    imgLocation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productInfo: {
        flex: 1,
        gap: 20,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    centerText: {
        flex: 1, 
        textAlign: 'center', 
        textAlignVertical: 'bottom',
        fontWeight: 'bold'
    },
    ball: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#00D264',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%'
    }
})