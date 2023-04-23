import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Item({
  marca,
  peso,
  preco,
  tipo,
  img,
  mercado,
  descricao,
  cod,
}) {
  const navigation = useNavigation();

  function handleItemClick() {
    navigation.navigate("Detalhes", {
      marca: marca,
      peso: String(peso),
      preco: preco,
      tipo: tipo,
      descricao: descricao,
      img: img,
      mercado: mercado,
      cod: cod,
    });
  }

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handleItemClick}>
      <View style={styles.image}>
        <Image
          style={{ height: "100%" }}
          source={{ uri: typeof img == "string" ? img : img[1] }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>{descricao?.toUpperCase()}</Text>
        <Text style={styles.text}>MARCA: {marca?.toUpperCase()}</Text>
        <Text style={styles.text}>PESO: {peso}</Text>

        <Text style={{ fontSize: 35, fontWeight: "bold" }}>
          R$ {preco.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 150,
    borderWidth: 1,
    width: "90%",
    marginVertical: 20,
    alignSelf: "center",
    padding: 20,
    flexDirection: "row",
  },
  image: {
    flex: 1,
    height: "100%",
  },
  item: {
    flex: 2,
    marginLeft: 15,
  },
  text: {
    fontSize: 16,
  },
  noImage: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
