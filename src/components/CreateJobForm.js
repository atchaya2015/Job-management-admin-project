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
    onSubmit({ ...formData, status: 'published', id: Date.now() }); // Add status and unique ID
    setFormData({
      title: '',
      company: '',
      location: '',
      jobType: 'FullTime',
      salaryFrom: '',
      salaryTo: '',
      description: '',
    });
  };

  const handleSaveDraft = () => {
    onSubmit({ ...formData, status: 'draft', id: Date.now() }); // Add status and unique ID
    setFormData({
      title: '',
      company: '',
      location: '',
      jobType: 'FullTime',
      salaryFrom: '',
      salaryTo: '',
      description: '',
    });
  };

  return (
    <div>
      <h2 style={formStyles.title}>Create Job Opening</h2>
      <div style={formStyles.form}>
        <div style={formStyles.inputGroup}>
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
        <div style={formStyles.inputGroup}>
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
        <div style={formStyles.inputGroup}>
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
        <div style={formStyles.inputGroup}>
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
        <div style={formStyles.inputGroup}>
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
        <div style={formStyles.inputGroup}>
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
        <div style={formStyles.buttonGroup}>
          <button type="button" style={formStyles.draftButton} onClick={handleSaveDraft}>
            Save Draft
          </button>
          <button type="button" style={formStyles.publishButton} onClick={handlePublish}>
            Publish »
          </button>
        </div>
      </div>
    </div>
  );
}

const formStyles = {
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'medium',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  select: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    minHeight: '100px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    justifyContent: 'space-between',
  },
  draftButton: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  publishButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default CreateJobForm;