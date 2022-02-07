import product1a from "../../assets/images/product_1a.jpg";
import product2a from "../../assets/images/product_2a.jpg";
import product3a from "../../assets/images/product_3a.jpg";
import product4a from "../../assets/images/product_4a.jpg";

const products = [
  {
    id: 1,
    title: "Remera rebatible ATLANTA",
    price: 20,
    picture: product1a,
  },
  {
    id: 2,
    title: "Sweater oversized PHILIPA",
    price: 50,
    picture: product2a,
  },
  {
    id: 3,
    title: "Blazer scuba CREPE MAO",
    price: 70,
    picture: product3a,
  },
  {
    id: 4,
    title: "Camisa LINO SPANDEX",
    price: 45,
    picture: product4a,
  },
];

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

export { getProducts };
