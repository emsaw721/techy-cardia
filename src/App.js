import React, { useState } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home'; 
import News from './components/pages/News';
import Contact from './components/pages/Contact'; 


export default function App () {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
  if (currentPage === 'Home') {
      return <Home />;
      }
  if (currentPage === 'News') {
      return <News />;
      }

  return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
      <div style={{backgroundcolor: 'orange'}}>
          <Header />
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer />
      </div>
  )
}


