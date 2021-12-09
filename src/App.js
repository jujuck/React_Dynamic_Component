/* eslint no-use-before-define: 0 */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page from './Page/Page';

function App() {
  return (
    <BrowserRouter>
      <Link to='/Home'>Home</Link>
      <Link to='/Produit'>Produit</Link>
      <Link to='/Philosophie'>Philosophie</Link>
      <div className="App">
        <Routes>
          <Route path='/:page' element={<Page />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
