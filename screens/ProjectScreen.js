// Librairie React Native
import { Text, StyleSheet, View } from 'react-native';

// Librairie Expo
import { Ionicons } from '@expo/vector-icons';

// Utilitaires
import myColors from '../utils/Colors.js';

export default function ProjectScreen() {
	return (
		<View style={styles.container}>
			<View
				style={{
					alignItems: 'center',
					marginBottom: 25,
				}}
			>
				<Ionicons
					name='school'
					size={48}
					color={myColors.textDanger}
				/>
			</View>
			<Text
				style={styles.text}
			>{`- Utiliser l'API TheCocktailDB- Créer une page qui permet d'afficher des recettes de cocktail (exemple: recette de cocktails aléatoires ) avec de l'infinite scroll
		- Lors du clic sur l'image du cocktail (ou la "card" cocktail), afficher une autre page de détail des recettes en se servant des données fournies par l'API : 
		   	- Image
		   	- Nom
		   	- Instructions
		   	- Ingrédients et quantités
				
		- Créer une bottom tabs navigator (menu en bas de page) permettant d'afficher : 
			- La homepage
			- une autre page de votre choix - exemple : cocktails favoris, "fake" page de Profil, cocktails par catégorie, cocktails populaires, liste d'ingrédients ajoutés à un panier (bouton d'ajout près de l'ingrédient)

		Vous pouvez vous inspirer de l'application shake it (url fournie en PJ).

 		************* Facultatif ***************
 			- Création d'un menu burger pour afficher les cocktails par catégorie, les cocktails populaires
 			- Mise en favoris des cocktails (si pas fait)
 			- Ajout d'ingrédients dans une liste
 			- Ajout d'un moteur de recherche pour sélectionner des cocktails à partir d'ingrédients`}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
	},
});
