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
import { useState, useContext, useEffect } from "react";
import axios from "axios";

// import dataContext from "../context/DataContext";

import CocktailDetails from "./CocktailDetails";

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(cocktails);

  const fetchAllData = async () => {
    try {
      await axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => {
          setCocktails(response.data.drinks);
          console.log("1er then", response.data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
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
            color={"#425b8a"}
            style={{ alignItems: "center", justifyContent: "center" }}
          />
        ) : (
          <FlatList
            data={cocktails}
            keyExtractor={cocktails.idDrink}
            renderItem={(cocktail) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log(`\n ------------------------------ \n`);
                  console.log({
                    id: cocktail.item.idDrink,
                    category: cocktail.item.strCategory,
                    titre: cocktail.item.strDrink,
                    instruction: cocktail.item.strInstructions,
                  });
                  console.log(cocktail.item);
                }}
              >
                <View style={styles.card}>
                  <View style={styles.cardImage}>
                    <Image
                      source={{
                        uri: cocktail.item.strDrinkThumb,
                      }}
                      resizeMode={"cover"}
                      style={{
                        height: Dimensions.get("window").height * 0.4,
                        width: Dimensions.get("window").width * 1,
                      }}
                    />
                    <View style={{ position: "absolute", zIndex: 2 }}>
                      <Text style={styles.textCategory}>
                        {cocktail.item.strCategory}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardTextContainer}>
                    <Text key={cocktail.item.idDrink} style={styles.cardText}>
                      {cocktail.item.strDrink}
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
    backgroundColor: "#425b8a",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  list: {
    flex: 0.9,
    backgroundColor: "#F1F1F1",
    padding: 16,
    alignItems: "center",
  },
  textWhite: {
    color: "white",
    fontSize: 28,
  },
  card: {
    backgroundColor: "#D1D1D1",
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
  },
  textCategory: {
    backgroundColor: "grey",
    marginTop: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: Dimensions.get("window").width * 0.8,
    color: "white",
    opacity: 0.7,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
