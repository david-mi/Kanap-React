// LIBRARIES
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HomeItem = ({ data }) => {

  const { _id, name, imageUrl, description, altTxt, setCounter } = data;

  const [picture, setPicture] = useState(null);

  const randomPicture = () => {
    const arr = Object.keys(imageUrl);
    const { length } = arr;
    const nb = Math.round(Math.random() * (length - 1));
    const img = imageUrl[arr[nb]];
    setPicture(img);
  };

  useEffect(() => {
    const arr = Object.keys(imageUrl);
    const { length } = arr;
    const nb = Math.round(Math.random() * (length - 1));
    const img = imageUrl[arr[nb]];
    setPicture(img);
  }, []);

  return (
    <NavLink to={`/Kanap-React/product/${_id}`}>
      <article>
        <img src={picture} alt={altTxt} onLoad={() => setCounter(e => e + 1)} />
        <h3 className="productName">{name}</h3>
        <p className="productDescription">{description}</p>
      </article>
    </NavLink>
  );
};

export default HomeItem;