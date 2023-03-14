import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";

export default function Detalhes({ route, navigation }) {
    // const {} = route.params;

    return (
        <>
            <Header displayedName={'Arroz'}/>
            <View style={styles.container}>
                <View style={{ flex: 3, flexDirection: 'row', gap: 20 }}>
                    <View style={styles.imgLocation}>
                        <Text>Imagem</Text>
                    </View>
                    <View style={styles.productInfo}>
                        <Text style={styles.headerText}>Arroz Parbolizado</Text>
                        <Text>Marca: foo</Text>
                        <Text>Mercado: foo</Text>
                        <Text>Peso: 1 kg</Text>
                        <Text style={styles.headerText}>10,00 R$</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                    <Text style={styles.centerText}>O preço que mais aparece:</Text>
                    <Text style={styles.centerText}>Regularidade do preço:</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', gap: 20 }}>
                    <View style={styles.ball}>
                        <Text style={styles.headerText}>10,00 R$</Text>
                    </View>
                    <View style={styles.ball}>
                        <Text style={styles.headerText}>4</Text>
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
        backgroundColor: "#eee",
        justifyContent: 'center',
        alignItems: 'center'
    },
    productInfo: {
        flex: 1,
        gap: 30,
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