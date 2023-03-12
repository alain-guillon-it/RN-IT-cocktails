// Librairie React Native
import { FontAwesome, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';

// Librairie React Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Utilitaires
import myColors from '../utils/Colors';

// Composants
import HeaderButton from '../components/UI/HeaderButton/HeaderButton';

// Écrans
import AboutScreen from '../screens/AboutScreen';
import CocktailDetailsScreen from '../screens/CocktailDetailsScreen';
import CocktailListScreen from '../screens/CocktailListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProjectScreen from '../screens/ProjectScreen';
import TestimonialScreen from '../screens/TestimonialScreen';

// Configuration des couleurs du header
const headerColorDFS26C = {
	headerTintColor: myColors.textWhite,
	headerStyle: { backgroundColor: myColors.dark },
};
const headerColorDrawer = {
	headerTintColor: myColors.textWhite,
	headerStyle: { backgroundColor: myColors.primary },
};

// Navigation Principale
const Tab = createBottomTabNavigator();
export const AppTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='TabCocktails'
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'TabFavorite') {
						iconName = focused ? 'heart' : 'heart-outline';
						return (
							<Ionicons
								name={iconName}
								color={color}
								size={size}
							/>
						);
					} else if (route.name === 'TabCocktails') {
						iconName = focused ? 'glass-cocktail' : 'glass-cocktail-off';
						return (
							<MaterialCommunityIcons
								name={iconName}
								color={color}
								size={size}
							/>
						);
					} else if (route.name === 'TabProfile') {
						iconName = focused ? 'user' : 'user-o';
						return (
							<FontAwesome
								name={iconName}
								color={color}
								size={size}
							/>
						);
					}
				},
				tabBarActiveTintColor: myColors.textWhite,
				tabBarActiveBackgroundColor: myColors.textDanger,
				tabBarInactiveTintColor: myColors.white,
				tabBarInactiveBackgroundColor: myColors.dark,
				tabBarShowLabel: false,
			})} // Fin ScreenOptions
		>
			<Tab.Screen
				name='TabFavorite'
				component={FavoriteScreen}
				options={{
					title: 'Mes cocktails favoris',
					...headerColorDFS26C,
				}}
			/>
			<Tab.Screen
				name='TabCocktails'
				component={CocktailsListStackNavigator}
				options={{
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='TabProfile'
				component={ProfileScreen}
				options={{
					title: 'Mon profil',
					...headerColorDFS26C,
				}}
			/>
		</Tab.Navigator>
	);
};

// Navigateur Secondaire
const Stack = createStackNavigator();

export const CocktailsListStackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='CocktailList'>
			<Stack.Screen
				name='StackProject'
				component={ProjectScreen}
				options={{
					title: 'Énoncé du projet à rendre',
					...headerColorDFS26C,
				}}
			/>
			<Stack.Screen
				name='CocktailList'
				component={DrawerMenu}
				options={({ navigation }) => ({
					title: 'DFS26C - TP React Native',
					headerRight: () => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title='Information'
								iconName='md-information-circle'
								onPress={() => navigation.navigate('StackProject')}
							/>
						</HeaderButtons>
					),
					...headerColorDFS26C,
				})}
			/>
			<Stack.Screen
				name='CocktailDetail'
				component={CocktailDetailsScreen}
				options={({ navigation }) => ({
					title: 'Détails du cocktail',
					...headerColorDFS26C,
				})}
			/>
		</Stack.Navigator>
	);
};

// Navigation Drawer Menu
const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
	return (
		<Drawer.Navigator
			useLegacyImplementation
			screenOptions={{
				drawerActiveBackgroundColor: myColors.dark,
				drawerActiveTintColor: myColors.textWhite,
			}}
		>
			<Drawer.Screen
				name='CocktailList'
				component={CocktailListScreen}
				options={({ navigation }) => ({
					title: '🍸 - Liste des cocktails',
					...headerColorDrawer,
				})}
			/>

			<Drawer.Screen
				name='DrawerAbout'
				component={AboutScreen}
				options={{
					title: "🧔 - A propos de l'auteur",
					...headerColorDrawer,
				}}
			/>
			<Drawer.Screen
				name='DrawerTestimonial'
				component={TestimonialScreen}
				options={{
					title: '🤝 - Remerciements',
					...headerColorDrawer,
				}}
			/>
		</Drawer.Navigator>
	);
};
