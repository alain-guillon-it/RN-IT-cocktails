// Librairie React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Écrans
import AboutScreen from './screens/AboutScreen';
import ProjectScreen from './screens/ProjectScreen';
import TestimonialScreen from './screens/TestimonialScreen';
import DrawerContentScreen from '../screens/drawer/DrawerContentScreen';

const Drawer = createDrawerNavigator();

export function DrawerScreen() {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={<DrawerContentScreen />}>
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
