import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";

function EditItemContainer() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [defaultImage, setDefaultImage] = useState();
  const [image, setImage] = useState();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(Number(e.target.value));
  const handleStockChange = (e) => setStock(Number(e.target.value));
  const handleImageChange = (e) => setImage(e.target.files[0]);

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((doc) => {
        const document = doc.data();
        setTitle(document.title);
        setCategory(document.category);
        setDescription(document.description);
        setPrice(document.price);
        setStock(document.stock);
        setDefaultImage(document.picture);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "products", id);

    let newImage = null;

    if (typeof image !== "undefined") {
      const storage = getStorage();
      const imageName = (+new Date()).toString(36);
      const storageRef = ref(storage, `products/${imageName}`);

      const uploadTask = await uploadBytes(storageRef, image);
      newImage = await getDownloadURL(uploadTask.ref);
    }

    const newProduct = {
      title,
      description,
      category,
      price,
      stock,
      picture: newImage ? newImage : defaultImage,
    };

    updateDoc(docRef, newProduct)
      .then(() => {
        console.log("successfully edited", doc.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="add-item">
      <form id="contact" onSubmit={onSubmit}>
        <h3>Edit Product</h3>
        <fieldset>
          <input
            placeholder="Title"
            value={title}
            type="text"
            onChange={handleTitleChange}
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Category"
            value={category}
            type="text"
            onChange={handleCategoryChange}
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Price"
            value={price}
            type="number"
            onChange={handlePriceChange}
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Stock"
            value={stock}
            type="number"
            onChange={handleStockChange}
            tabindex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Product image"
            type="file"
            onChange={handleImageChange}
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Product description here..."
            value={description}
            onChange={handleDescriptionChange}
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default EditItemContainer;
