// Librairie React
import React from 'react';

// Librairie React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Librairie Expo
import { AntDesign, Fontisto } from '@expo/vector-icons';

// Imports des composants obligatoire
import CocktailsScreen from '../screens/CocktailsScreen';
import CocktailDetailsScreen from '../screens/CocktailDetailsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

// STACK Navigator ( 2 écrans )
const Stack = createStackNavigator();
function StackScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Cocktails'
				component={CocktailsScreen}
				options={{ title: 'Cocktails' }}
			/>
			<Stack.Screen
				name='CocktailDetails'
				component={CocktailDetailsScreen}
				options={{ title: 'Cocktail Details' }}
			/>
		</Stack.Navigator>
	);
}

// TAB Navigator ( 1 écrans + un essai d'un splashScreen )
const Tab = createBottomTabNavigator();
export default function TabScreen() {
	return (
		<Tab.Navigator initialRouteName='Cocktails'>
			<Tab.Screen
				name='Favorite'
				component={FavoriteScreen}
				options={{
					title: 'Favoris',
					tabBarIcon: ({ color, size }) => (
						<AntDesign
							name='heart'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Cocktails'
				component={StackScreen}
				options={{
					title: 'Cocktails',
					tabBarIcon: ({ color, size }) => (
						<Fontisto
							name='cocktail'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={FavoriteScreen}
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<AntDesign
							name='user'
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
