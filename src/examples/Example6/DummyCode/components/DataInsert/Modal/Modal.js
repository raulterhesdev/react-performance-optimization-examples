import React from 'react';
import { StyledModal, CloseButton, ModalWrapper } from '../DataInsert.styles';

const Modal = React.forwardRef(({ closeModal, children }, modalRef) => {
	return (
		<ModalWrapper>
			<StyledModal ref={modalRef}>
				<CloseButton onClick={closeModal}>&times;</CloseButton>
				{children}
			</StyledModal>
		</ModalWrapper>
	);
});

export default Modal;
