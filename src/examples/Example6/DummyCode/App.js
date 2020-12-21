import Header from './components/Header/Header';
import DataInsert from './components/DataInsert/DataInsert';
import DataDisplay from './components/DataDisplay/DataDisplay';
import { useTheme } from './hooks/useTheme';

import { generalTheme } from './constants/theme';
import { Wrapper } from './App.styles';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
	useTheme(generalTheme);

	return (
		<Provider store={store}>
			<Wrapper className='App'>
				<Header />
				<DataInsert />
				<DataDisplay />
			</Wrapper>
		</Provider>
	);
};

export default App;
