export const validateForm = (formValues) => {
	let errors = {};
	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

	if (!formValues.name) {
		errors.name = 'Name is required';
	}

	if (!formValues.email) {
		errors.email = 'Email address is required';
	} else if (!emailRegex.test(formValues.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!formValues.phone) {
		errors.phone = 'Phone number is required';
	} else if (!phoneRegex.test(formValues.phone)) {
		errors.phone = 'Phone number is invalid';
	}

	if (formValues.website) {
		if (!urlRegex.test(formValues.website)) {
			errors.website = 'URL is invalid';
		}
	}

	return errors;
};
