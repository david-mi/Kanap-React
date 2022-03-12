// LIBRARIES
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// COMPONENTS & PAGES
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Card from './components/Card/Card';
import Confirmation from './components/Confirmation';

// CONTEXT
import GlobalContext from './Context';

const App = () => {

  const [sucessOrder, setSucessOrder] = useState(false);

  useEffect(() => {
    const { hostname } = window.location;
    console.log(hostname);
  }, []);

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ sucessOrder, setSucessOrder }}>
        <Header />
        <Routes>
          <Route path='/Kanap-React/' element={<Home />} />
          <Route path='/Kanap-React/product/:id' element={<Product />} />
          <Route path='/Kanap-React/card' element={<Card />} />
          <Route path='/Kanap-React/confirmation/:orderId' element={<Confirmation />} />
          <Route path="*" element={<Navigate replace to="/Kanap-React/" />}></Route>
        </Routes>
        <Footer />
      </GlobalContext.Provider>
    </BrowserRouter>
  );
};

export default App;