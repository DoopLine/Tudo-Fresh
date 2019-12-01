import React from 'react';
import {FaFacebookSquare, FaInstagram, FaWhatsapp} from 'react-icons/fa';

import { Container, CopyRight, SocialIcons } from './styled';

const FooterBottom = () => {

    return (
        <Container>
            <CopyRight>
            2019 © TudoFresh todos os direitos reservados.
            </CopyRight>
            <SocialIcons>
                <FaFacebookSquare />
                <FaInstagram />
                <FaWhatsapp />
            </SocialIcons>
        </Container>
    );
}

export default FooterBottom;