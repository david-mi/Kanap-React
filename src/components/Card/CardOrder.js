// LIBRARIES
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// APIDATA
import { apiOrder } from '../../data/apiData';

// SCHEMAS
import schema from '../../YupSchemas/OrderValidation';

// CONTEXT
import GlobalContext from '../../Context';

const CardOrder = ({ kanapIds }) => {

  const { setSucessOrder } = useContext(GlobalContext);

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const [apiError, setApiError] = useState(null);

  const sendForm = async (contact) => {

    try {
      const res = await axios.post(apiOrder, { contact, products: kanapIds });
      const { data } = res;
      setSucessOrder(true);
      navigate(`/Kanap-React/confirmation/${data.orderId}`);
    }
    catch (err) {
      setApiError("Une erreur s'est produite");
      setTimeout(() => setApiError(null), 2000);
    }

  };

  return (
    <div className="cart__order">
      <form className="cart__order__form" onSubmit={handleSubmit(sendForm)}>
        <div className="cart__order__form__question">
          <label htmlFor="firstName">Prénom: </label>
          <input {...register('firstName')} id="firstName" />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className="cart__order__form__question">
          <label htmlFor="lastName">Nom: </label>
          <input {...register('lastName')} id="lastName" />
          <p>{errors.lastName?.message}</p>
        </div>
        <div className="cart__order__form__question">
          <label htmlFor="address">Adresse: </label>
          <input {...register('address')} id="address" />
          <p>{errors.address?.message}</p>
        </div>
        <div className="cart__order__form__question">
          <label htmlFor="city">Ville: </label>
          <input {...register('city')} id="city" />
          <p>{errors.city?.message}</p>
        </div>
        <div className="cart__order__form__question">
          <label htmlFor="email">Email: </label>
          <input {...register('email')} id="email" />
          <p>{errors.email?.message}</p>
        </div>
        <div className="cart__order__form__submit">
          <input
            type="submit"
            defaultValue="Commander !"
            id="order"
          />
        </div>
        <p style={{ textAlign: "center" }}>{apiError && apiError}</p>

      </form>
    </div>
  );

};

export default CardOrder;;