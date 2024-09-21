import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('Portfolio'); // Set Portfolio as the default page

  // Define the handlePageChange function to switch pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to render the appropriate page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Portfolio />; // Default to Portfolio if an unknown page is requested
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Pass handlePageChange as a prop */}
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;