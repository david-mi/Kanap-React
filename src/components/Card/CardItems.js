const CardItem = ({ data }) => {

  const { altTxt, name, price, imageUrl, quantity, color, id, mergeData, setMergeData } = data;

  const addToBasket = (elem) => localStorage.setItem('basket', JSON.stringify(elem));

  const handleQuantity = (e) => {
    const mergeDataCopy = [...mergeData];
    const value = Number(e.target.value);
    const find = mergeDataCopy.find(elem => elem.id === id && elem.color === color);
    find.quantity = value;
    setMergeData(mergeDataCopy);
    addToBasket(mergeDataCopy);
  };

  const handleRemove = () => {
    const filtered = mergeData.filter(elem => !(elem.id === id && elem.color === color));
    setMergeData(filtered);
    addToBasket(filtered);
  };

  return (
    <section id="cart__items">
      <article className="cart__item" data-id={id} data-color={color}>
        <div className="cart__item__img">
          <img src={imageUrl} alt={altTxt} />
        </div>
        <div className="cart__item__content">
          <div className="cart__item__content__description">
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{price * quantity}€</p>
          </div>
          <div className="cart__item__content__settings">
            <div className="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input
                type="number"
                className="itemQuantity"
                name="itemQuantity"
                min="1"
                max="100"
                defaultValue={quantity}
                onChange={handleQuantity}
              />
            </div>
            <div className="cart__item__content__settings__delete">
              <p className="deleteItem" onClick={handleRemove}>Supprimer</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CardItem;