// LIBRARIES
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// APIDATA
import { apiKanaps } from '../../data/apiData';
import ProductItem from './ProductItem';

const Product = () => {

  const { id } = useParams();

  const [kanapData, setKanapData] = useState(null);

  useEffect(() => {

    const getOneKanap = async () => {
      const res = await axios.get(apiKanaps + id);
      const { data } = res;
      setKanapData(data);
    };

    getOneKanap();

  }, [id]);

  return (
    kanapData && (
      <main className="limitedWidthBlockContainer">
        <div className="limitedWidthBlock">
          <section className="item">
            <ProductItem data={{ ...kanapData }} />
          </section>
        </div>
      </main>
    )
  );
};

export default Product;