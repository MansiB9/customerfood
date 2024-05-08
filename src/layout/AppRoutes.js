import React, { Profiler } from 'react'
import MyNavBar from './MyNavBar'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Compo/Home';
import Cart from '../Compo/Cart';
import Orders from '../Compo/Orders';
import Register from '../Compo/Register';
import Profile from '../Compo/Profile';
import Login from '../Compo/Login';
import PlaceOrder from '../Compo/PlaceOrder';


function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <MyNavBar/>
        <Container fluid>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/orders' element={<Orders/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/placeorder' element={<PlaceOrder/>}></Route>
            </Routes>
        </Container>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes