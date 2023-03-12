// Dépendances
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	Image,
	TouchableWithoutFeedback,
	ActivityIndicator,
	Dimensions,
} from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Utilitaires
import myColor from '../utils/Colors';

// Composant
export default function CocktailListScreen({ navigation }) {
	// State
	const [cocktails, setCocktails] = useState([]);
	const [loading, setLoading] = useState(true);

	// Un cocktail aléatoire
	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://www.thecocktaildb.com/api/json/v1/1/random.php',
			);
			return response.data.drinks;
		} catch (error) {
			console.log(error);
		}
	};

	// 10 cocktails aléatoire
	const fetchAllData = async () => {
		// Tableau de cocktails temporaire
		const cocktailsRandom = [];
		for (let i = 0; i < 10; i++) {
			const oneCocktailRandom = await fetchData();
			cocktailsRandom.push(oneCocktailRandom);
		}
		// Modification du state
		setCocktails([...cocktailsRandom]);
		setLoading(false);
	};

	// +5 cocktails aléatoire à la liste précédente
	const fetchAllDataMoreFiveCoktails = async () => {
		// Déconstruction du tableau de cocktail issu du state
		const moreFiveCocktails = [...cocktails];
		for (let i = 0; i < 5; i++) {
			const oneCocktailRandom = await fetchData();
			moreFiveCocktails.push(oneCocktailRandom);
		}
		// Mise à jour du state avec seulement un ajout des 5 derniers cocktails ajouté
		setCocktails((prevCocktails) => [
			...prevCocktails,
			...moreFiveCocktails.slice(-5),
		]);
	};

	// Mise à jour des états en fonction de la mise à jour d'un fetch
	useEffect(() => {
		fetchAllData();
		fetchAllDataMoreFiveCoktails();
	}, []);

	return (
		<View style={styles.container}>
			{loading ? (
				<ActivityIndicator
					size='large'
					color={myColor.primary}
					style={{ alignItems: 'center', justifyContent: 'center' }}
				/>
			) : (
				<View style={styles.list}>
					<FlatList
						data={cocktails}
						keyExtractor={cocktails.idDrink}
						onEndReached={fetchAllDataMoreFiveCoktails}
						onEndReachedThreshold={0.4}
						numColumns={2}
						renderItem={(cocktail) => (
							<TouchableWithoutFeedback
								onPress={() => {
									//alert(cocktail.item[0].strDrink);
									navigation.navigate('CocktailDetail', {
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
											resizeMode={'cover'}
											style={styles.cardImage}
										/>
										<View
											style={{
												position: 'absolute',
												zIndex: 2,
											}}
										>
											<Text style={styles.textCategory}>
												<Text>📑 - </Text>
												{cocktail.item[0].strCategory}
											</Text>
										</View>
									</View>
									<View style={styles.cardTextContainer}>
										<Text>🍸</Text>
										<Text
											key={cocktail.item[0].idDrink}
											style={[
												styles.cardText,
												{
													color: myColor.textWhite,
												},
											]}
										>
											{cocktail.item[0].strDrink}
										</Text>
									</View>
								</View>
							</TouchableWithoutFeedback>
						)}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	textWhite: {
		color: myColor.textWhite,
		fontSize: 28,
	},

	list: {
		flex: 1,
		width: '100%',
		backgroundColor: myColor.tertiary,
		paddingLeft: 11,
		paddingRight: 22,
		paddingVertical: 11,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		width: '48%',
		height: 190,
		elevation: 5,
		backgroundColor: myColor.textPrimary,
		zIndex: 0,
		position: 'relative',
		margin: 5,
		borderRadius: 4,
	},
	cardImage: {
		zIndex: 1,
		position: 'absolute',
		width: '100%',
		height: 190,
	},

	cardTextContainer: {
		zIndex: 2,
		paddingVertical: 4,
		paddingHorizontal: 8,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		backgroundColor: myColor.primary,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	cardText: {
		zIndex: 3,
		fontWeight: 'bold',
		fontSize: 12,
		fontStyle: 'italic',
		textTransform: 'capitalize',
	},

	textCategory: {
		position: 'absolute',
		top: 15,
		padding: 4,
		backgroundColor: myColor.textDanger,
		width: Dimensions.get('window').width * 0.4,
		color: myColor.tertiary,
		fontWeight: 'bold',
		opacity: 0.7,
		fontSize: 10,
		textTransform: 'uppercase',
	},
});
