import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

export const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const StyledModal = styled.div`
	background-color: var(--background-color);
	box-shadow: 0 4px 8px var(--shadow-color);
	position: relative;
	padding: 52px 70px;
`;

export const CloseButton = styled.span`
	position: absolute;
	top: 6px;
	right: 12px;
	font-size: 24px;
	cursor: pointer;
	color: var(--secondary-color);

	&:hover {
		color: var(--primary-color);
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin: 8px 0;

	p {
		color: red;
		padding-top: 4px;
		padding-left: 4px;
	}
`;

export const StyledInput = styled.input`
	border: none;
	outline: none;
	padding: var(--padding-large) var(--padding-extra);
	background-color: var(--background-light);
	color: var(--primary-color);
	border: 2px solid var(--background-light);
	border-radius: 8px;
	min-width: 300px;
	font-size: 14px;

	&:focus {
		border: 2px solid var(--accent-color);
	}

	${({ error }) => (error ? 'border: 2px solid var(--error)' : null)};
`;

export const StyledLabel = styled.label`
	color: var(--primary-color);
	margin: 0px 0px 6px 4px;
	font-size: 16px;
`;

export const DataInsertWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 16px;
`;

export const ButtonWrapper = styled.div`
	margin-top: 44px;
`;

export const PrimaryButton = styled.button`
	border: none;
	outline: none;
	background-color: var(--accent-color);
	color: var(--white);
	padding: var(--padding-large);
	min-width: 150px;
	border-radius: 8px;
	box-shadow: 0 4px 8px var(--light-shadow-color);

	&:hover {
		background-color: var(--accent-transparent);
		box-shadow: none;
	}
`;
