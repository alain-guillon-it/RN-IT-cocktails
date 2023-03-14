// Dépendances
import { Image, Text, View } from 'react-native';

// Utilitaires
import myColor from '../utils/Colors';

// Composant
export default function FavoriteScreen() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'space-around',
				backgroundColor: myColor.primary,
			}}
		>
			<Text style={{ fontSize: 48, color: myColor.textWhite }}>En maintenance</Text>
			<Image
				source={{
					uri: 'https://www.ogest.fr/wp-content/uploads/2020/07/Projets_immo-1-768x775.png',
				}}
				style={{ height: '50%', width: '90%' }}
			/>
		</View>
	);
}
