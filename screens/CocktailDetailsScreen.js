// Dépendances
import { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
	Alert,
	FlatList,
} from 'react-native';
import { userSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Utilitaires
import myColor from '../utils/Colors';

// Composant
export default function CocktailDetailsScreen({ route }) {
	// State
	const [oneCocktail, setOneCocktail] = useState({ ...route.params.cocktail });
	const [ingredients, setIngredients] = useState([]);

	// Méthode 1 pour récupérer un cocktail par son ID
	const getOneCocktailByID = async (id) => {
		const response = await axios.get(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
		);
		const data = response.data.drinks[0];
		setOneCocktail(data);
		return data;
	};

	// Méthode 2 pour récupérer les ingrédients
	const getAllIngredients = async (responseData) => {
		const ingredientsTemporaire = [];
		for (let i = 1; i <= 15; i++) {
			if (responseData[`strIngredient${i}`]) {
				ingredientsTemporaire.push({
					name: responseData[`strIngredient${i}`],
					measure: responseData[`strMeasure${i}`],
				});
			} else {
				break;
			}
		}
		setIngredients(ingredientsTemporaire);
	};

	// Mise à jour du cocktail détails
	useEffect(() => {
		getOneCocktailByID(oneCocktail.idDrink)
			.then((data) => {
				getAllIngredients(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<View
			key={oneCocktail.idDrink}
			style={styles.container}
		>
			{/* IMAGE */}
			<View style={{ width: '100%', flex: 0.4 }}>
				<Image
					source={{
						uri: oneCocktail.strDrinkThumb,
					}}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</View>

			{/* TITLE */}
			<View style={{ width: '100%', marginTop: 16, marginBottom: 8, flex: 0.05 }}>
				<Text style={{ fontSize: 28, textAlign: 'center', color: myColor.primary }}>
					{oneCocktail.strDrink}
				</Text>
			</View>

			{/* DESCRIPTION */}
			<View
				style={{
					width: '100%',
					marginBottom: 8,
					paddingHorizontal: 8,
					alignItems: 'center',
					justifyContent: 'center',
					flex: 0.1,
				}}
			>
				<TouchableWithoutFeedback
					onPress={() =>
						Alert.alert('Instruction', oneCocktail.strInstructions, [
							{ text: 'OK', onPress: () => console.log('OK Pressed') },
						])
					}
				>
					<Text
						style={{
							textAlign: 'center',
							fontSize: 18,
							backgroundColor: myColor.primary ,
							paddingVertical: 8,
							width: '100%',
							color: '#F1F1F1',
							borderRadius: 5,
							elevation: 5,
						}}
					>
						👁 - voir les instructions
					</Text>
				</TouchableWithoutFeedback>
			</View>

			{/* CATEGORY */}
			<View
				style={{
					width: '100%',
					flex: 0.05,
					paddingHorizontal: 16,
					marginBottom: 8,
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 20,
						textAlign: 'center',
						color: '#333333',
						fontWeight: 'bold',
					}}
				>
					Catégorie :{' '}
					<Text style={{ textTransform: 'uppercase' }}>
						{oneCocktail.strCategory}
					</Text>
				</Text>
			</View>

			{/* INGREDIENTS */}
			<View
				style={{
					width: '100%',
					paddingHorizontal: 8,
					flex: 0.4,
				}}
			>
				<FlatList
					data={ingredients}
					renderItem={(item, index) => (
						<View
							key={index}
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',
								paddingHorizontal: 32,
								paddingVertical: 8,
							}}
						>
							{console.log(item)}
							<Image
								source={{
									uri: `https://www.thecocktaildb.com/images/ingredients/${item.item.name}-Medium.png`,
									width: 100,
									height: 100,
								}}
							/>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
								{item.item.name} of {'    '}
								<Text style={{ paddingLeft: 5, color: 'salmon' }}>
									{item.item.measure}
								</Text>
							</Text>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

// Style de la partie Détails
const styles = StyleSheet.create({
	container: { flex: 1 },
});
