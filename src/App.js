import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Offer from './Pages/Offer'
import Footer from './components/Footer';
import Contact from './Pages/Contact'
import Realizations from './Pages/Realizations'
import Realization1 from './Pages/realizations-subpages/realization1'
import Realization2 from './Pages/realizations-subpages/realization2'
import Realization3 from './Pages/realizations-subpages/realization3'
import Realization4 from './Pages/realizations-subpages/realization4'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <main className="main--router">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/oferta" element={<Offer />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/realizacje" element={<Realizations />} />
            <Route path="/realizacje/kwidzyn" element={<Realization1 />} />
            <Route path="/realizacje/chelmno" element={<Realization2 />} />
            <Route path="/realizacje/pruszcz-gdanski" element={<Realization3 />} />
            <Route path="/realizacje/sztutowo" element={<Realization4 />} />
          </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
