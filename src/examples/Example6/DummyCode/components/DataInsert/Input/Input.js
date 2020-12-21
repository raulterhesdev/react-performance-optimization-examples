import React from 'react';
import { StyledInput, StyledLabel, InputWrapper } from '../DataInsert.styles';

const Input = ({ name, label, type = 'text', value = '', onChange, error }) => {
	return (
		<InputWrapper>
			<StyledLabel htmlFor={name}>{label}:</StyledLabel>
			<StyledInput
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				error={error}
			/>
			{error && <p>{error}</p>}
		</InputWrapper>
	);
};

export default Input;
