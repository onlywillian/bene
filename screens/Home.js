import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  function movingBetweenScreens(name) {
    navigation.navigate('Pesquisa', { marketName: name });
  }

  return (
    <View style={styles.container}>
      <View style={styles.parteDeCima}>
          <Text style={styles.textoGrande}>BENE</Text>
          <Text style={styles.textoPequeno}>ESTA É A MÉDIA SEMANAL ATUAL DA CESTA BÁSICA EM ITAPAJÉ-CE:</Text>
      </View>
      <View style={styles.parteDeBaixo}>
        <View style={styles.bola}>
          <Text style={styles.precoDaTela}>49,99</Text>
          <Text style={styles.precoDaTelaInferior}>R$</Text>
        </View>
        <View style={styles.escolha}>
          <Text style={styles.mercado}>ESCOLHA SEU MERCADO</Text>

          <TouchableOpacity style={{width: '90%', flex: 1}} onPress={() => movingBetweenScreens('DEIRTON')}>
            <Text style={styles.botaos}>SUPERMERCADO DEIRTON</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width: '90%', flex: 1}} onPress={() => movingBetweenScreens('BIGA')}>
            <Text style={styles.botaos}>SUPERMERCADO O BIGA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width: '90%', flex: 1}} onPress={() => movingBetweenScreens('SÃO FRANCISCO')}>
            <Text style={styles.botaos}>SUPERMERCADO SÃO FRANCISCO</Text>
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
    flex: 1,
    backgroundColor: '#00D264',
    width: '100%',
    elevation: 5,
    shadowColor: 'black',
    justifyContent: 'flex-end',
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
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  textoPequeno: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: "5%",
    marginRight: "5%",
  },
  precoDaTela: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    height: '50%',
    fontSize: 35,
  },
  precoDaTelaInferior: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'top',
    fontWeight: 'bold',
    height: '50%',
    fontSize: 35,
  },
  bola: {
    flex: 1,
    backgroundColor: '#00D264',
    borderRadius: 100,
    width: 160,
    elevation: 8,
    marginVertical: 20,
    shadowColor: 'black',
  },
  escolha: {
    flex: 2,
    borderRadius: 180,
    backgroundColor: '#00D264',
    width: '80%',
    marginBottom: 30,
    elevation: 8,
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  mercado: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  botaos: {
    borderRadius: 15,
    fontWeight: 'bold',
    backgroundColor: '#419F57',
    padding: 25,
    color: 'white',
    textWeight: 'bold',
    textSize: 45,
  }
});