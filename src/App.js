// App.js
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navfile from './components/Navfile';
import FilterBox from './components/FilterBox';
import JobListings from './components/JobListings';
import CreateJobForm from './components/CreateJobForm'; // Import the new form

function App() {
  const [salaryRange, setSalaryRange] = useState([50000, 80000]);
  const [showCreateJobForm, setShowCreateJobForm] = useState(false);
  const formRef = useRef(null);
  const [jobListings, setJobListings] = useState(() => {
    const storedListings = localStorage.getItem('jobListings');
    return storedListings ? JSON.parse(storedListings) : [];
  });

  const handleCreateJobClick = () => {
    setShowCreateJobForm(true);
  };

  const handleCloseForm = () => {
    setShowCreateJobForm(false);
  };

  const handleClickOutside = (event) => {
    if (showCreateJobForm && formRef.current && !formRef.current.contains(event.target)) {
      handleCloseForm();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCreateJobForm]);

  useEffect(() => {
    localStorage.setItem('jobListings', JSON.stringify(jobListings));
  }, [jobListings]);

  const handleJobSubmit = (newJob) => {
    setJobListings((prevListings) => [...prevListings, newJob]);
    handleCloseForm(); // Close the form after submission
    handleCreateJobClick(); // Show a new empty form
  };

  return (
    <Router>
      <div style={styles.appContainer}>
        <Navfile onCreateJobClick={handleCreateJobClick} />
        <FilterBox salaryRange={salaryRange} setSalaryRange={setSalaryRange} />
        <Routes>
          <Route path="/" element={<JobListings listings={jobListings} salaryRange={salaryRange} />} />
          <Route path="/find-jobs" element={<JobListings listings={jobListings} salaryRange={salaryRange} />} />
          <Route path="/find-talents" element={<div>Find Talents Page Content</div>} />
          <Route path="/about-us" element={<div>About Us Page Content</div>} />
          <Route path="/testimonials" element={<div>Testimonials Page Content</div>} />
        </Routes>
        {showCreateJobForm && (
          <div style={styles.overlay}>
            <div ref={formRef} style={styles.formContainerSmall}>
              <CreateJobForm onSubmit={handleJobSubmit} onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    position: 'relative',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  formContainerSmall: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    maxWidth: '500px', // Reduced width
    width: '80%', // Adjusted width
    maxHeight: '600px', // Reduced height
    overflowY: 'auto', // Add scroll if content overflows
    zIndex: 11,
  },
};

export default App;