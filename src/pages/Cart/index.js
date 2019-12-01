import React from 'react';

import { Container } from './styled';

import CartProducts from './CartProducts';
import CartPayData from './CartPayData';

const Cart = () => {
    return (
        <Container>
           <CartProducts />
           <CartPayData />
        </Container>
    );
}

export default Cart;
