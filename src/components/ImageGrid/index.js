import React from 'react';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

import { Container, GridRow, ContentCell, ImageCell, IconsWrapper } from './styled';

//Images
import frutasImg from "../../assets/images/common/fruits_bow.jpg";
import bananaDisertImg from "../../assets/images/common/banana_disert.jpg";
import charcutariaImg from "../../assets/images/charcutaria/charcutaria.jpg";

const ImageGrid = () => {
    return (
        <Container>
            <GridRow>
                <ContentCell>
                    <IconsWrapper>
                        <FaInstagram />
                        <FaFacebookSquare />
                    </IconsWrapper>
                    <p>@Tudofresh</p>
                </ContentCell>
                <ImageCell>
                    <img className="flex-img" src={frutasImg} alt="teste" />
                </ImageCell>
            </GridRow>
            <GridRow>
                <ImageCell>
                    <img className="flex-img" src={bananaDisertImg} alt="teste" />
                </ImageCell>
                <ImageCell>
                    <img className="flex-img" src={charcutariaImg} alt="teste" />
                </ImageCell>
            </GridRow>
        </Container>
    );
}

export default ImageGrid;
