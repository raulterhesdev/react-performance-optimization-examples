import { useEffect, useState } from 'react';
import { useKeyPress } from './useKeyPress';

export const useForm = (initialState, submitForm, validateForm) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [submiting, setSubmiting] = useState(false);

	useEffect(() => {
		if (submiting && Object.keys(errors).length === 0) {
			submitForm();
			setSubmiting(false);
			setValues(initialState);
		}
	}, [submiting, submitForm, errors, initialState]);

	const handleChange = (e) => {
		e.persist();
		const currentErorrs = errors;
		delete currentErorrs[e.target.name];
		setErrors(currentErorrs);
		setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(values));
		setSubmiting(true);
	};

	useKeyPress('Enter', handleSubmit);

	return [values, errors, handleChange, handleSubmit, submiting];
};
