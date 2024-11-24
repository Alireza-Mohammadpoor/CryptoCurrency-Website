
import React from 'react';
import styles from '@/styles/features.module.css'; // Importing the CSS module
import News from '../_components/news';
import { faFacebook, faInstagram, faTelegram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {
	//I'm sure I will be in US next year(in 18)
  return (
	<div>

		<div className={styles.featuresContainer}>
			<div className={styles.featuresBackground}>
			<div className={styles.featuresContent}>
				<div>

					<h1 className={styles.mainh1}>COINMARKETCAP</h1>
					<h1 className={styles.sh1}>NEWSLETTER</h1>
					<h6 className={styles.p}>Data. Insights. Community.</h6>
				</div>
				<div className={styles.iconss}>
					<FontAwesomeIcon icon={faTelegram} className={styles.icons} />
					<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
					<FontAwesomeIcon icon={faFacebook} className={styles.icons} />
					<FontAwesomeIcon icon={faInstagram} className={styles.icons} />
					<FontAwesomeIcon icon={faXTwitter} className={styles.icons} />
					
				</div>
			</div>
			</div>
		</div>
		<div  className={styles.photoflex}>

			<div className={styles.all}>
				<h1 className={styles.emailh}>
				Stay on top of crypto. All the time, any time.
				</h1>
				<p 
				className={styles.emailinp}>Please keep me updated by email with the latest crypto news, research findings, reward programs, event updates, coin listings and more information from CoinMarketCap.</p>
				<div style={{display : "flex", gap : "20px"}} className={styles.inputs}>

					<input
					type="text"
					
					placeholder='enter your e-mail address'
					className={styles.inp}
					/>

					<button 
					className={styles.btn}>Subscribe</button>
				</div>



			</div>
			<div>
				<img src="/photos/cmc-mailbox-1.png" alt="style" className={styles.img}/>
			</div>
		</div>


		<News />
	</div>
  );
}

export default Features;






