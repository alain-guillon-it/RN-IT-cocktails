// Librairie React Native
import { View, Text, Image, StyleSheet } from 'react-native';

// Librairie React Navigation
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

// Utilitaire
import myColors from '../../utils/Colors';

export default function DrawerContentScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.containerTop}>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<Image
						source={{
							uri: 'https://avatars.githubusercontent.com/u/19937398?v=4',
						}}
						resizeMode='cover'
						style={{ height: '90%', width: '90%', borderRadius: 8 }}
					/>
				</View>
				<Text
					style={{
						textAlign: 'center',
						fontWeight: 'bold',
						color: myColors.textWhite,
					}}
				>
					a.guillon.69330@it-students.fr
				</Text>
			</View>
			<View style={styles.containerMiddle}>
				<DrawerContentScrollView>
					<DrawerItemList {...props} />
				</DrawerContentScrollView>
			</View>
			<View style={styles.containerBottom}>
				<Image
					source={{
						uri: 'https://campusnumerique.auvergnerhonealpes.fr/app/uploads/2020/06/it-akademy-sanscravate-transp-1585925610.png',
					}}
					resizeMode='cover'
					style={{ height: 200, width: 200 }}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: myColors.tertiary,
	},
	containerTop: {
		flex: 0.3,
		paddingVertical: 32,
		backgroundColor: myColors.primary,
	},
	containerMiddle: {
		flex: 0.4,
		backgroundColor: myColors.tertiary,
	},
	containerBottom: {
		flex: 0.3,
		padding: 25,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingBottom: 32,
	},
});
