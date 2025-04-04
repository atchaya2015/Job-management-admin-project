// components/CreateJobForm.js
import React, { useState } from 'react';

function CreateJobForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobType: 'FullTime',
    salaryFrom: '',
    salaryTo: '',
    applicationDeadline: '', // Added application deadline
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePublish = () => {
    onSubmit({ ...formData, status: 'published', id: Date.now() });
    setFormData({
      title: '',
      company: '',
      location: '',
      jobType: 'FullTime',
      salaryFrom: '',
      salaryTo: '',
      applicationDeadline: '',
      description: '',
    });
  };

  const handleSaveDraft = () => {
    onSubmit({ ...formData, status: 'draft', id: Date.now() });
    setFormData({
      title: '',
      company: '',
      location: '',
      jobType: 'FullTime',
      salaryFrom: '',
      salaryTo: '',
      applicationDeadline: '',
      description: '',
    });
  };

  return (
    <div style={formStyles.container}>
      <h2 style={formStyles.title}>Create Job Opening</h2>
      <div style={formStyles.formGrid}>
        <div style={formStyles.gridItem}>
          <label htmlFor="title" style={formStyles.label}>
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={formStyles.input}
            placeholder="Full Stack Developer"
          />
        </div>
        <div style={formStyles.gridItem}>
          <label htmlFor="company" style={formStyles.label}>
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={formStyles.input}
            placeholder="Amazon"
          />
        </div>
        <div style={formStyles.gridItem}>
          <label htmlFor="location" style={formStyles.label}>
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={formStyles.input}
            placeholder="Chennai"
          />
        </div>
        <div style={formStyles.gridItem}>
          <label htmlFor="jobType" style={formStyles.label}>
            Job Type
          </label>
          <select
            id="jobType"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            style={formStyles.select}
          >
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div style={formStyles.gridItemSalary}>
          <label style={formStyles.label}>Salary Range</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="number"
              name="salaryFrom"
              value={formData.salaryFrom}
              onChange={handleChange}
              style={{ ...formStyles.input, width: '50%' }}
              placeholder="From"
            />
            <input
              type="number"
              name="salaryTo"
              value={formData.salaryTo}
              onChange={handleChange}
              style={{ ...formStyles.input, width: '50%' }}
              placeholder="To"
            />
          </div>
        </div>
        <div style={formStyles.gridItemDeadline}>
          <label htmlFor="applicationDeadline" style={formStyles.label}>
            Application Deadline
          </label>
          <input
            type="date"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            style={formStyles.input}
          />
        </div>
        <div style={formStyles.gridItemFull}>
          <label htmlFor="description" style={formStyles.label}>
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={formStyles.textarea}
            placeholder="Please share a description to let the candidate know"
          />
        </div>
      </div>
      <div style={formStyles.buttonContainer}>
        <button type="button" style={formStyles.draftButton} onClick={handleSaveDraft}>
          Save Draft
        </button>
        <button type="button" style={formStyles.publishButton} onClick={handlePublish}>
          Publish »
        </button>
      </div>
    </div>
  );
}

const formStyles = {
  container: {
    padding: '5px',
    borderRadius: '8px',
    maxWidth: '700px',
    width: '90%',
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#222222',
    textAlign: 'center',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridItemFull: {
    gridColumn: '1 / -1',
    display: 'flex',
    flexDirection: 'column',
  },
  gridItemSalary: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridItemDeadline: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'medium',
    marginBottom: '5px',
    color: '#636363',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  select: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    minHeight: '120px',
    boxSizing: 'border-box',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px',
  },
  draftButton: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  publishButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default CreateJobForm;
