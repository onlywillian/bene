import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './components/Header';
import Loading from './components/Loading';
import Item from './components/Item';

export default function Pesquisa({ route }) {
    const [itens, setitens] = useState(false);
    const { marketName } = route.params;

    useEffect(() => {
        async function getItemsData() {
            const allItemsResponse = await fetch(`https://ceara-cientifico.herokuapp.com/${marketName.toLowerCase()}`);
            const allItemsData = await allItemsResponse.json();

            setitens(allItemsData);
        }
        getItemsData();
    }, []);

    function handleTypeSwitch( market, type ) {
        async function getItemsByTypeData() {
            const allItemsResponse = await fetch(`https://ceara-cientifico.herokuapp.com/${market}/produtos?tipo=${type}`);
            const allItemsData = await allItemsResponse.json();

            setitens(allItemsData);
        }
        getItemsByTypeData();
    }

    const render = ({ item }) => {
        var peso = '';

        if (item.pesoG != null) {
            peso = item.pesoG + 'g';
        } else if (item.pesoKG != null) {
            peso = item.pesoKG + 'kg';
        } else {
            peso = 'Não informado';
        }

        return ( 
            <Item 
                marca={item.marca}
                peso={peso}
                preco={item.preco}
                tipo={item.description || item.tipo}
            />
        )
    };

    return (
        <>
            <Header marketName={marketName} handleTypeSwitch={handleTypeSwitch} />
            <View style={styles.container}>
                {itens ? <FlatList 
                    data={itens}
                    renderItem={render}
                    style={{flex: 1, width: '100%'}}
                /> : <Loading />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
    },
});