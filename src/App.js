import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css'
import Cover from './components/cover';
import Details from './components/details';
import Footer from './components/footer';
import Main from './components/main';

export const App = () => {
  return (
    <>
      <BrowserRouter>                  
        <Routes>
            <Route path = "/cover" element = {<Cover />}/>
            <Route path = "/details" element = {<Details />} />
            <Route path = "/main" element = {<Main />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}
