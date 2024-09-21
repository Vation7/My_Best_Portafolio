import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header({ currentPage, handlePageChange }) {  // Ensure handlePageChange is passed as a prop
  return (
    <header className="main-header">
      <h1 className="header-title">Miguel's Portfolio</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />  {/* Pass handlePageChange to Navigation */}
    </header>
  );
}

export default Header;