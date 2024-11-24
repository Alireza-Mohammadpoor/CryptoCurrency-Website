



import React, { useRef, useState } from 'react';
import styles from '@/styles/aboutus.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.allof}>
      <div style={{marginBottom: '35px'}}>

			<h4 style={{
			fontSize: '2.1rem',
			fontWeight: '600',
			fontFamily: 'Outfit, sans-serif',
			// marginBottom: '35px',
			textAlign: 'center',
			marginTop: '60px'
			}}>
			About Our Website
			</h4>
			<pre style={{ textAlign: "center", fontFamily: "Arvo, sans-serif !important", fontWeight : "600" }}>
				be familiar with us
			</pre>
		</div>
      <div className={styles.mine}>
        <div className={styles.videocontainer}>
          <video
            ref={videoRef}
            className={styles.videoplayer}
            poster="/photos/trading/pexels-anna-nekrashevich-6802049.jpg"
            onClick={handlePlayPause}
          >
            <source src="/photos/7578614-uhd_2160_4096_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button className={styles.playButton} onClick={handlePlayPause}>
              <FontAwesomeIcon icon={faPlay} width="200" height="200" />
            </button>
          )}
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.h1}>
            Welcome to CryptoCoinHub – Your Gateway to the World of Cryptocurrencies
          </h1>
          <h6 className={styles.pp}>
            At CryptoCoinHub, we are dedicated to providing comprehensive, reliable, and up-to-date
            information about the ever-evolving world of cryptocurrencies. As the digital economy
            grows, we aim to be your trusted resource for all things related to crypto assets, from
            the latest news and trends to detailed insights on various coins and blockchain
            technologies.
          </h6>
          <h6 className={styles.pp}>
            Our mission is to empower individuals and businesses to make informed decisions about
            investing in digital currencies. Whether you're a seasoned trader or a newcomer
            exploring the world of blockchain, our platform offers easy-to-understand resources,
            tools, and market analysis to help you navigate the complex landscape of
            cryptocurrencies.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
