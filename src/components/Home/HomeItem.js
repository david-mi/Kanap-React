// LIBRARIES
import { NavLink } from 'react-router-dom';

const HomeItem = ({ data }) => {

  const { _id, name, imageUrl, description, altTxt, setCounter } = data;

  return (
    <NavLink to={`/product/${_id}`}>
      <article>
        <img src={imageUrl} alt={altTxt} onLoad={() => setCounter(e => e + 1)} />
        <h3 className="productName">{name}</h3>
        <p className="productDescription">{description}</p>
      </article>
    </NavLink>
  );
};

export default HomeItem;