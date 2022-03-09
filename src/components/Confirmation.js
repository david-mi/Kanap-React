// LIBRARIES
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// CONTEXT
import GlobalContext from '../Context';

// CSS
import '../styles/confirmation.css';

const Confirmation = () => {

  const { orderId } = useParams();

  const { sucessOrder } = useContext(GlobalContext);

  console.log(sucessOrder);

  useEffect(() => {
    if (sucessOrder) localStorage.clear();
  }, [sucessOrder]);

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="confirmation">
          {sucessOrder
            ? <p>Commande validée ! <br />Votre numéro de commande est : <span id="orderId">{orderId}</span></p>
            : <h1>Vous n'avez rien commandé</h1>
          }
        </div>
      </div>
    </main>
  );
};

export default Confirmation;