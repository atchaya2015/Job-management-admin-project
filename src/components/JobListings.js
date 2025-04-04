import React from 'react';
import { IconUserPlus } from '@tabler/icons-react';
import { IconBuilding } from '@tabler/icons-react';
import { IconWallet } from '@tabler/icons-react';

const jobCardStyles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    width: '240px', 
    height:'300px',// Roughly 25% width with spacing
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  logoContainer: {
    width: '80px',
    height: '40px',
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Placeholder background
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  postedTime: {
    fontSize: '0.8rem',
    color: '#757575',
    backgroundColor: '#B0D9FF',
    padding: '2px 5px',
    borderRadius: '4px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#000000',
  },
  details: {
    display: 'flex',
    gap: '15px',
    marginBottom: '10px',
    fontSize: '0.9rem',
    color: '#545454',
  },
  detailItem: {
    // No specific styling needed for individual items for now
  },
  description: {
    marginBottom: '15px',
    color: '#555555',
    fontSize: '14px',
  },
  descriptionPoint: {
    listStyleType: 'disc',
    marginLeft: '15px',
    marginBottom: '5px',
  },
  applyButton: {
    backgroundColor: ' #00AAFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'medium',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
  },
  applyButtonHover: {
    backgroundColor: '#0056b3',
  },
};

function JobCard({ logoSrc, postedTime, title, experience, type, salary, descriptionPoints, applyLink }) {
  return (
    <div style={jobCardStyles.card}>
      <div style={jobCardStyles.header}>
        <div style={jobCardStyles.logoContainer}>
          {logoSrc ? <img src={logoSrc} alt="Company Logo" style={jobCardStyles.logo} /> : 'Logo'}
        </div>
        <div style={jobCardStyles.postedTime}>{postedTime}</div>
      </div>
      <h3 style={jobCardStyles.title}>{title}</h3>
      <div style={jobCardStyles.details}>
        <span style={jobCardStyles.detailItem}><IconUserPlus size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
        {experience}</span>
        <span style={jobCardStyles.detailItem}><IconBuilding size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />{type}</span>
        <span style={jobCardStyles.detailItem}><IconWallet size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />{salary}</span>
      </div>
      <div style={jobCardStyles.description}>
        {descriptionPoints.map((point, index) => (
          <li key={index} style={jobCardStyles.descriptionPoint}>
            {point}
          </li>
        ))}
      </div>
      <a href={applyLink} style={jobCardStyles.applyButton} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
}

function JobListing() {
  const jobListings = [
    {
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      postedTime: '24h Ago',
      title: 'Full Stack Developer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
    {
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
      postedTime: '24h Ago',
      title: 'Node Js Developer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
    {
      logoSrc: 'download.png',
      postedTime: '24h Ago',
      title: 'UX / UI Designer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
    {
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      postedTime: '24h Ago',
      title: 'Full Stack Developer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
    {
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
      postedTime: '24h Ago',
      title: 'Node Js Developer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
    {
      logoSrc: 'download.png',
      postedTime: '24h Ago',
      title: 'UX / UI Designer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
    {
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      postedTime: '24h Ago',
      title: 'Full Stack Developer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
    {
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
      postedTime: '24h Ago',
      title: 'Node Js Developer',
      experience: '1-3 yr Exp',
      type: 'Onsite',
      salary: '12LPA',
      descriptionPoints: [
        'A user-friendly interface lets you browse stunning photos and videos.',
        'Filter destinations based on interests and travel style, and create personalized.',
      ],
      applyLink: '#apply',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start', padding: '20px' }}>
      {jobListings.map((job, index) => (
        <div key={index} style={{ width: 'calc(25% - 20px)' }}>
          <JobCard {...job} />
        </div>
      ))}
    </div>
  );
}

export default JobListing;