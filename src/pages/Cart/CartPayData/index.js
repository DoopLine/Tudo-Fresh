import React from 'react';
import { AiFillRightCircle } from 'react-icons/ai';

import { Container, Header, Image, InfoContent } from './styled';

import ActionBox from "../../../components/ActionBox";
import Button from "../../../components/Button";

import orange from "../../../assets/svg/orange.svg";

const CartPayData = () => {
    return (
        <Container>
            <Header>
                <AiFillRightCircle />
                <ActionBox text="Nome de Usuário" type="user" title="Usuário"/>
            </Header>
            <Image src={orange} alt="cesta"/>
            <InfoContent>
                <span>
                    <p>1.000.000 AOA - total</p>
                    <small>14% - Tax</small>
                </span>
                <p>1.140.000 AOA - total real</p>
            </InfoContent>
            <Button style={{margin: '1rem 0', width: '100%'}}>Finalizar</Button>
        </Container>
    );
}

export default CartPayData;
