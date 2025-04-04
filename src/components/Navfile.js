// components/Navfile.js
import React from 'react';
import { Link } from 'react-router-dom';

const navStyles = {
  navContainerStyle: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '35px',
    marginTop: '20px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    gap: '15px',
    justifyContent: 'center',
  },
  titleStyle: {
    padding: '16px',
    fontWeight: 700,
    fontSize: '20px',
    color: '#000',
  },
  linkStyle: {
    padding: '10px 16px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: 500,
    borderRadius: '8px',
  },
  linkActiveStyle: {
    backgroundColor: '#e0e0e0',
    color: '#007bff',
  },
  buttonStyle: {
    backgroundColor: 'purple',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

function Navfile({ onCreateJobClick }) {
  const active = window.location.pathname;

  return (
    <div style={navStyles.navContainerStyle}>
      <div style={navStyles.titleStyle}>Job Board</div>
      <Link to="/" style={{ ...navStyles.linkStyle, ...(active === '/' ? navStyles.linkActiveStyle : {}) }}>
        Home
      </Link>
      <Link to="/find-jobs" style={{ ...navStyles.linkStyle, ...(active === '/find-jobs' ? navStyles.linkActiveStyle : {}) }}>
        Find Jobs
      </Link>
      <Link to="/find-talents" style={{ ...navStyles.linkStyle, ...(active === '/find-talents' ? navStyles.linkActiveStyle : {}) }}>
        Find Talents
      </Link>
      <Link to="/about-us" style={{ ...navStyles.linkStyle, ...(active === '/about-us' ? navStyles.linkActiveStyle : {}) }}>
        About Us
      </Link>
      <Link to="/testimonials" style={{ ...navStyles.linkStyle, ...(active === '/testimonials' ? navStyles.linkActiveStyle : {}) }}>
        Testimonials
      </Link>
      <button style={navStyles.buttonStyle} onClick={onCreateJobClick}>
        Create Jobs
      </button>
    </div>
  );
}

export default Navfile;