import React, { useState, useEffect } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import {
  Container,
  SlideContent,
  SlideText,
  SlideNav,
  SlideNavButton,
  SlideImage,
  SlideImageWrapper
} from "./styled";

//images
import bgImg from "../../assets/images/common/slide_main.jpg";
import slideImg1 from "../../assets/images/slide/legumes.jpg";
import slideImg2 from "../../assets/images/slide/macas.jpg";
import slideImg3 from "../../assets/images/slide/pimentas.jpg";

const showcases = [
  {img: slideImg1,text: `É hora de encher o kubico ou geleira do salo com produtos frescos. As ofertas actuais dos produtos TudoFresh deixam todos babados!`},

  {img: slideImg2 ,text:`Ficou curioso? Ligue! 
  Temos os produtos mais frescos e apetitosos que já comeste! Não perca!`},

  {img: slideImg3, text: `Os produtos TudoFresh são os mais saudáveis que procura. Fazemos entrega no seu kubiko, no salo... onde quiseres! Além disso, temos preços imbatíveis.`}
];

let interval;

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [hasAnimation, setHasAnimation] = useState(false);
  const [animDirection, setAnimDirection] = useState(false);

  clearInterval(interval);
  interval = setInterval(() => {
    console.log("interval");
    handleOnSlideChange(slideIndex + 1);
  }, 5000);

  const handleOnSlideChange = index => {
    // setHasAnimation(false);
    if (index === slideIndex) return;
    setHasAnimation(true);
    if (index > slideIndex) setAnimDirection(true);
    if (index < slideIndex) setAnimDirection(false);
    if (index < 0) return setSlideIndex(showcases.length - 1);
    if (index > showcases.length - 1) return setSlideIndex(0);
    setSlideIndex(index);
  };

  const handleAnimationEnd = () => {
    setHasAnimation(false);
  };

  //clean up
  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  return (
    <Container bg={bgImg}>
      <FaChevronCircleLeft
        tabIndex="0"
        onClick={() => handleOnSlideChange(slideIndex - 1)}
      />
      <SlideContent
        hasAnimation={hasAnimation}
        animDirection={animDirection}
        onAnimationEnd={handleAnimationEnd}
      >
        <SlideImageWrapper>
          <SlideImage src={showcases[slideIndex].img} alt="slide 1" />
        </SlideImageWrapper>
        <div>
          <SlideText>{showcases[slideIndex].text}</SlideText>
        </div>
      </SlideContent>
      <SlideNav>
        {showcases.map((_, i) => (
          <SlideNavButton
            key={i}
            active={i === slideIndex}
            onClick={() => handleOnSlideChange(i)}
          />
        ))}
      </SlideNav>
      <FaChevronCircleRight
        tabIndex="0"
        onClick={() => handleOnSlideChange(slideIndex + 1)}
      />
    </Container>
  );
};

export default SlideShow;
