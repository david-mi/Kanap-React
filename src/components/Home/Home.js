// LIBRARIES  
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ScaleLoader } from "react-spinners";

// APIDATA
import { apiKanaps } from '../../data/apiData';

// COMPONENTS
import HomeItem from './HomeItem';

const Home = () => {

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [counter, setCounter] = useState(0);


  useEffect(() => {

    (async () => {
      const res = await axios.get(apiKanaps);
      const { data } = res;
      setApiData(data);
      setLoading(false);
    })();

  }, []);

  useEffect(() => {
    setImagesLoading(true);
    console.log(counter);
    if (apiData && counter === apiData.length) {
      setImagesLoading(false);
    }
  }, [counter]);

  const cssStyle = `
  display: block;
  position: absolute;
  inset: 0px;
  background-color: #3498db;
  text-align: center;
  `;

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock">
        <div className="titles">
          <h1>Nos produits</h1>
          <h2>Une gamme d'articles exclusifs</h2>
        </div>
        <section className="items" id="items" style={{ position: 'relative' }}>
          {imagesLoading && <ScaleLoader color='white' width="10px" height="50px" css={cssStyle} />}
          {!loading && apiData.map((elem, idx) => <HomeItem key={idx} data={{ ...elem, setCounter }} />)}
        </section>
      </div>
    </main>
  );
};

export default Home;