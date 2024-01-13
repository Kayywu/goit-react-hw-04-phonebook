import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('contactName');
    const storedNumber = localStorage.getItem('contactNumber');
    if (storedName && storedNumber) {
      setName(storedName);
      setNumber(storedNumber);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactNumber', number);
  }, [name, number]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className={styles.inputField}
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        className={styles.inputField}
        placeholder="Enter phone number"
        required
      />
      <button type="submit" className={styles.submitButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
