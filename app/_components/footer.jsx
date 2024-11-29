



'use client';

import React from 'react';
import styles from '@/styles/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagramSquare, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.all}>
            <hr style={{ marginTop: "30px" }} />
            <div className={styles.footerGrid}>
                <div className={styles.flexColumn}>
                    <div>
                        {/* New container for USD and English options */}
                        <div className={styles.flexRow + " " + styles.marginLeft20}>
                            <div className={styles.optionBox}>
                                <h1 style={{ color: 'inherit', fontSize: '14px' }}>
                                    <FontAwesomeIcon icon={faDollarSign} style={{ backgroundColor: 'green', width: '16px', height: '16px', borderRadius: '30px', marginRight: '4px' }} />
                                    USD
                                </h1>
                            </div>
                            <div className={styles.optionBox}>
                                <h1 style={{ color: 'inherit', fontSize: '14px' }}>
                                    <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '4px' }} />
                                    English
                                </h1>
                            </div>
                        </div>

                        {/* Copyright Text */}
                        <div style={{display : "flex", marginBottom : "28px", marginTop : "10px"}}>
                        {/* <div className={`${styles.centeredText} ${styles.marginTop20}`}> */}
                            <p>Copyright &copy; 2024, All Right Reserved</p>
                            <b>Alireza</b>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ display: 'flex', gap: '25px', marginBottom : "10px", marginRight : "20px" }} className={styles.uls}>
                        <ul className={styles.unordered}>
                            <h6 className={styles.firstItem}>Socials</h6>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Pinterest</li>
                            <li>YouTube</li>
                            <li>Snapchat</li>
                            <li>TikTok</li>
                        </ul>

                        <ul className={styles.unordered}>
                            <h6 className={styles.firstItem}>Company</h6>
                            <li>TechPioneers Inc.</li>
                            <li>GreenFuture Solutions</li>
                            <li>Innovatech Global</li>
                            <li>BrightPath Enterprises</li>
                            <li>NextGen Dynamics</li>
                            <li>BlueWave Technologies</li>
                            <li>UrbanRise Ventures</li>
                            <li>Phoenix Innovations</li>
                            <li>FutureWorks Labs</li>
                            <li>EcoSphere Industries</li>
                        </ul>
								<div className={styles.hideonmobile}>

									<ul className={styles.unordered}>
										<h6 className={styles.firstItem}>Products</h6>
										<li>Gold Bullion Coins</li>
										<li>Silver Eagle Coins</li>
										<li>Ancient Roman Coins</li>
										<li>Commemorative Coin Sets</li>
										<li>Rare Collector&apos;s Coins</li>
										<li>Cryptocurrency Tokens</li>
									</ul>
								</div>
								<div className={styles.hideonmobile}>

									<ul className={styles.unordered}>
										<h6 className={styles.firstItem}>Support</h6>
										<li>FAQ</li>
										<li>Contact Support</li>
										<li>Account Assistance</li>
										<li>Order Tracking</li>
										<li>Return Policy</li>
										<li>Shipping Information</li>
										<li>Technical Support</li>
									</ul>
								</div>

                    </div>

                    {/* Social Media Icons */}

                </div>
					 <div style={{marginRight : "10px"}}>

                    <div className={styles.iconcontainer}>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faInstagramSquare} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faXTwitter} />
                    </div>
					 </div>

            </div >
        </div >
    );
}

export default Footer;