// LIBRARIES
import { useState, useEffect } from 'react';

// CSS
import '../../styles/product.css';

const ProductItem = ({ data }) => {

  const { name, colors, description, imageUrl, price, altTxt } = data;
  const id = data._id;

  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);

  const addColor = (elem) => {
    const clr = elem.target.value;
    setColor(clr);
  };

  const addQuantity = (elem) => {
    const qty = Number(elem.target.value);
    setQuantity(qty);
  };

  const getBasket = () => JSON.parse(localStorage.getItem('basket')) || [];

  const addToBasket = (elem) => localStorage.setItem('basket', JSON.stringify(elem));

  const addKanap = () => {
    if (color && quantity) {
      const basket = getBasket();
      const find = basket.find(product => product.id === id && product.color === color);
      find
        ? find.quantity = quantity
        : basket.push({ quantity, color, id });
      addToBasket(basket);

      find
        ? alert(`Quantité du canapé ${name} ${color} modifié : ${quantity}`)
        : alert(`Canapé ${name} ${color} x${quantity} ajouté au panier`);
    }
    else {
      alert('Veuillez choisir une couleur et une quantité pour votre produit');
    }

  };

  useEffect(() => {
    if (color) {
      setImage(imageUrl[color]);
    } else {
      setImage(imageUrl[colors[0]]);
    }
  }, [color]);

  return (
    <article>
      <div className="item__img">
        <img src={image} alt={altTxt} />
      </div>
      <div className="item__content">

        <div className="item__content__titlePrice">
          <h1 id="title">{name}</h1>
          <p>Prix : <span id="price">{price}</span>€</p>
        </div>

        <div className="item__content__description">
          <p className="item__content__description__title">Description :</p>
          <p id="description">{description}</p>
        </div>

        <div className="item__content__settings">
          <div className="item__content__settings__color">
            <label htmlFor="color-select">Choisir une couleur :</label>
            <select name="color-select" id="colors" onChange={addColor}>
              {colors.map((clr, idx) => (
                <option key={idx} value={clr}>{clr}</option>
              ))}
            </select>
          </div>

          <div className="item__content__settings__quantity">
            <label htmlFor="itemQuantity">Nombre d'article(s) (1-100) :</label>
            <input onChange={addQuantity} type="number" name="itemQuantity" min="1" max="100" defaultValue="1" id="quantity" />
          </div>
        </div>
        <div className="item__content__addButton">
          <button onClick={addKanap} id="addToCart">Ajouter au panier</button>
        </div>

      </div>
    </article >
  );
};

export default ProductItem;