import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './pages/Main';
import Footer from './components/Footer/Footer';
import ProductPage from './pages/Product';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route path='/New-Arrivals'></Route>
            <Route path='/Sale'></Route>
            <Route path='/House-Plants'></Route>
            <Route path='/Potter-Plants'></Route>
            <Route path='/Seeds'></Route>
            <Route path='/Small-Plants'></Route>
            <Route path='/Big-Plants'></Route>
            <Route path='/Succulents'></Route>
            <Route path='/Terrariums'></Route>
            <Route path='/Gardening'></Route>
            <Route path='/Accessions'></Route>
            <Route path='/Small'></Route>
            <Route path='/Medium'></Route>
            <Route path='/Large'></Route>
            <Route path='/Price/:price'></Route>
            <Route path='/Login'></Route>
            <Route path='/Register'></Route>
          </Route>
          <Route path='/Product/:productId' element={<ProductPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
