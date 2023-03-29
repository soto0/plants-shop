import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Main';
import ProductPage from './pages/Product';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShoppingCartPage from './pages/ShoppingCart';
import CheckoutPage from './pages/Checkout';
import NotFound from './components/NotFound/NotFound';
import ShowMobile from './components/ShowMobile/ShowMobile';
import { useEffect, useState } from 'react';
import Popup from './components/Popups/Popup';
import Goods from './components/Main/Goods/Goods';

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const element = '<Goods Plants={undefined} GetPlants={undefined} SetNewArrivals={undefined} SetSale={undefined} PriceCount={undefined} />';

  return (
    <div className='App'>
      {
        windowSize <= 1000 ?
          <ShowMobile /> :
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<MainPage />}>
                <Route path='/New-Arrivals' element={element} />
                <Route path='/Sale' element={element} />
                <Route path='/House-Plants' element={element} />
                <Route path='/Potter-Plants' element={element} />
                <Route path='/Seeds' element={element} />
                <Route path='/Small-Plants' element={element} />
                <Route path='/Big-Plants' element={element} />
                <Route path='/Succulents' element={element} />
                <Route path='/Terrariums' element={element} />
                <Route path='/Gardening' element={element} />
                <Route path='/Accessions' element={element} />
                <Route path='/Small' element={element} />
                <Route path='/Medium' element={element} />
                <Route path='/Large' element={element} />
                <Route path='/Price/:price' />
                <Route path='/Login' element={<Popup PopupActive={false} OnClickPopupButton={undefined} Error={undefined} User={undefined} />} />
                <Route path='/Register' element={<Popup PopupActive={false} OnClickPopupButton={undefined} Error={undefined} User={undefined} />} />
              </Route>
              <Route path='/Product/:productId' element={<ProductPage />} />
              <Route path='/Shopping-Cart' element={<ShoppingCartPage />} />
              <Route path='/Checkout' element={<CheckoutPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      }
    </div>
  );
};

export default App;
