import React, { useState, useEffect } from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    setFilterValue(value);
  }, [value]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
    onChange(value);
  };

  return (
    <input
      type="text"
      value={filterValue}
      onChange={handleChange}
      className={styles.searchInput}
      placeholder="Search contacts..."
    />
  );
};

export default Filter;
