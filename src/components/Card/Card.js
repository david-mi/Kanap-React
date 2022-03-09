// LIBRARIES
import { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS
import CardItem from './CardItems';
import CardOrder from './CardOrder';

// CSS
import '../../styles/cart.css';

// APIDATA
import { apiKanaps } from '../../data/apiData';

const Card = () => {

  const [basket, setBasket] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [mergeData, setMergeData] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [kanapIds, setKanapIds] = useState(null);

  const getBasket = () => JSON.parse(localStorage.getItem('basket')) || [];


  useEffect(() => setBasket(getBasket()), []);

  useEffect(() => {

    if (basket.length) {
      console.log('ptdr');
      const getapiData = async () => {
        const res = await axios.get(apiKanaps);
        const { data } = res;
        setApiData(data);
      };

      getapiData();

    }
  }, [basket]);

  useEffect(() => {

    if (apiData) {
      const findKanap = (id) => apiData.find(el => el._id === id);
      const result = basket.map(elem => ({ ...elem, ...findKanap(elem.id) }));
      setMergeData(result);
    }

  }, [apiData]);

  useEffect(() => {

    if (mergeData) {
      const calcTotalPrice = mergeData.reduce((acc, el) => {
        const { price, quantity } = el;
        const calc = price * quantity;
        return acc + calc;
      }, 0);

      const calcTotalQuantity = mergeData.reduce((acc, el) => el.quantity + acc, 0);
      const idKanaps = mergeData.map(elem => elem.id);
      setKanapIds(idKanaps);
      setTotalPrice(calcTotalPrice);
      setTotalQuantity(calcTotalQuantity);
    }

  }, [mergeData]);

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="cartAndFormContainer" id="cartAndFormContainer">
          <h1>{mergeData ? "Votre panier" : "Panier Vide"}</h1>
          {mergeData && (
            <section className="cart">
              {mergeData.map((elem, idx) => <CardItem data={{ ...elem, mergeData, setMergeData }} key={idx} />)}
              <div className="cart__price">
                <p>Total (<span id="totalQuantity">{totalQuantity}</span> articles) : <span id="totalPrice"></span>{totalPrice} €</p>
              </div>
              <CardOrder kanapIds={kanapIds} />
            </section>
          )}
        </div>
      </div>
    </main>
  );

};

export default Card;