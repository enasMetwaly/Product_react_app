import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../pages/ProductList'

import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/Notfound'
import CartPage from '../pages/Cart'



export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />


            <Route path="*" element={<NotFound />} />




       </Routes>

    )
}
