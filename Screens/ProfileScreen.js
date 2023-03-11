// Librairie React
import { useState } from 'react';

// Librairie React Native
import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native';

// Composant
export default function ProfileScreen() {
	// State
	const [favoris, setFavoris] = useState([]);

	return (
		// Container principal
		<View style={styles.container}>
			{/* Container du haut */}
			<View style={[styles.header]}>
				<Image
					source={{
						uri: 'https://www.arredolocali.com/fr/images/arredococktailbar/arredamento-cocktail-bar.jpg',
					}}
					style={{
						height: '100%',
						width: '100%',
						zIndex: 1,
					}}
				/>
				<View style={{ zIndex: 2, position: 'absolute', width: '80%' }}>
					<Text style={styles.h1}>Alain GUILLON</Text>
					<Text style={styles.p}>
						La différence entre le{' '}
						<Text style={[styles.strong, styles.textRed]}>Succès</Text> et{' '}
						<Text style={[styles.strong, styles.textRed]}>L'échec</Text> est
						la{' '}
						<Text style={[styles.strong, styles.textRed]}>Persévérance</Text>
					</Text>
				</View>
			</View>

			{/* Container du bas */}
			<View style={styles.main}>
				<Text style={styles.h2}>Liste des favoris</Text>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					{favoris.length > 0 ? (
						<FlatList
							data={favoris}
							renderItem={(currentFavoris) => <Text>{currentFavoris}</Text>}
						/>
					) : (
						<Text style={styles.alertInfo}>
							❌ - Désolé aucun favoris pour le moment
						</Text>
					)}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 0.4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	main: {
		padding: 32,
		flex: 0.6,
	},
	h1: {
		fontSize: 32,
		marginBottom: 16,
		backgroundColor: 'white',
		color: '#333333',
		textAlign: 'center',
		paddingVertical: 8,
		opacity: 0.7,
		elevation: 5,
		fontWeight: 'bold',
	},
	h2: {
		fontSize: 24,
	},
	p: {
		letterSpacing: 2,
		fontStyle: 'italic',
		paddingHorizontal: 24,
		paddingVertical: 12,
		backgroundColor: 'white',
		opacity: 0.9,
	},
	strong: {
		fontWeight: 'bold',
	},
	textRed: {
		color: 'red',
	},
	alertInfo: {
		marginVertical: 16,
		fontSize: 16,
		color: 'darkblue',
		fontWeight: 'bold',
		backgroundColor: 'skyblue',
		opacity: 0.6,
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
});
