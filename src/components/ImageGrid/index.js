import React from 'react';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

import { Container, GridRow, ContentCell, ImageCell, IconsWrapper } from './styled';

//Images
import frutasImg from "../../assets/images/common/tijela_frutas.jpg";
import servingTrayImg from "../../assets/images/common/serving_tray.jpg";
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
                    <p>Nas Redes Sociais</p>
                </ContentCell>
                <ImageCell>
                    <img className="flex-img" src={frutasImg} alt="teste" />
                </ImageCell>
            </GridRow>
            <GridRow>
                <ImageCell>
                    <img className="flex-img" src={servingTrayImg} alt="teste" />
                </ImageCell>
                <ImageCell>
                    <img className="flex-img" src={charcutariaImg} alt="teste" />
                </ImageCell>
            </GridRow>
        </Container>
    );
}

export default ImageGrid;
