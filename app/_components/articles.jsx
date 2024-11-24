
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from './coindropdown';
import styles from '@/styles/articles.module.css';
import SkeletonLoader from '../learn/[section]/articleLoading';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCoin, setSelectedCoin] = useState('all');

    const articlesPerPage = 8;

    const getArticlesPosts = async () => {
        const apiUrl = '/api/articles';

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();

                const sortedArticles = data.articles.sort((a, b) => {
                    const dateA = new Date(
                        a.publishDate === 'today' ? new Date() : a.publishDate === 'yesterday' ? new Date(new Date().setDate(new Date().getDate() - 1)) : a.publishDate
                    );
                    const dateB = new Date(
                        b.publishDate === 'today' ? new Date() : b.publishDate === 'yesterday' ? new Date(new Date().setDate(new Date().getDate() - 1)) : b.publishDate
                    );
                    return dateB - dateA;
                });

                setArticles(sortedArticles);
            } else {
                setError('Error fetching data.');
            }
        } catch (error) {
            setError('Error fetching data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getArticlesPosts();
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    const lastArticleIndex = currentPage * articlesPerPage;
    const firstArticleIndex = lastArticleIndex - articlesPerPage;

    // Ensure filteredArticles always has a fallback value.
    const filteredArticles = selectedCoin === 'all' ? articles : articles.filter(article => article.relatedCoin?.name?.toLowerCase() === selectedCoin.toLowerCase());
    const currentArticles = filteredArticles.slice(firstArticleIndex, lastArticleIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCoinChange = (value) => {
        setSelectedCoin(value);
        setCurrentPage(1);
    };

    if (loading) return <SkeletonLoader />;
    if (error) return <div>Error: {error}</div>;

    // If no articles are found, show a fallback message.
    if (currentArticles.length === 0) return <h1>No articles found</h1>;

    const coins = [
        'all',
        'Bitcoin',
        'Ethereum',
        'Ripple',
        'Cardano',
        'Solana',
        'Polkadot',
        'Dogecoin',
        'Litecoin',
        'Chainlink',
        'Avalanche',
        'Binance Coin',
        'Tron',
    ];

    return (
        <Box sx={{ backgroundColor: 'inherit' }}>
            <div>
                {/* Dropdown Positioned Above News */}
                {/* <div className={styles.dropdownContainer}>
                    <CustomDropdown
                        options={coins}
                        selectedValue={selectedCoin}
                        onChange={handleCoinChange}
                    />
                </div>

                <div className={styles.headerContainer}>
                    <h1 className={styles.heading}>News</h1>
                    <p className={styles.explain}>Insights into the biggest events shaping the crypto industry.</p>
                </div> */}

					<div className={styles.headerWrapper}>
						<div className={styles.headerContainer}>
							<h1 className={styles.heading}>News</h1>
							<p className={styles.explain}>Insights into the biggest events shaping the crypto industry.</p>
						</div>
						<div className={styles.dropdownContainer}>
							<CustomDropdown
									options={coins}
									selectedValue={selectedCoin}
									onChange={handleCoinChange}
							/>
						</div>
					</div>


                <div>
                    {currentArticles.map((post, index) => (
                        <Link href="/" key={index}>
                            <div className={styles.all}>
                                <div className={styles.date}>
                                    <p>{post.publishTime}</p>
                                </div>
                                <img src={post.image} alt="img" className={styles.articleImage} />
                                <div className={styles.textContent}>
                                    <h1 className={styles.title}>{post.title}</h1>
                                    <pre className={styles.datee}>
                                        <FontAwesomeIcon icon={faCalendarDays} /> {post.publishDate}
                                    </pre>
                                    <p className={styles.desc}>{post.description}</p>
                                    <div style={{ textAlign: 'right' }}>
                                        <small>
                                            <b>{post.author}</b>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.paginationContainer}>
                    <button
                        onClick={() => paginate(1)}
                        disabled={currentPage === 1}
                        className={styles.paginationButton}
                    >
                        1
                    </button>
                    <button
                        onClick={() => paginate(2)}
                        disabled={currentPage === 2}
                        className={styles.paginationButton}
                    >
                        2
                    </button>
                </div>
            </div>
        </Box>
    );
};

export default Articles;
