import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from "./pages";
import About from './pages/about';
import Author from './pages/aboutAuthor';
import NotFound from './pages/notFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/author' element={<Author/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;