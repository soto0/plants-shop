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

  return (
    <div className='App'>
      {
        windowSize <= 1000 ?
          <ShowMobile /> :
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<MainPage />}>
                <Route path='/New-Arrivals' />
                <Route path='/Sale' />
                <Route path='/House-Plants' />
                <Route path='/Potter-Plants' />
                <Route path='/Seeds' />
                <Route path='/Small-Plants' />
                <Route path='/Big-Plants' />
                <Route path='/Succulents' />
                <Route path='/Terrariums' />
                <Route path='/Gardening' />
                <Route path='/Accessions' />
                <Route path='/Small' />
                <Route path='/Medium' />
                <Route path='/Large' />
                <Route path='/Price/:price' />
                <Route path='/Login' />
                <Route path='/Register' />
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
