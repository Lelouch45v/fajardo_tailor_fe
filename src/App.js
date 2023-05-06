import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Home from './Pages/Home';
import AllProducts from './Pages/AllProducts';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route all-products path='./' element={<AllProducts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
