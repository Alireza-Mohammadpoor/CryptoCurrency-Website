








import React from 'react';
import styles from '@/styles/testimonials.module.css';

const Testimonial = () => {
  return (
	<div>
		 <div style={{marginBottom: '35px'}}>

			<h4 style={{
			fontSize: '2.1rem',
			fontWeight: '600',
			fontFamily: 'Outfit, sans-serif',
			// marginBottom: '35px',
			textAlign: 'center',
			marginTop: '60px'
			}}>
			Testimonial
			</h4>
			<pre style={{ textAlign: "center", fontFamily: "Arvo, sans-serif !important", fontWeight : "600" }}>
				switch to <b>Alireza</b> cryprocurrwncy website 
			</pre>
		</div>
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.img}>
          <img 
            src="/photos/testimonials/pexels-tima-miroshnichenko-9572494.jpg" 
            alt="Education" 
          />
        </div>
        <h1 className={styles.heading}>Education and Learning Resources</h1>
        <p className={styles.para}>
          Cryptocurrency can be complex, especially for newcomers. To bridge this gap, we provide a wealth of educational resources to help you make informed decisions.
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.img}>
          <img 
            src="/photos/testimonials/pexels-tdcat-69866.jpg" 
            alt="Seamless Exchange" 
          />
        </div>
        <h1 className={styles.heading}>Seamless Money Exchange</h1>
        <p className={styles.para}>
          We believe in making cryptocurrency transactions as straightforward as possible.
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.img}>
          <img 
            src="/photos/testimonials/pexels-brett-sayles-1119074.jpg" 
            alt="24/7 Support" 
          />
        </div>
        <h1 className={styles.heading}>24/7 Customer Support</h1>
        <p className={styles.para}>
          At our cryptocurrency website, we understand the fast-paced nature of the digital asset world.
        </p>
      </div>
    </div>
	</div>
  );
};

export default Testimonial;
