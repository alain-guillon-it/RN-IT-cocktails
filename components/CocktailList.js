import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

function CocktailList({ navigation }) {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllData = async () => {
    const cocktailsRandom = [];
    for (let i = 0; i < 10; i++) {
      const oneCocktailRandom = await fetchData();
      cocktailsRandom.push(oneCocktailRandom);
    }
    setCocktails([...cocktailsRandom]);
    setLoading(false);
  };

  const fetchAllDataMoreFiveCoktails = async () => {
    console.log("fetchAllDataMoreFiveCoktails");
    const moreFiveCocktails = [...cocktails];
    for (let i = 0; i < 5; i++) {
      const oneCocktailRandom = await fetchData();
      moreFiveCocktails.push(oneCocktailRandom);
    }
    setCocktails((prevCocktails) => [
      ...prevCocktails,
      ...moreFiveCocktails.slice(-5),
    ]);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textWhite}>Cocktails IT</Text>
      </View>

      <View style={styles.list}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={"#402717"}
            style={{ alignItems: "center", justifyContent: "center" }}
          />
        ) : (
          <FlatList
            data={cocktails}
            keyExtractor={cocktails.idDrink}
            onEndReached={fetchAllDataMoreFiveCoktails}
            onEndReachedThreshold={0.4}
            renderItem={(cocktail) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  //alert(cocktail.item[0].strDrink);
                  navigation.navigate("Detail", {
                    cocktail: {
                      ...cocktail.item[0],
                    },
                  });
                }}
              >
                <View style={styles.card}>
                  <View style={styles.cardImage}>
                    <Image
                      source={{
                        uri: cocktail.item[0].strDrinkThumb,
                      }}
                      resizeMode={"cover"}
                      style={{
                        height: Dimensions.get("window").height * 0.4,
                        width: Dimensions.get("window").width * 1,
                      }}
                    />
                    <View style={{ position: "absolute", zIndex: 2 }}>
                      <Text style={styles.textCategory}>
                        {cocktail.item[0].strCategory}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardTextContainer}>
                    <Text
                      key={cocktail.item[0].idDrink}
                      style={styles.cardText}
                    >
                      {cocktail.item[0].strDrink}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        )}
      </View>
    </View>
  );
}

export default CocktailList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.1,
    backgroundColor: "#402717",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  list: {
    flex: 0.9,
    backgroundColor: "#474749",
    padding: 16,
    alignItems: "center",
  },
  textWhite: {
    color: "white",
    fontSize: 28,
  },
  card: {
    backgroundColor: "#402717",
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    elevation: 5,
  },
  cardImage: {
    flex: 0.5,
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 0,
  },
  cardTextContainer: {
    paddingVertical: 10,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
    fontStyle: "italic",
    textTransform: "capitalize",
    color: "#f0d020",
  },
  textCategory: {
    backgroundColor: "#f0d020",
    marginTop: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: Dimensions.get("window").width * 0.8,
    color: "#474749",
    fontWeight: "bold",
    opacity: 0.7,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
