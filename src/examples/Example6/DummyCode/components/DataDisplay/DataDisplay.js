import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import ContactItem from './ContactItem/ContactItem';
import { deleteContact } from '../../store/actions';
import { DataDisplayWrapper, FilterInput } from './DataDisplays.styles';

const DataDisplay = () => {
	const [searchValue, setSearchValue] = useState('');
	const [filteredList, setFilteredList] = useState([]);

	const debouncedSearchValue = useDebounce(searchValue, 1000);

	const dispatch = useDispatch();
	const deleteItem = (id) => dispatch(deleteContact(id));

	const contactList = useSelector((state) => state.contacts);

	useEffect(() => {
		setFilteredList(
			debouncedSearchValue.length > 0
				? contactList.filter((item) =>
						item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
				  )
				: contactList
		);
	}, [debouncedSearchValue, contactList]);

	const listDisplay = filteredList.map((item) => (
		<ContactItem
			key={item.id}
			onDelete={deleteItem}
			name={item.name}
			email={item.email}
			phone={item.phone}
			website={item.website}
			id={item.id}
		/>
	));

	return (
		<DataDisplayWrapper>
			<FilterInput
				placeholder='Filter...'
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
			/>
			{listDisplay}
		</DataDisplayWrapper>
	);
};

export default DataDisplay;
