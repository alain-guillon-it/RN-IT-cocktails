// Dépendances
import { Provider } from 'react-redux';

// Magasin ( STORE )
import { store } from './redux-toolkit/store/store';

// Composants
import AppNavigators from './navigation/AppNavigators';

export default function App() {
	return (
		<Provider store={store}>
			<AppNavigators />
		</Provider>
	);
}
