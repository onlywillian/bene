import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Header from './components/Header';
import Loading from './components/Loading';
import Item from './components/Item';
import Cat from './components/Cat';

export default function Pesquisa({ route, navigation }) {
    const [itens, setitens] = useState(false);
    const [categories, setCategories] = useState([]);

    const { marketName } = route.params;

    async function getItemsData() {
        const allItemsResponse = await fetch(`https://backend-project-l0bm1asm2-gabrielmarquezin.vercel.app/${marketName.toLowerCase()}`);
        const allItemsData = await allItemsResponse.json();

        setitens(allItemsData);
    }

    useEffect(() => {
        getItemsData();
    }, []);

    function handleTypeSwitch( type ) {
        if (type == 'todos') return getItemsData();

        async function getItemsByTypeData() {
            const allItemsResponse = await fetch(`https://backend-project-l0bm1asm2-gabrielmarquezin.vercel.app/${marketName.toLowerCase()}/produtos?tipo=${type}`);
            const allItemsData = await allItemsResponse.json();
            
            console.log(allItemsData);
            
            setitens(allItemsData.Products);
        }
        getItemsByTypeData();
    }

    const renderItem = ({ item }) => {
        item = item.data
        
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

    useEffect(() => {
         async function getData() {
            const response = await fetch('https://backend-project-dusky.vercel.app/mercados/categorias');
            const data = await response.json();

            setCategories(data);
        }
        getData();
        
        handleCatClick(0)
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

    const renderCategorie = ({ item }) => (
        <Cat cat={item.data} handleCatClick={handleCatClick} handleTypeSwitch={handleTypeSwitch}/>
    )

    return (
        <>
            <Header displayedName={marketName} handleTypeSwitch={handleTypeSwitch} navigation={navigation}/>
            <View style={styles.catsContainer}>
                <FlatList 
                    renderItem={renderCategorie}
                    data={categories}
                    horizontal={true}
                />
            </View>
            <View style={{ flex: 6, backgroundColor: '#fff' }}>
                {itens ? <FlatList 
                    data={itens}
                    renderItem={renderItem}
                    style={{flex: 1, width: '100%'}}
                /> : <Loading />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
})