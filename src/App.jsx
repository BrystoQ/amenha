import './App.scss';

import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';

const App = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
};

export default App;
