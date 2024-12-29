import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const NavBar = () => {
  const styles = {
    navbar: {
      position: 'fixed',           // Fixed position at the top of the page
      top: 0,                      // Align at the top of the page
      left: 0,                     // Align with the left side
      width: '100%',                // Make it take full width
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      padding: '10px 20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,                // Ensure it stays above other content
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
    },
    linksContainer: {
      display: 'flex',
      gap: '15px',
    },
    link: {
      textDecoration: 'none',
      fontSize: '1rem',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#3e8e41',
      color: 'white',
    },
    activeLink: {
      backgroundColor: 'white',
      color: '#4CAF50',
    },
  };
  
  return (
    <div class = "nav">
    <nav style={styles.navbar}>
      <a href="/" style={styles.logo}>
        Feedback Admin
      </a>
      <div style={styles.linksContainer}>
        <Link
          to="/dashboard"
          style={{ ...styles.link }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3e8e41')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
          Dashboard
        </Link>
        <Link
          to="/add-feedback"
          style={{ ...styles.link }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3e8e41')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
          Add Feedback
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
