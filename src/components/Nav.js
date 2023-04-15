import React from 'react';
import './Components.css'; 

function Nav({currentPage, handlePageChange}) {
    return (
        <section className='navcontainer'>
            <ul  className='nav'>
                <li className='nav-item'>
                    <a href='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#news' onClick={() => handlePageChange('News')} className={currentPage === 'News' ? 'nav-link active' : 'nav-link'}>News</a>
                </li>
                <li className='nav-item'>
                    <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Us</a>
                </li>
            </ul>
        </section>
    )
}

export default Nav; 