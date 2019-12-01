import React from 'react';

import { Container } from './styled';

import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => {

    return (
        <Container>
            <FooterTop />
            <FooterBottom />
        </Container>
    );
}

export default Footer;