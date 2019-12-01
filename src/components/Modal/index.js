import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container, Backdrop, Content, CloseBtn } from './styled';

const Modal = ({children, onClose}) => {
    return (
        <Container>
            <Backdrop onClick={onClose} />
            <Content>
                <CloseBtn onClick={onClose}>
                    <FiXCircle />
                </CloseBtn>
                {children}
            </Content>
        </Container>
    );
}

export default Modal;
