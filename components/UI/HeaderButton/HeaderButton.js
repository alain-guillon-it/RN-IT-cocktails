// Librairie React Navigation
import { HeaderButton } from 'react-navigation-header-buttons';

// Librairie Expo
import { Ionicons } from '@expo/vector-icons';

// Utilitaires
import myColor from '../../../utils/Colors';

export default function CustomHeaderButton(props) {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={28}
			color={myColor.textWhite}
		/>
	);
}
