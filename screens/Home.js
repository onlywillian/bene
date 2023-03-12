import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

import Blob from '../assets/icons/Blob';
import Leaf from '../assets/icons/Leaf';
import Shop from '../assets/icons/Shop';

export default function App({ navigation }) {
  const [media, setMedia] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('https://ceara-cientifico.herokuapp.com/mercados/media');
  //     const data = await response.json();

  //     setMedia(data);
  //   }
  //   getData();
  // }, []);

  function movingBetweenScreens(name) {
    navigation.navigate('Pesquisa', { marketName: name });
  }

  return (
    <View style={styles.container}>
      <View style={styles.parteDeCima}>
          {/* icons position */}
          <Blob style={{position: 'absolute', height: 300, width: 300, top: -150, left: -120}} />
          <Blob style={{position: 'absolute', height: 300, width: 300, top: 0, right: -180}} />
          <Leaf style={{position: 'absolute', height: 150, width: 150, top: -40, left: -75, transform: [{rotate: '170deg'}]}} fill='#fff'/>
          <Leaf style={{position: 'absolute', height: 100, width: 100, top: -50, left: 30, transform: [{rotate: '125deg'}]}} fill='#fff'/>
          <Leaf style={{position: 'absolute', height: 100, width: 100, top: 150, right: -60, transform: [{rotate: '300deg'}]}} fill='#fff'/>

          <Text style={styles.textoGrande}>BENE</Text>
          <Text style={styles.textoPequeno}>ESTA É A MÉDIA ATUAL DA CESTA BÁSICA:</Text>
      </View>
      <View style={styles.parteDeBaixo}>
        <View style={styles.bola}>
          <Text style={styles.precoDaTela}>{media ? media.mediaCesta.toFixed(2) : '...'}</Text>
          <Text style={styles.precoDaTelaInferior}>R$</Text>
        </View>
        <View style={styles.escolha}>
          <Text style={styles.mercado}>ESCOLHA SEU MERCADO</Text>

          <TouchableOpacity style={styles.botaos} onPress={() => movingBetweenScreens('DEIRTON')}>
            <Text style={styles.textBotaos}>SUPERMERCADO DEIRTON</Text>
            <Shop fill="#fff" style={styles.shopIcon}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaos} onPress={() => movingBetweenScreens('BIGA')}>
            <Text style={styles.textBotaos}>SUPERMERCADO O BIGA</Text>
            <Shop fill="#fff" style={styles.shopIcon}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaos} onPress={() => movingBetweenScreens('FRANCISCO')}>
            <Text style={styles.textBotaos}>SUPERMERCADO SÃO FRANCISCO</Text>
            <Shop fill="#fff" style={styles.shopIcon}/>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parteDeCima: {
    flex: .6,
    backgroundColor: '#00D264',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  parteDeBaixo: {
    flex: 2,
    backgroundColor: '#D5D5D5',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoGrande: {
    flex: 3,
    color: 'white',
    fontSize: RFPercentage(12),
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  textoPequeno: {
    flex: 1,
    width: "45%",
    fontWeight: 'bold',
    color: 'white',
    fontSize: RFPercentage(2),
    textAlign: 'center',
  },
  precoDaTela: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    height: '60%',
    fontSize: RFPercentage(6),
  },
  precoDaTelaInferior: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'top',
    fontWeight: 'bold',
    height: '50%',
    fontSize: RFPercentage(4),
  },
  bola: {
    height: RFPercentage(20),
    width: RFPercentage(20),
    backgroundColor: '#00D264',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 8,
    marginVertical: 20,
    shadowColor: 'black',
  },
  escolha: {
    flex: 2,
    borderRadius: 180,
    backgroundColor: '#00D264',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  mercado: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  botaos: {
    flex: 1,
    alignItems: 'space-between',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    borderRadius: 15,
    backgroundColor: '#419F57',
    padding: 10,
    color: 'white',
    textSize: 45,
    marginVertical: 10,
  },
  textBotaos: {
    flex: 1, 
    fontSize: RFPercentage(2),
    fontWeight: 'bold', 
    color: 'white', 
    height: '100%', 
    textAlignVertical: 'center',
  },
  shopIcon: {
    flex: 1,
    height: RFPercentage(3),
    width: RFPercentage(3),
    alignSelf: 'center'
  }
});