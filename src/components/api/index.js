import product1a from "../../assets/images/product_1a.jpg";
import product2a from "../../assets/images/product_2a.jpg";
import product3a from "../../assets/images/product_3a.jpg";
import product4a from "../../assets/images/product_4a.jpg";
import product5a from "../../assets/images/product_5a.jpg";
import product6a from "../../assets/images/product_6a.jpg";
import product7a from "../../assets/images/product_7a.jpg";
import product8a from "../../assets/images/product_8a.jpg";
import product9a from "../../assets/images/product_9a.jpg";
import product10a from "../../assets/images/product_10a.jpg";
import product11a from "../../assets/images/product_11a.jpg";
import product12a from "../../assets/images/product_12a.jpg";
import product13a from "../../assets/images/product_13a.jpg";

const products = [
  {
    id: 1,
    title: "Remera rebatible ATLANTA",
    price: 20,
    picture: product1a,
    category: "remeras",
  },
  {
    id: 2,
    title: "Sweater oversized PHILIPA",
    price: 50,
    picture: product2a,
    category: "sweaters",
  },
  {
    id: 3,
    title: "Blazer scuba CREPE MAO",
    price: 70,
    picture: product3a,
    category: "sacos",
  },
  {
    id: 4,
    title: "Camisa LINO SPANDEX",
    price: 45,
    picture: product4a,
    category: "camisas",
  },
  {
    id: 5,
    title: "REMERA BE TRUE",
    price: 25,
    picture: product5a,
    category: "remeras",
  },
  {
    id: 6,
    title: "REMERA CHICAS ACUARELLA",
    price: 25,
    picture: product6a,
    category: "remeras",
  },
  {
    id: 7,
    title: "REMERON AMPLIO ARDAITZ",
    price: 35,
    picture: product7a,
    category: "remeras",
  },
  {
    id: 8,
    title: "CAMISA POPLIN CANESU MARSHALL",
    price: 60,
    picture: product8a,
    category: "camisas",
  },
  {
    id: 9,
    title: "BLUSA LINO SPANDEX FRUNCES LYNX",
    price: 45,
    picture: product9a,
    category: "camisas",
  },
  {
    id: 10,
    title: "MAXI CAMISA FIBRANA GALANTIS",
    price: 40,
    picture: product10a,
    category: "camisas",
  },
  {
    id: 11,
    title: "SACO CORTO CON BORDE NUNO",
    price: 35,
    picture: product11a,
    category: "sacos",
  },
  {
    id: 12,
    title: "MEDIA POLERA MORLEY MALENA",
    price: 25,
    picture: product12a,
    category: "sweaters",
  },
  {
    id: 13,
    title: "MEDIA POLERA AMPLIA CON RAYAS Y TRENZAS ORMOND",
    price: 30,
    picture: product13a,
    category: "sweaters",
  },
];

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });
}

export { getProducts };
