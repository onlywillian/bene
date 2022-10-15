import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.parteDeCima}>
          <Text style={styles.textoGrande}>BENE</Text>
          <Text style={styles.textoPequeno}>ESTA É A MÉDIA SEMANAL ATUAL DA CESTA BÁSICA EM ITAPAJÉ-CE:</Text>
      </View>
      <View style={styles.parteDeBaixo}>
        <View style={styles.bola}>
          <Text style={styles.precoDaTela}>149,99 R$</Text>
        </View>
        <View style={styles.escolha}>
          <Text style={styles.mercado}>ESCOLHA SEU MERCADO</Text>

          <TouchableOpacity style={{width: '90%', flex: 1}} onPress={() => navigation.navigate('Pesquisa')}>
            <Text style={styles.botaos}>SUPERMERCADO DEIRTON</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width: '90%', flex: 1}} onPress={() => navigation.navigate('Pesquisa')}>
            <Text style={styles.botaos}>SUPERMERCADO O BIGA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width: '90%', flex: 1}} onPress={() => navigation.navigate('Pesquisa')}>
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
    backgroundColor: '#00AD52',
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
    paddingTop: 20,
  },
  textoGrande: {
    flex: 1,
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoPequeno: {
    flex: 1,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: "5%",
    marginRight: "5%",
  },
  precoDaTela: {
    color: 'white',
    backgroundColor: '#00AD52',
    borderRadius: 100,
    overflow: 'hidden',
    height: 150,
    width: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    elevation: 8,
    shadowColor: 'black',
  },
  bola: {
    flex: 1,
  },
  escolha: {
    flex: 2,
    borderRadius: 180,
    backgroundColor: '#00AD52',
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
    backgroundColor: '#00AD52',
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  botaos: {
    borderRadius: 15,
    fontWeight: 'bold',
    backgroundColor: '#3B8A4D',
    padding: 25,
    color: 'white',
    textWeight: 'bold',
    textSize: 45,
  }
});