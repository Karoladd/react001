import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CamLogin from './pages/CamLogin'
import CamSignup from './pages/CamSignup'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header/>
       <main>
        <Container>
            <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/camLogin' element={<CamLogin />}/>
            <Route path='/camSignup' element={<CamSignup />}/>
            </Routes>
          </Container>
        </main>
    <Footer/>
    </Router>
  )
}

export default App

