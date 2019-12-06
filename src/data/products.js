import cocoImg from "../assets/images/frutas/COCO.jpg";
import abacateImg from "../assets/images/frutas/Abacate.jpeg";
import mangaImg from "../assets/images/frutas/11ss_2048x2048.jpg";
import goiabaImg from "../assets/images/frutas/20180813061534_9414a8f5b810972c3c9a0e2860c07532_1714799527_img_produtos.jpg";
import maracujaImg from "../assets/images/frutas/maracuja-cke.jpg";
import melanciaImg from "../assets/images/frutas/watermelon2.jpg";
import mamaoImg from "../assets/images/frutas/8770_Ampliada.jpg";
import tamarindoImg from "../assets/images/frutas/tamarindo-cke.jpg";
import pitangaImg from "../assets/images/frutas/pitanga.png";
import melaoImg from "../assets/images/frutas/b7cddc80-ebc7-4d31-8329-4e3e14d99498.jpg";

const Product = (id, title, price, img, category) => ({
  id,
  title,
  price,
  img,
  category
});

const products = [
  Product("001", "Coco", 250, cocoImg, "fruit"),
  Product("002", "Abacate", 150, abacateImg, "fruit"),
  Product("003", "Manga", 100, mangaImg, "fruit"),
  Product("004", "Goiaba", 250, goiabaImg, "fruit"),
  Product("005", "Maracuja", 350, maracujaImg, "fruit"),
  Product("006", "Melancia", 550, melanciaImg, "fruit"),
  Product("007", "Mamão", 450, mamaoImg, "fruit"),
  Product("008", "Tamarindo", 150, tamarindoImg, "fruit"),
  Product("009", "pitangaImg", 550, pitangaImg, "fruit"),
  Product("010", "Melao", 500, melaoImg, "fruit"),
];



export const previewProject = products.slice(0, 5);
export default products;
