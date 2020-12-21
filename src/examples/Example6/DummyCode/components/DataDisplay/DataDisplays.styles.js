import styled from 'styled-components';

import { StyledInput } from '../DataInsert/DataInsert.styles';

export const DataDisplayWrapper = styled.div`
	width: 100%;
	margin-top: 16px;
	display: flex;
	flex-direction: column;
`;

export const FilterInput = styled(StyledInput)`
	width: 40%;
	min-width: 300px;
	max-width: 500px;
	margin: 12px auto 24px auto;
	padding: var(--padding-medium) var(--padding-large);
`;

export const ContactItemWrapper = styled.div`
	width: 60%;
	min-width: 400px;
	max-width: 700px;
	margin: 0 auto;
	margin-bottom: 6px;
	box-shadow: 0 4px 8px var(--light-shadow-color);
	border-radius: 8px;
`;

export const ContactHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--background-color);
	padding: var(--padding-small) var(--padding-extra);
	border: 1px solid var(--background-light);
	border-radius: 8px 8px 0 0;
	color: var(--primary-color);
`;

export const Name = styled.p`
	font-size: 16px;
	position: relative;
	margin-left: 12px;

	&::before {
		content: '';
		position: absolute;
		top: 7px;
		left: -12px;
		background-color: var(--accent-color);
		height: 6px;
		width: 6px;
		border-radius: 3px;
	}
`;

export const ButtonWrapper = styled.p`
	display: flex;
	align-items: center;
`;

export const ExpandButton = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	color: var(--accent-color);
	font-size: 24px;
	margin-right: 12px;
	cursor: pointer;
	padding: 2px 6px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DeleteButton = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	color: var(--error);
	font-size: 24px;
	cursor: pointer;
	padding: 2px 6px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContactDetails = styled.div`
	display: ${({ expanded }) => (expanded ? 'block' : 'none')};
	color: var(--primary-color);
	border: 1px solid var(--background-light);
	border-top: none;
	background-color: var(--background-light);
	border-radius: 0 0 8px 8px;
	padding: 2px 12px;
`;

export const Detail = styled.div`
	display: flex;
	font-size: 14px;
	justify-content: space-between;
	margin: 8px 0;
`;
