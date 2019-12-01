import React from "react";

import { Container } from "./styled";

import ProductCard from "../../../components/ProductCard";

//Images
import cocoImg from "../../../assets/images/frutas/COCO.jpg";
import abacateImg from "../../../assets/images/frutas/Abacate.jpeg";
import mangaImg from "../../../assets/images/frutas/11ss_2048x2048.jpg";
import goiabaImg from "../../../assets/images/frutas/20180813061534_9414a8f5b810972c3c9a0e2860c07532_1714799527_img_produtos.jpg";
import maracujaImg from "../../../assets/images/frutas/maracuja-cke.jpg";
import melanciaImg from "../../../assets/images/frutas/watermelon2.jpg";

const products = [
  { img: mangaImg, title: "Manga", price: 100 },
  { img: cocoImg, title: "Coco", price: 250 },
  { img: abacateImg, title: "Abacate", price: 150 },
  { img: mangaImg, title: "Manga", price: 100 },
  { img: goiabaImg, title: "Goiaba", price: 250 },
  { img: mangaImg, title: "Manga", price: 100 },
  { img: mangaImg, title: "Manga", price: 100 },
  { img: cocoImg, title: "Coco", price: 250 },
  { img: abacateImg, title: "Abacate", price: 150 },
  { img: maracujaImg, title: "Maracuja", price: 350 },
  { img: mangaImg, title: "Manga", price: 100 },
  { img: melanciaImg, title: "Melancia", price: 550 },
  { img: goiabaImg, title: "Goiaba", price: 250 },
  { img: melanciaImg, title: "Melancia", price: 550 },
  { img: maracujaImg, title: "Maracuja", price: 350 }
];

const ProductsList = () => {
  return (
    <Container>
      {products.map((prod, i) => ( 
        <ProductCard
          key={i}
          title={prod.title}
          price={prod.price}
          img={prod.img}
        />
      ))}
    </Container>
  );
};

export default ProductsList;
