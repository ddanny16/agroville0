import React from 'react'
import "./App.css"
import Home from './routes/Home'
import Investments from './routes/Investments'
import Contact from './routes/Contact'
import Profile from './routes/Profile'
import Vertinary from './routes/Vertinary'
import Products from './routes/Products'
import Cart from './routes/Cart'
import ProfileHome from './pages/ProfileHome'
import Profile1 from './pages/Profile1'
import AddressBook from './pages/AddressBook'
import Notifications from './pages/Notifications'
import ChangePassword from "./pages/ChangePassword"

import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/investments' element={<Investments />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} >
       
        <Route path='profilehome' element={<ProfileHome />} />
        <Route path='profile1' element={<Profile1 />} />
        <Route path='addressbook' element={<AddressBook />} />
        <Route path='notifications' element={<Notifications />} />
        <Route path='changepassword' element={<ChangePassword />} />

     
        </Route>
        <Route path='/vertinary' element={<Vertinary />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;




