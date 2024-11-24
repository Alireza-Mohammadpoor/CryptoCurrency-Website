'use client';
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/courses.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
    return (
        <div className={styles.postss}>
            <div style={{ marginLeft: "20px" }}>
					 <h1 style={{ cursor: 'pointer', marginBottom: "15px", display: 'flex', alignItems: 'center', fontSize : "1.3rem" }}>
                    <Link href="/learn/courses" className={styles.link}>
                        <span className={styles.icon}><FontAwesomeIcon icon={faGraduationCap} /></span>
                        courses
                    </Link>
                </h1>
                {/* Container for Articles with icon */}
                <h1 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize : "1.3rem" }}>
                    <Link href="/learn/articles" className={styles.link}>
                        <span className={styles.icon}><FontAwesomeIcon icon={faNewspaper} /></span>
                        Articles
                    </Link>
                </h1>
            </div>
        </div>
    );
};

export default Courses;


