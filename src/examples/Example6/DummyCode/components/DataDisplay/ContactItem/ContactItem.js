import React, { useState } from 'react';
import {
	ContactItemWrapper,
	ContactDetails,
	ContactHeader,
	ExpandButton,
	DeleteButton,
	Name,
	Detail,
	ButtonWrapper,
} from '../DataDisplays.styles';

const ContactItem = ({ name, onDelete, id, email, phone, website }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<ContactItemWrapper>
			<ContactHeader>
				<Name>{name}</Name>
				<ButtonWrapper>
					<ExpandButton onClick={() => setExpanded((prev) => !prev)}>
						{expanded ? '-' : '+'}
					</ExpandButton>
					<DeleteButton
						onClick={() => {
							onDelete(id);
						}}
					>
						&times;
					</DeleteButton>
				</ButtonWrapper>
			</ContactHeader>
			<ContactDetails expanded={expanded}>
				<Detail>
					<span>Phone:</span>
					<span>{phone}</span>
				</Detail>
				<Detail>
					<span>Email:</span>
					<span>{email}</span>
				</Detail>
				<Detail>
					<span>Website:</span>
					<span>{website}</span>
				</Detail>
			</ContactDetails>
		</ContactItemWrapper>
	);
};

export default ContactItem;
