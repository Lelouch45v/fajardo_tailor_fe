import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Home from './Pages/Home';
import AllProducts from './Pages/AllProducts';
import Curtains from './Pages/Curtains';
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';
import Blankets from './Pages/Blankets';
import BestSellers from './Pages/BestSellers';
import BedSheet from './Pages/BedSheet';
import AddToCart from './Pages/AddToCart';
import NewArrival from './Pages/NewArrival';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route all-products path='./allproducts' element={<AllProducts/>}/>
          <Route add-to-cart path='./' element={<AddToCart/>}/>
          <Route curtains path='./' element={<Curtains/>}/>
          <Route collection path='./' element={<Collection/>}/>
          <Route cart path='./' element={<Cart/>}/>
          <Route blankets path='./' element={<Blankets/>}/>
          <Route best-sellers path='./' element={<BestSellers/>}/>
          <Route bed-sheet path='./' element={<BedSheet/>}/>
          <Route new-arrival path='./' element={<NewArrival/>}/>
          <Route page-one path='./' element={<Page1/>}/>
          <Route page-two path='./' element={<Page2/>}/>
          <Route page-three path='./' element={<Page3/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
