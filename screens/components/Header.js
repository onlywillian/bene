import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Header({ marketName }) {
    const categories = ['Todos', 'Açucar', 'Feijão','Arroz']

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headerText}>{ marketName }</Text>
            </View>
            <View style={styles.catsContainer}>
                {categories.map(element => (
                    <TouchableOpacity style={styles.cats} key={Math.random()}>
                        <Text style={{
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            height: '100%'
                            }}>
                                {element}
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
        backgroundColor: '#00D264',
        borderRadius: 50,
        margin: 15
    }
});