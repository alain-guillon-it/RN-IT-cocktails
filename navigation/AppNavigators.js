// Librairie React Navigation
import { NavigationContainer } from '@react-navigation/native';

// Imports des composants indispensable
import { AppTabNavigator } from './Navigators';

export default function AppNavigators() {
	return (
		<NavigationContainer>
			<AppTabNavigator />
		</NavigationContainer>
	);
}
