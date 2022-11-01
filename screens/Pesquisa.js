import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import Header from './components/Header';
import Loading from './components/Loading';
import Item from './components/Item';

export default function Pesquisa({ route, navigation }) {
    const [itens, setitens] = useState(false);
    const { marketName } = route.params;

    async function getItemsData() {
        const allItemsResponse = await fetch(`https://ceara-cientifico.herokuapp.com/${marketName.toLowerCase()}`);
        const allItemsData = await allItemsResponse.json();

        
        setitens(allItemsData);
    }

    useEffect(() => {
        getItemsData();
    }, []);

    function handleTypeSwitch( type ) {
        if (type == 'todos') return getItemsData();

        async function getItemsByTypeData() {
            const allItemsResponse = await fetch(`https://ceara-cientifico.herokuapp.com/${marketName.toLowerCase()}/produtos?tipo=${type}`);
            const allItemsData = await allItemsResponse.json();
            
            console.log(allItemsData);
            
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
                img={item.img}
            />
        )
    };

    return (
        <>
            <Header marketName={marketName} handleTypeSwitch={handleTypeSwitch} navigation={navigation}/>
            <View style={{ flex: 6, backgroundColor: '#fff' }}>
                {itens ? <FlatList 
                    data={itens}
                    renderItem={render}
                    style={{flex: 1, width: '100%'}}
                /> : <Loading />}
            </View>
        </>
    )
}
