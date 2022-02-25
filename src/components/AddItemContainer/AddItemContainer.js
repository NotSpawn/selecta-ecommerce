import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import "./AddItemContainer.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function AddItemContainer() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [image, setImage] = useState();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(Number(e.target.value));
  const handleStockChange = (e) => setStock(Number(e.target.value));
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (![title, category, description].some((field) => field === "")) {
      let pictureUrl = "https://via.placeholder.com/600";

      const productCollection = collection(db, "products");

      if (typeof image !== "undefined") {
        const storage = getStorage();
        const imageName = (+new Date()).toString(36);
        const storageRef = ref(storage, `products/${imageName}`);

        const uploadTask = await uploadBytes(storageRef, image);
        pictureUrl = await getDownloadURL(uploadTask.ref);
      }

      const newProduct = {
        title,
        description,
        category,
        price,
        stock,
        picture: pictureUrl,
      };

      addDoc(productCollection, newProduct)
        .then((doc) => {
          console.log("added successfully", doc.id);
        })
        .catch((error) => {
          console.log(error);
        });

      //reset form
      setCategory("");
      setDescription("");
      setTitle("");
    } else {
      console.log("Empty fields");
    }
  };
  return (
    <div className="add-item">
      <form id="contact" onSubmit={onSubmit}>
        <h3>Add Product</h3>
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

export default AddItemContainer;
