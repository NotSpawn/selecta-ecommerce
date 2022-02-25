import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

function getProducts() {
  return new Promise(async (resolve, reject) => {
    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(products);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export { getProducts };
