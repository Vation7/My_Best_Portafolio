import React from 'react';

function Navigation({ currentPage, handlePageChange }) {  // Ensure handlePageChange is received as a prop
  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;