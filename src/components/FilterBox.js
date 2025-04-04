// components/FilterBox.js
import React from 'react';
import { IconSearch, IconMapPin, IconChevronDown } from '@tabler/icons-react';

const filterBoxStyles = {
  filterBox: {
    display: 'flex',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginTop: '10px',
    gap: '15px',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    position: 'relative',
    flex: 1,
  },
  input: {
    padding: '8px 8px 8px 30px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
  },
  icon: {
    position: 'absolute',
    left: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999',
  },
  dropdown: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    flex: 1,
    cursor: 'pointer',
  },
  locationIcon: {
    right: '8px',
  },
  salaryRange: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  sliderContainer: {
    width: '200px',
  },
  sliderTrack: {
    height: '8px',
    backgroundColor: '#eee',
    borderRadius: '4px',
  },
  sliderThumb: {
    width: '16px',
    height: '16px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    cursor: 'pointer',
    border: '2px solid #fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  salaryValue: {
    fontSize: '0.9em',
    color: '#555',
  },
};

function FilterBox({ salaryRange, setSalaryRange }) {
  const handleSliderChange = (event) => {
    const newRange = event.target.value.split(',').map(Number);
    setSalaryRange(newRange);
  };

  return (
    <div style={filterBoxStyles.filterBox}>
      <div style={filterBoxStyles.inputWrapper}>
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          style={filterBoxStyles.input}
        />
        <IconSearch size={16} style={filterBoxStyles.icon} />
      </div>
      <div style={filterBoxStyles.inputWrapper}>
        <input
          type="text"
          placeholder="Preferred Location"
          style={filterBoxStyles.input}
        />
        <IconMapPin size={16} style={{ ...filterBoxStyles.icon, ...filterBoxStyles.locationIcon }} />
        <IconChevronDown size={16} style={filterBoxStyles.icon} />
      </div>
      <select style={filterBoxStyles.dropdown}>
        <option value="">Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
      <div style={filterBoxStyles.salaryRange}>
        Salary Per Month
        <div style={filterBoxStyles.sliderContainer}>
          <input
            type="range"
            min="0"
            max="200000"
            step="1000"
            value={salaryRange.join(',')}
            onChange={handleSliderChange}
            style={{
              width: '100%',
              appearance: 'none',
              background: 'transparent',
              padding: 0,
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8em', color: '#777' }}>
            <span>${salaryRange[0]}</span>
            <span>${salaryRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;