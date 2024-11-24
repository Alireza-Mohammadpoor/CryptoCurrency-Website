'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/course.module.css';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingSkeleton from './courseloading';

const Coursecomponent = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getBlogPosts = async () => {
		try {
			const response = await fetch('/api/courses');
			if (response.ok) {
				const data = await response.json();
				setBlogs(data.courses);
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
		getBlogPosts();
	}, []);


	
	const relatedcoins = []
	blogs.map((c) => (relatedcoins.push(c.status)
	))

	if (loading) return <LoadingSkeleton />;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className={styles.container}>
			<div style={{ marginBottom : "30px", display : "flex"}}>
				<div>

					<h1 style={{fontSize : "2.5rem", fontFamily : "Outfit, sans-serif", fontWeight : "700"}}>How to Trade ? </h1>
					<p style={{color : "hsl(0, 0%, 70%)"}} className={styles.explain}>
					Choose from the courses below to reach your goal in  CryptoPlace. If your crypto project wants to list a reward, click here.</p>
				</div>
				
			</div>
			<div className={styles.coursesContainer}>
				{blogs.map((course, index) => (
					<div
						key={index}
						className={styles.courseCard}
						onClick={() => console.log(`Course selected: ${course.title}`)}
						style={{ cursor: 'pointer'}} // To indicate it’s clickable
					>
						<div className={styles.courseContent}>
							<div className={styles.imageWrapper}>
								<img
									src={course.imagesrc}
									alt={course.title}
									className={styles.courseImage}
								/>
								<div
									className={`${styles.statusLabel} ${
										course.status === 'on sale'
											? styles.onSale
											: styles.soldOut
									}`}
								>
									{course.status}
								</div>
								{/* <div
									className={`${styles.onSale} ${styles.statusLabel}`}
									style={{ backgroundColor: course.status === 'On Sale' ? '#3168fb' : '#808a9d' }}
								>
									{course.status}
								</div> */}

							</div>
							<div style={{margin : "15px 5px"}}>

								<h1 className={styles.title}>{course.title}</h1>
								<p className={styles.desc}><small>{course.description}</small></p>
								<div style={{display : "flex", gap : "50px", marginTop : "15px", fontSize : "0.8rem"}} >

								<h6 className={styles.price}>
									Price:
									<b className={`${styles.bold}`}>
										{course.price} {<FontAwesomeIcon icon={faGem} style={{color : "hsl(0, 0%, 31%)"}}/>}
									</b>
									
								</h6>

									<h6 className={styles.supply}>Supply : {course.supply}</h6>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Coursecomponent;









