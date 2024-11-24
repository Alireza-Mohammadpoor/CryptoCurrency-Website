





import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import styles from '@/styles/contactus.module.css';

const Contact = () => {
    return (
        <div className={styles.alll}>
            <div className={styles.texts}>
                <h1 className={styles.h1}>
                    Get in Touch with Us<br />
                    We're Here to Help!
                </h1>
                <h6 className={styles.h6}>
                    At our Cryptocurrency Website, we value your feedback and are committed to providing exceptional support to our users. Whether you have questions about our services, need assistance with transactions, or want to share your thoughts on how we can improve, our dedicated team is ready to assist you. You can reach us through our contact form available on the website, or feel free to send us an email at <b style={{ color: "hsl(212, 100%, 68%)", fontWeight: "800" }}>support@yourcryptocurrencywebsite.com</b>. We aim to respond to all inquiries within 24 hours, ensuring that you receive timely and helpful information. Additionally, for real-time assistance, you can connect with us via our live chat feature during business hours. Your experience is important to us, and we look forward to hearing from you!
                </h6>
            </div>

            <Box>
                <div className={styles.container}>
                    <h1 className={styles.heading}>Contact Us</h1>
                    <p className={styles.description}>We’d love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.</p>
                    <form className={styles.form}>
                        <div>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" className={styles.input} required />
                        </div>
                        <div>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" className={styles.input} required />
                        </div>
                        <div>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" className={styles.textarea} rows="5" required></textarea>
                        </div>
                        <Link href="/">
                            <button type="submit" className={styles.button}>Send Message</button>
                        </Link>
                    </form>
                </div>
            </Box>
        </div>
    );
};

export default Contact;
