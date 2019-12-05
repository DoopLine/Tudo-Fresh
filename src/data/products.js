import cocoImg from "../assets/images/frutas/COCO.jpg";
import abacateImg from "../assets/images/frutas/Abacate.jpeg";
import mangaImg from "../assets/images/frutas/11ss_2048x2048.jpg";
import goiabaImg from "../assets/images/frutas/20180813061534_9414a8f5b810972c3c9a0e2860c07532_1714799527_img_produtos.jpg";
import maracujaImg from "../assets/images/frutas/maracuja-cke.jpg";
import melanciaImg from "../assets/images/frutas/watermelon2.jpg";

const products = [
  { img: cocoImg, title: "Coco", price: 250, id: "001", category: "fruit" },
  {
    img: abacateImg,
    title: "Abacate",
    price: 150,
    id: "002",
    category: "fruit"
  },
  { img: mangaImg, title: "Manga", price: 100, id: "003", category: "fruit" },
  { img: goiabaImg, title: "Goiaba", price: 250, id: "004", category: "fruit" },
  {
    img: maracujaImg,
    title: "Maracuja",
    price: 350,
    id: "005",
    category: "fruit"
  },
  {
    img: melanciaImg,
    title: "Melancia",
    price: 550,
    id: "006",
    category: "fruit"
  }
];

export default products;
