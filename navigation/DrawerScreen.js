// Librairie React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Imports des composants obligatoire
import AboutScreen from './screens/AboutScreen';
import ProjectScreen from './screens/ProjectScreen';
import TestimonialScreen from './screens/TestimonialScreen';

const Drawer = createDrawerNavigator();

export function DrawerScreen() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen
					name='About'
					component={AboutScreen}
				/>
				<Drawer.Screen
					name='Project'
					component={ProjectScreen}
				/>
				<Drawer.Screen
					name='Testimonials'
					component={TestimonialScreen}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
