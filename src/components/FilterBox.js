// components/FilterBox.js
import React from 'react';
import { IconSearch, IconMapPin, IconChevronDown, IconUser } from '@tabler/icons-react';

const filterBoxStyles = {
    filterBox: {
        display: 'flex',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginTop: '10px',
        gap: '8px',
        justifyContent: 'space-between',
    },
    inputWrapper: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        padding: '8px 8px 8px 30px',
        border: 'none',
        width: '100%',
        boxSizing: 'border-box',
    },
    icon: {
        position: 'absolute',
        left: '3px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#686868',
    },
    dropdown: {
        padding: '15px',
        border: 'none',
        borderRadius: '4px',
        flex: 1,
        cursor: 'pointer',
    },
    locationIcon: {
        left: 'auto',
        right: '30px',
    },
    chevronDownIcon: {
        position: 'absolute',
        right: '18px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#686868',
    },
    salaryRange: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px',
    },
    sliderContainer: {
        width: '200px',
    },
    sliderTrack: {
        height: '8px',
        backgroundColor: 'black',
        borderRadius: '4px',
    },
    sliderThumb: {
        width: '16px',
        height: '16px',
        backgroundColor: '#222222',
        borderRadius: '50%',
        cursor: 'pointer',
        border: '2px solidrgb(41, 36, 36)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    salaryValue: {
        fontSize: '16px',
        color: '#222',
    },
    userIcon: {
      position: 'absolute',
      left: '1px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#686868',
  },
  selectWrapper: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
}
};

function FilterBox({ salaryRange, setSalaryRange }) {
    const handleSliderChange = (event) => {
        const newRange = event.target.value.split(',').map(Number);
        setSalaryRange(newRange);
    };

    const formatSalary = (value) => {
        if (value >= 1000) {
            return `₹ ${(value / 1000).toFixed(0)}k`;
        }
        return `₹ 100k`;
    };

    return (
        <div style={filterBoxStyles.filterBox}>
            <div style={filterBoxStyles.inputWrapper}>
                <IconSearch size={16} style={filterBoxStyles.icon} />
                <input
                    type="text"
                    placeholder="Search By Job Title, Role"
                    style={filterBoxStyles.input}
                />
            </div>
            <div style={filterBoxStyles.inputWrapper}>
                <IconMapPin size={16} style={filterBoxStyles.icon} />
                <input
                    type="text"
                    placeholder="Preferred Location"
                    style={filterBoxStyles.input}
                />
                <IconChevronDown size={16} style={filterBoxStyles.chevronDownIcon} />
            </div>
            <div style={filterBoxStyles.selectWrapper}>
                <IconUser size={16} style={filterBoxStyles.userIcon} />
                <select style={filterBoxStyles.dropdown}>
                    <option value="">Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                </select>
               
            </div>
            <div style={filterBoxStyles.salaryRange}>
                Salary Per Month
                <div style={filterBoxStyles.sliderContainer}>
                    <input
                        type="range"
                        min="50000"
                        max="80000"
                        step="1000"
                        value={salaryRange.join(',')}
                        onChange={handleSliderChange}
                        style={{
                            width: '100%',
                            height: '6px',
                            appearance: 'none',
                            backgroundColor: '#222222',
                            padding: 0,
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8em', color: '#222222' }}>
                        <span>{formatSalary(salaryRange[0])}</span>
                        <span>{formatSalary(salaryRange[1])}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterBox;