import React from 'react';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Dizain from './Dizain/Dizain';
import Main from './Main/Main';
import Katalog from './Katalog/Katalog';
import Tovar from './Towar/Tovar';
import Korzina from './Korzina/Korzina';
import Oformlenie from './Oformlenie/Oformlenie';
import Chek from './cHEK/Chek';
import Register from './Register/Register';
import Lichka from './Lichka/Lichka';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dizain />} />
        <Route path="/main" element={<Main />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/towar" element={<Tovar />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/oformlenie" element={<Oformlenie />} />
        <Route path="/chek" element={<Chek />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lichka" element={<Lichka />} />
      </Routes>
    </div>
  );
};

export default App;