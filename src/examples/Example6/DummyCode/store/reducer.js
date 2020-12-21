import { ADD_CONTACT, DELETE_CONTACT } from './actionTypes';

const localStorageKey = 'contact-list';

const initialState = {
	contacts: JSON.parse(localStorage.getItem(localStorageKey)) || [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_CONTACT:
			const updatedContacts = [
				...state.contacts,
				{ ...payload, id: Math.random() * 100 },
			];
			localStorage.setItem(localStorageKey, JSON.stringify(updatedContacts));
			return { ...state, contacts: updatedContacts };
		case DELETE_CONTACT:
			const update = state.contacts.filter((item) => item.id !== payload);
			localStorage.setItem(localStorageKey, JSON.stringify(update));
			return { ...state, contacts: update };
		default:
			return state;
	}
};
