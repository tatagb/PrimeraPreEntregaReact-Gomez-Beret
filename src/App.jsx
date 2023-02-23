import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Inicio from './components/Inicio';


function App() {
  
  return (
            <BrowserRouter>
            <NavBar />
            <Routes>
              <Route extact path="/" element={<Inicio />}/>
              <Route extact path="/tienda" element={<ItemListContainer />}/>
              <Route extact path="/category/:category" element={<ItemListContainer />}/>
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
            </BrowserRouter>  
  );
}

export default App;