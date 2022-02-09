import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Playlist from '../pages/Playlist';
import Search from '../pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/library' element={<Library />} />
        <Route path='/playlist/:id' element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;