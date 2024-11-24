




'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import Coursecomponent from '@/app/_components/coursecomponent';
import Articles from '@/app/_components/articles';
import styles from '@/styles/courses.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGraduationCap, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const SectionPage = () => {
    const { section } = useParams();

    // Function to apply the active link style
    const getLinkStyle = (currentSection) => {
        return section === currentSection ? { color: 'hsl(227, 96%, 70%)' } : {};
    };

    return (
        <div className={styles.postss}>
            <div style={{ marginLeft: "20px", marginTop: "50px" }}>
                {/* Container for Courses with icon */}
                <h1 style={{ cursor: 'pointer', marginBottom: "15px", display: 'flex', alignItems: 'center', fontSize: "1.4rem" , fontFamily : "arvo", fontWeight : "600"}}>
                    <Link href="/learn/courses" className={styles.link} style={getLinkStyle('courses')}>
                        <span className={styles.icon}><FontAwesomeIcon icon={faGraduationCap} /></span>
                        Courses
                    </Link>
                </h1>

                {/* Container for Articles with icon */}
                <h1 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: "1.4rem" , fontFamily : "arvo", fontWeight : "600"}}>
                    <Link href="/learn/articles" className={styles.link} style={getLinkStyle('articles')}>
                        <span className={styles.icon}><FontAwesomeIcon icon={faNewspaper} /></span>
                        Articles
                    </Link>
                </h1>
            </div>

            <div style={{ marginBottom: "30px", marginTop: "30px" }}>
                {section === 'courses' ? <Coursecomponent /> : section === 'articles' ? <Articles /> : null}
            </div>
        </div>
    );
};

export default SectionPage;
