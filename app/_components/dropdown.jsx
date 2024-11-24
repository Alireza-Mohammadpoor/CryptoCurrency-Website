


'use client'


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setCurrency } from '@/redux/currencySlice';
import { setCurrency } from '../redux/currencySlice';
import styles from '@/styles/dropdown.module.css';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => setIsOpen(!isOpen);

//   const currentcurrency = useSelector((state) => state.selectedCurrency)
  const currentcurrency = useSelector((state) => state.currency.selectedCurrency);


  const selectOption = (option) => {
    dispatch(setCurrency(option)); // Dispatch selected currency to Redux
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
		<div className={styles.selection} onClick={toggleDropdown}>
        {currentcurrency}
        <span className={styles.arrow}>▼</span>
      </div>



      {isOpen && (
        <div className={styles.options}>
          <div onClick={() => selectOption('USD')}>USD</div>
          <div onClick={() => selectOption('EUR')}>EUR</div>
          <div onClick={() => selectOption('INR')}>INR</div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
