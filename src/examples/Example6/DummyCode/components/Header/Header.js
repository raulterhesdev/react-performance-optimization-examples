import React from 'react';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';
import Title from './Title/Title';

import { HeaderWrapper } from './Header.styles';

const Header = () => {
	return (
		<HeaderWrapper>
			<Title />
			<DarkModeToggle />
		</HeaderWrapper>
	);
};

export default Header;
