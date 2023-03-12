// Librairie React Native
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Utilitaires
import myColors from '../utils/Colors';
import { useState } from 'react';

export default function TestimonialScreen() {
	const [personnes, setPersonnes] = useState([
		{
			id: 1,
			name: 'Ma famille',
			description:
				'Je code souvent et les premiers impacter sont ma femme et mes enfants. Je vous aimes.',
		},
		{
			id: 2,
			name: 'IT Akademy',
			description: "Merci pour tout ce qui a été fait jusqu'à maintenant",
		},
		{
			id: 3,
			name: 'Aurélien CHIREN',
			description: "Merci pour m'avoir transmis cette passion de React Native.",
		},
		{
			id: 4,
			name: 'Nacim MEZIANI',
			description:
				"Merci Nacim pour ton écoute et surtout pour ce que tu peux m'apporter en cas de grosse galère.",
		},
		{
			id: 5,
			name: 'Tarek TAGUINE',
			description:
				"Tu sais que t'es plus qu'un collègue, t'es super ne change pas ;)",
		},
		{
			id: 6,
			name: 'Alex BOULOM',
			description:
				"Merci Alex, tu n'hésites pas à prendre un peu de ton temps pour venir aider en cas de besoin.",
		},
		{
			id: 7,
			name: 'Sophie MAJOREL',
			description:
				'Merci pour tout tes conseilles et surtout pour les photos de ma princesses.',
		},
		{
			id: 8,
			name: 'Anas HATIM',
			description:
				"Tu m'as vachement aider au début pour la navigation !! Franchement merci.",
		},
		{
			id: 9,
			name: 'Axel DENIS',
			description:
				"Fiou, quel calvaire cette imbrications de navigation, tu m'as fait gagner beaucoup de temps Merci.",
		},
		{
			id: 10,
			name: 'Mélina CHIRIOT',
			description:
				"Tu as ton petit caractère mais tu viens m'aider quand j'en ai besoin Merci.",
		},
		{
			id: 11,
			name: 'Dyma / Believemy',
			description:
				"Merci à ces deux plateforme d'E-learning pour m'aider à concevoir tout ça.",
		},
	]);

	return (
		<View style={styles.container}>
			<View style={{ flex: 0.3, backgroundColor: myColors.tertiary }}>
				<View style={{ paddingVertical: 16 }}>
					<Text style={styles.h1}>Merci</Text>
				</View>
				<View style={{ paddingHorizontal: 32 }}>
					<Text style={styles.p}>
						Je tiens à remercier pas mal de personnes qui m'ont permis de près
						ou de loin de réussir ce projet.
					</Text>
				</View>
			</View>
			<View
				style={{
					flex: 0.7,
					paddingHorizontal: 32,
					paddingVertical: 16,
					backgroundColor: myColors.dark,
				}}
			>
				<FlatList
					data={personnes}
					renderItem={(personne) => (
						<View
							key={personne.item.id}
							style={styles.card}
						>
							<Text style={styles.h3}>{personne.item.name}</Text>
							<Text>{personne.item.description}</Text>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	h1: {
		fontSize: 32,
		textAlign: 'center',
	},
	h3: {
		fontSize: 18,
		textTransform: 'uppercase',
		color: myColors.textDanger,
		fontWeight: 'bold',
	},
	p: {
		fontSize: 16,
		marginBottom: 32,
		fontStyle: 'italic',
	},
	card: {
		backgroundColor: myColors.textWhite,
		marginBottom: 16,
		padding: 16,
	},
});
