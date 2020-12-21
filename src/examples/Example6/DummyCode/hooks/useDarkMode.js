// import {useEffect} from 'react'
import { useLocalStorage } from './useLocalStorage';
import { useTheme } from './useTheme';
import { darkTheme, lightTheme } from '../constants/theme';

export function useDarkMode() {
	// replace with useState if you don't want local storage
	const [darkMode, setDarkMode] = useLocalStorage('dark-mode-enabled', false);

	const theme = darkMode ? darkTheme : lightTheme;

	useTheme(theme);

	// alternative if you don't want to use the useTheme hook
	// to use add a class called dark-mode in index.css or app.css
	// on body you can add the variables for light theme
	// on body.dark-mode you add variables for dark theme

	// useEffect(() => {
	//         const className = 'dark-mode'
	//         const body =  window.document.body;
	//         darkMode ? body.classList.add(className) : body.classList.remove(className);
	//     }, [darkMode])

	return [darkMode, setDarkMode];
}
