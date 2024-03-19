import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Products from '../Components/ProductPage/Products';
import MainComponent from '../Components/MainComponent/MainOne';
import ProductCards from '../Components/PoductCards/ProductCards';
import SinglePage from '../Components/Singlepage/SinglePage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productcards' element={<ProductCards/>}/>
        <Route path='/productcards/:id' element={<SinglePage/>}/>
    </Routes>
  )
}

export default AllRoutes