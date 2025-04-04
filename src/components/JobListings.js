// components/JobListings.js
import React, { useState, useEffect } from 'react';

function JobListings() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Replace with your actual data fetching logic
    const fetchedJobs = [
      {
        id: 1,
        title: 'Full Stack Developer',
        company: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 120000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
      {
        id: 2,
        title: 'Node Js Developer',
        company: 'Tesla',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 70000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
      {
        id: 3,
        title: 'UX/UI Designer',
        company: 'Orange',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1200px-Orange_logo.svg.png',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 90000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
      {
        id: 4,
        title: 'Full Stack Developer',
        company: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 110000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
      {
        id: 5,
        title: 'Node Js Developer',
        company: 'Tesla',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 65000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
      {
        id: 6,
        title: 'UX/UI Designer',
        company: 'Orange',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1200px-Orange_logo.svg.png',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 95000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
      {
        id: 7,
        title: 'Full Stack Developer',
        company: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 125000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
      {
        id: 8,
        title: 'Node Js Developer',
        company: 'Tesla',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
        experience: '1-3 yr Exp',
        location: 'Onsite',
        salary: 75000,
        description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.',
      },
    ];

    // Set all jobs directly without filtering
    setJobs(fetchedJobs);
  }, []); // Remove salaryRange dependency

  const jobListingStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const jobCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  };

  const applyButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  };

  return (
    <div style={jobListingStyle}>
      {jobs.map((job) => (
        <div key={job.id} style={jobCardStyle}>
          <img src={job.logo} alt={`${job.company} Logo`} style={logoStyle} />
          <h3>{job.title}</h3>
          <p>{job.experience}</p>
          <p>{job.location}</p>
          <p>{job.salary / 10000} LPA</p>
          <p>{job.description}</p>
          <button style={applyButtonStyle}>Apply Now</button>
          <p style={{ fontSize: '0.8em', marginTop: '10px' }}>24h Ago</p>
        </div>
      ))}
    </div>
  );
}

export default JobListings;