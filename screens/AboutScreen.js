import { Image, StyleSheet, Text, View } from 'react-native';

// Utilitaires
import myColors from '../utils/Colors';

export default function AboutScreen() {
	return (
		<View style={styles.container}>
			<View style={{ alignItems: 'center', marginBottom: 16 }}>
				<Image
					source={{
						uri: 'https://www.babelio.com/users/QUIZ_Qui-suis-je--10ecrivain-portrait-chinois_4506.png',
					}}
					resizeMode='cover'
					style={{ height: 75, width: 75 }}
				/>
			</View>
			<View>
				<Text style={styles.p}>
					Eh moi C'est Alain, 38 ans père de 3 enfants bientôt 4.
				</Text>
				<Text style={styles.p}>
					Je suis en reconversion professionnel pour devenir développeur
					fullstack.
				</Text>
				<Text style={styles.p}>
					J'apprends énormément de choses et je suis toujours curieux et
					pointilleux pour arriver aux bouts de mes projets.
				</Text>
				<Text style={styles.p}>
					Voilà je fais ça très cours car j'ai encore beaucoup de chose à faire
					et surtout il faut savoir que j'ai une date limite pour rendre ce
					projet qui est le Mardi 14/03/2023. Aujourd'hui nous sommes Dimanche
					12/03/2023 et il est 20h52 au moment où j'écris ses lignes.
				</Text>
				<Text style={styles.p}>
					C'est évident que je reviendrais sur cette application pour la
					peaufiner !!
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: myColors.textWhite,
		paddingHorizontal: 32,
		paddingVertical: 16,
	},
	p: {
		fontSize: 16,
		marginVertical: 8,
	},
});
