import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './pages/Home'; 
import News from './pages/News';
import Contact from './pages/Contact'; 


function BlogContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
      if (currentPage === 'News') {
        return <News />;
      }
      if (currentPage === 'Home') {
        return <Home />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div style={{backgroundColor: '#fff9f9'}}>
            <Header />
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            <Footer />
        </div>
    )
};

export default BlogContainer; 