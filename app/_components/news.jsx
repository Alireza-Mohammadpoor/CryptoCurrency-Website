

import React from 'react';
import styles from '@/styles/news.module.css';
import CustomizedAccordions from './accordion';
import AccordionUsage from './accordion';

const News = () => {
    return (
        <div className={styles.container}>
            <div className={styles.centerAlign}>
                <h1 className={`${styles.why}`}>WHY SUBSCRIBE?</h1>
                <h6 className={`${styles.subtitle}`}>
                    Unlock exclusive access to the most comprehensive crypto insights and updates directly to your inbox. By subscribing to CoinMarketCap's newsletter, you get:
                </h6>
            </div>
            <div className={styles.alllists}>
                <div className={styles.section}>
                    <h1 className={styles.sectionHeader}>Trusted Data</h1>
                    <ul className={styles.sectionList}>
                        <li className={styles.list}>New Listings: Be the first to discover newly listed cryptocurrencies.</li>
                        <li className={styles.list}>Market Data: Daily updates on gainers, losers, and overall market trends.</li>
                        <li className={styles.list}>Milestones Alerts: Notifications about crucial market milestones.</li>
                        <li className={styles.list}>Airdrops: Information on current and upcoming airdrops.</li>
                    </ul>
                </div>
                <div className={styles.rtlSection}>
                    <h1 className={styles.sectionHeader}>News & Insights</h1>
                    <ul className={styles.rtlSectionList}>
                        <li className={styles.list1}>Educational Content: Articles and guides to boost your crypto knowledge.</li>
                        <li className={styles.list1}>Glossary: A comprehensive list of crypto terms and definitions.</li>
                        <li className={styles.list1}>Market News: Breaking news and essential updates from the crypto world.</li>
                        <li className={styles.list1}>Videos: Weekly engaging and informative videos from our YouTube channel.</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.sectionHeader}>Research</h1>
                    <ul className={styles.sectionList}>
                        <li className={styles.list}>Market Outlook: Expert insights into the future of the cryptocurrency market.</li>
                        <li className={styles.list}>Analysis: In-depth analysis of market trends and movements.</li>
                        <li className={styles.list}>Tech Deep Dives: Detailed exploration of blockchain technology and innovations.</li>
                    </ul>
                </div>
                <div className={styles.rtlSection}>
                    <h1 className={styles.sectionHeader}>CMC Community</h1>
                    <ul className={styles.rtlSectionList}>
                        <li className={styles.list1}>Live Podcasts: Engage with crypto experts and community figures through live sessions.</li>
                        <li className={styles.list1}>Feed: Connect with the crypto community for real-time discussions and updates.</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.sectionHeader}>New Features</h1>
                    <ul className={styles.sectionList}>
                        <li className={styles.list}>App Updates: Latest enhancements to the CoinMarketCap mobile app.</li>
                        <li className={styles.list}>Web Updates: Recent improvements and new functionalities on the CoinMarketCap website.</li>
                    </ul>
                </div>
            </div>
                <div className={styles.largeSection}>
                    <h1 className={`${styles.largeHeading} ${styles.why}`}>FAQ (FREQUENTLY ASKED QUESTIONS)</h1>
                    <h6 className={`${styles.subtitle}`}>Your newsletter questions answered for you</h6>
                </div>
            <AccordionUsage />
        </div>
    );
};

export default News;
