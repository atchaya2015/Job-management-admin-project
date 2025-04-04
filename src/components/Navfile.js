// components/Navfile.js
import React from 'react';
import { Link } from 'react-router-dom';

const navStyles = {
  navContainerStyle: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '122px',
    marginTop: '16px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    gap: '15px',
    justifyContent: 'center',
    width: '838px',
    height: '40px',
    // Remove absolute positioning
    // top: '21px',
    // left: '275px',
    border: '1px solid #FFFFFF',
    // Add styles to center the navbar horizontally
    marginLeft: 'auto',
    marginRight: 'auto',
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
    backgroundColor: 'white',
    color: '#333',
  },
  buttonStyle: {
    backgroundColor: '#A128FF',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '16px',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  imagestyle:{
    height:'44.68px',
    width: '44px',
    
  }
};

function Navfile({ onCreateJobClick }) {
  const active = window.location.pathname;

  return (
    <div style={navStyles.navContainerStyle}>
      <img src = "Capture4.JPG" style={navStyles.imagestyle}/>
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