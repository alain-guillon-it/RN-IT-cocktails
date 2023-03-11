// Librairie React
import * as React from 'react';

// Librairie React Native
import { StyleSheet } from 'react-native';

// Librairie React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Librairie Expo
import { FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons';

// Imports des composants obligatoire
import CocktailListScreen from './Screens/CocktailListScreen';
import CocktailDetailsScreen from './Screens/CocktailDetailsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FavoriteScreen from './Screens/FavoriteScreen';

// STACK Navigation (2 écrans)
const StackHomeScreen = createStackNavigator();
function HomeScreen() {
	return (
		<StackHomeScreen.Navigator>
			{/* Stack Principale */}
			<StackHomeScreen.Screen
				name='CocktailsList'
				component={CocktailListScreen}
			/>
			{/* Stack Secondaire */}
			<StackHomeScreen.Screen
				name='Detail'
				component={CocktailDetailsScreen}
			/>
		</StackHomeScreen.Navigator>
	);
}

// TAB Navigation (3 butons en bas de l'écran)
const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName='CocktailsList'>
				{/* FAVORITE - Button de gauche */}
				<Tab.Screen
					name='Favorite'
					component={FavoriteScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Fontisto
								name='favorite'
								size={size}
								color={color}
							/>
						),
					}}
				/>

				{/* COCKTAIL - Button du milieu (PRINCIPAL) */}
				<Tab.Screen
					name='CocktailsList'
					component={HomeScreen}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size }) => (
							<FontAwesome5
								name='cocktail'
								size={size}
								color={color}
							/>
						),
					}}
				/>

				{/* PROFILE - Button de droite */}
				<Tab.Screen
					name='Profile'
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<AntDesign
								name='profile'
								size={size}
								color={color}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

// Style Principal
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgrey',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
