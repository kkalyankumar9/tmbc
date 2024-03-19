import React from 'react'
import { Routes,Route } from 'react-router-dom';
import MainComponent from '../Components/MainOne';
import Products from '../Components/ProductPage.jsx/Products';
import ProductCards from '../Components/PoductCards/ProductCards';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productcards' element={<ProductCards/>}/>
    </Routes>
  )
}

export default AllRoutes