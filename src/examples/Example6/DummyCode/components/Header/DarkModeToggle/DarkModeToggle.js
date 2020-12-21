import React from 'react';
import { useDarkMode } from '../../../hooks/useDarkMode';

import { Toggle } from '../Header.styles';

const DarkModeToggle = () => {
	const [darkMode, setDarkMode] = useDarkMode(false);

	return (
		<Toggle onClick={() => setDarkMode((prev) => !prev)} darkMode={darkMode}>
			<span>
				{darkMode ? (
					<img
						src='https://img.icons8.com/emoji/48/000000/crescent-moon-emoji.png'
						alt=''
					/>
				) : (
					<img src='https://img.icons8.com/fluent/48/000000/sun.png' alt='' />
				)}
			</span>
		</Toggle>
	);
};

export default DarkModeToggle;
