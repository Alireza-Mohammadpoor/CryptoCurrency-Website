'use client'

import React from 'react'
import Table from './table'
import ClientLayout from './queryclientprovider'
// import NavBar from './navbar'
import AboutUs from './aboutus'
import SwiperComponent from './swiper';
import styles from '@/styles/body.module.css'
import Testimonial from './testimonials'



const Body = () => {
  return (
	 <div  className={styles.bodyWrapper}>
		
		<ClientLayout>
			<div className={styles.section} ><Table /></div>
			<div className={styles.section} ><SwiperComponent /></div>
			<div className={styles.section} ><AboutUs /></div>
			<div className={styles.section} ><Testimonial /></div>
		  
        
      </ClientLayout>
	 </div>
  )
}

export default Body






