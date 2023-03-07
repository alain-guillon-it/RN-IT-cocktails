import {Text, View, StyleSheet, FlatList, Image} from "react-native";
import {useState, useContext} from "react";
import dataContext from "../context/DataContext";

function CocktailList() {

    const [cocktails, setCocktails] = useState( [ useContext( dataContext ) ])

    return (
        <View style={ styles.container }>
            <View style={ styles.title }>
                <Text style={ styles.textWhite }>Cocktails IT</Text>
            </View>

            <View style={ styles.list }>
                <FlatList data={ cocktails } keyExtractor={ cocktails.id } renderItem={
                    (cocktail ) => cocktail.item.map( item => (

                        <View style={ styles.card }>
                            <View style={ styles.cardImage }>
                                <Image
                                    source={{
                                        uri: item.img
                                    }}
                                    resizeMode={ "cover" }
                                    style={{ height: 250, width: 350 }}
                                />
                            </View>
                            <View style={ styles.cardTextContainer }>
                                <Text key={item.id} style={ styles.cardText }>{ item.name}</Text>
                            </View>
                        </View>

                        )
                    )
                } />
            </View>
        </View>
    )
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
        elevation: 10
    },
    list: {
        flex: 0.9,
        backgroundColor: "#F1F1F1",
        padding: 16,
        alignItems: "center"
    },
    textWhite: {
        color: "white",
        fontSize: 28
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
        height: "100%"
    },
    cardTextContainer: {
        paddingVertical: 10,
    },
    cardText: {
        fontWeight: "bold", fontSize: 18, fontStyle: "italic", textTransform: "capitalize"
    }
})