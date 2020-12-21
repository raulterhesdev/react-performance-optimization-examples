import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	background-color: var(--background-color);
	border-bottom: 1px solid var(--background-light);
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Toggle = styled.button`
	background-color: var(--background-color);
	box-shadow: 0 0 4px inset var(--shadow-color);
	border: none;
	outline: none;
	position: relative;
	width: 60px;
	height: 30px;
	margin: 14px;
	border-radius: 15px;
	cursor: pointer;
	overflow: hidden;

	span {
		position: absolute;
		top: 2px;
		${({ darkMode }) => (darkMode ? 'left: 2px' : 'right: 2px')};
		background-color: var(--background-color);
		box-sizing: border-box;
		box-shadow: 0 0 4px var(--shadow-color);
		height: 26px;
		width: 26px;
		z-index: 10;
		border-radius: 13px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3 ease-in;

		img {
			width: 17px;
		}
	}

	&:hover {
		span {
			box-shadow: 0px 0 8px var(--shadow-color);
		}
	}
`;

export const TitleH1 = styled.h2`
	margin-left: 24px;
	color: var(--primary-color);
`;
