import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Header from "./components/Header";

export default function Detalhes({ route, navigation }) {
  const { marca, peso, preco, tipo, img, mercado, descricao, cod } =
    route.params;

  const [statsInfo, setStatsInfo] = useState<any>([]);

  useEffect(() => {
    async function getItemsByTypeData() {
      const allItemsResponse = await fetch(
        `https://backend-project-gilb-gabrielmarquezin.vercel.app/estatistica/${mercado.toLowerCase()}?id=${cod}`
      );
      const allItemsData = await allItemsResponse.json();

      console.log(allItemsData);

      setStatsInfo(allItemsData);
    }
    getItemsByTypeData();
  }, []);

  return (
    <>
      <Header displayedName={tipo} navigation={navigation} />
      <View style={styles.container}>
        <View style={{ flex: 3, flexDirection: "row", gap: 20 }}>
          <View style={styles.imgLocation}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={{ uri: typeof img == "string" ? img : img[1] }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.headerText}>{descricao?.toUpperCase()}</Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>MARCA: </Text>
              {marca?.toUpperCase()}
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>MERCADO: </Text>
              {mercado?.toUpperCase()}
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>PESO: </Text>
              {peso?.toUpperCase()}
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>CÓDIGO: </Text>
              {cod}
            </Text>
            <Text style={styles.headerText}>R$ {preco.toFixed(2)}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
          <Text style={styles.centerText}>O PREÇO QUE MAIS APARECE:</Text>
          <Text style={styles.centerText}>REGULARIDADE DO PREÇO:</Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-around",
          }}
        >
          <View style={styles.ball}>
            <Text style={styles.headerText}>
              R$ {typeof statsInfo?.Moda === "string" ? "?" : statsInfo.Moda}
            </Text>
          </View>
          <View style={styles.ball}>
            <Text style={styles.headerText}>{statsInfo.Variancia}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    padding: 10,
    gap: 20,
    paddingTop: 40,
  },
  imgLocation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 1,
  },
  productInfo: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  centerText: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    fontSize: 20,
  },
  ball: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "#00D264",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
