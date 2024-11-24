import React, { useState } from 'react';
import styles from '@/styles/coindropdown.module.css'; // Make sure this file exists

const CustomDropdown = ({ options, selectedValue, onChange }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track if the dropdown is open or not

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        onChange(value); // Trigger the callback to set the selected value
        setIsOpen(false); // Close the dropdown
    };

    return (
        <div className={styles.dropdownContainer} style={{ position: 'relative', width: '100px' }}>
            {/* Dropdown header */}
            <div
                className={styles.dropdownHeader}
                onClick={toggleDropdown}
                style={{
                  //   background: 'linear-gradient(#0b004e, #1d152f, #002834)', // Linear gradient background
						  background : "inherit",
                    color: 'white',
                  //   padding: '10px',
                  //   borderRadius: '3px',
                    cursor: 'pointer',
                }}
            >
                {selectedValue}<span className={styles.arrow}>▼</span>
            </div>

            {/* Dropdown list */}
            {isOpen && (
                <div
                    className={styles.dropdownList}
                    style={{
                        // backgroundColor: '#002834', // Dark background for the dropdown options
								// background : "inherit",
                        color: 'white',
                        // padding: '10px',
                        position: 'absolute',
                        // top: '100%',
                        left: '0',
                        right: '0',
                        borderRadius: '3px',
                        // maxHeight: '200px',
                        // overflowY: 'auto',
                    }}
                >
						 <div className={styles.alloptions}>
                    {options.map((option) => (

									<div
										key={option}
										className={styles.dropdownItem}
										style={{
											//   padding: '8px 10px',
											cursor: 'pointer',
											//   borderBottom: '1px solid #fff',
										}}
										onClick={() => handleSelect(option)}
									>
										{option}
									</div>
                    ))}
						  </div>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
