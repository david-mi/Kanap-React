// LIBRARIES  
import { useState, useEffect } from 'react';
import axios from 'axios';

// APIDATA
import { apiKanaps } from '../../data/apiData';

// COMPONENTS
import HomeItem from './HomeItem';

const Home = () => {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {

    const getData = async () => {
      const res = await axios.get(apiKanaps);
      const { data } = res;
      setApiData(data);
      console.log(data);
    };

    getData();

  }, []);


  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock">
        <div className="titles">
          <h1>Nos produits</h1>
          <h2>Une gamme d'articles exclusifs</h2>
        </div>
        <section className="items" id="items">
          {apiData && apiData.map((elem, idx) => <HomeItem key={idx} data={{ ...elem }} />)}
        </section>
      </div>
    </main>
  );
};

export default Home;