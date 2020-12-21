import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Form } from './DataInsert.styles';
import Input from './Input/Input';
import Modal from './Modal/Modal';
import { validateForm } from './validateForm';
import { addContact } from '../../store/actions';
import {
	PrimaryButton,
	DataInsertWrapper,
	ButtonWrapper,
} from './DataInsert.styles';

const initialFormState = {
	name: '',
	email: '',
	phone: '',
	website: '',
};

const DataInsert = () => {
	const dispatch = useDispatch();
	const [darkMode] = useDarkMode();
	const [showModal, setShowModal] = useState(false);
	const [
		formValues,
		formErrors,
		handleChange,
		handleSubmit,
		isSubmitting,
	] = useForm(initialFormState, submitForm, validateForm);

	const hideModal = () => setShowModal(false);
	const displayModal = () => setShowModal(true);

	const modalRef = useRef();
	useOnClickOutside(modalRef, hideModal);

	function submitForm() {
		dispatch(addContact(formValues));
	}

	return (
		<DataInsertWrapper>
			<PrimaryButton onClick={displayModal} darkMode={darkMode}>
				Add new contact
			</PrimaryButton>
			{showModal && (
				<Modal closeModal={hideModal} ref={modalRef}>
					<Form onSubmit={handleSubmit}>
						<Input
							name='name'
							label='Name'
							value={formValues.name}
							onChange={handleChange}
							error={formErrors.name}
						/>
						<Input
							name='email'
							label='Email'
							type='email'
							value={formValues.email}
							onChange={handleChange}
							error={formErrors.email}
						/>
						<Input
							name='phone'
							label='Phone'
							value={formValues.phone}
							onChange={handleChange}
							error={formErrors.phone}
						/>
						<Input
							name='website'
							label='Website'
							value={formValues.website}
							onChange={handleChange}
							error={formErrors.website}
						/>
						<ButtonWrapper>
							<PrimaryButton type='submit' darkMode={darkMode}>
								{isSubmitting ? 'Submitting..' : 'Add'}
							</PrimaryButton>
						</ButtonWrapper>
					</Form>
				</Modal>
			)}
		</DataInsertWrapper>
	);
};

export default DataInsert;
