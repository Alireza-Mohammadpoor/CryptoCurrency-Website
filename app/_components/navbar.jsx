


'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/styles/navbar.module.css';
import CustomDropdown from './dropdown';
import Link from 'next/link';

import SwipeableTemporaryDrawer from './drawer';

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const updateScreenSize = () => {
    const width = document.documentElement.clientWidth;
    const isSmallScreen = width <= 768;
    console.log(`Screen width: ${width}`);
    setIsMobile(isSmallScreen);
    if (isSmallScreen) {
      console.log("small");
    } else {
      console.log("large");
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible);
//   };

  function clickHandler() {
    router.push('/signup');
  }

  return (
    <div>
      <div style={{ marginTop: '20px', margin: '20px 30px', opacity: "0.9" }} className={styles.navcom}>
        <div>
          <Link href='/'>
            <img src="/photos/LOGO2.png" alt="LOGO" className={styles.logo} />
          </Link>
        </div>
		  <div style={{display : "flex", textAlign : "center", alignItems : "center", justifyContent : "center"}}>

			<div className={styles.hideinmobile} >

				<div className={styles.navcenter }>
					<Link href='/'>
						<div className={styles.navmember}>Home</div>
					</Link>
					<Link href='/features'>
						<div className={styles.navmember}>Features</div>
					</Link>
					<Link href='/learn/courses'>
						<div className={styles.navmember}>Learn</div>
					</Link>
					<Link href='/blog'>
						<div className={styles.navmember}>Blog</div>
					</Link>
					<Link href='/contactus'>
						<div className={styles.navmember}>Contact-us</div>
					</Link>

				</div>
			</div>
			<div className = {styles.navv}>

					<SwipeableTemporaryDrawer />
					{/* <Navres /> */}
			</div>
		  </div>
		  <div className={styles.hideinmobile}>

          <div className={styles.buttons}>
        {pathname === '/' && <CustomDropdown />}
            
            <div
              style={{ display: 'flex', gap: '0px', backgroundColor: 'white', borderRadius: '30px', fontSize: 'small' }}
              onClick={clickHandler}
            >
              <button className={styles.btn}>Sign Up</button>
              <img
                src="/photos/noun-north-east-arrow-765869.png"
                alt=""
                style={{ width: '30px', height: '30px' }}
              />
            </div>
          </div>
		  </div>
        
        <hr style={{ marginTop: '35px', width: '100%' }} />
      </div>
      {/* {isSidebarVisible && (
        <ul className={styles.sidebar}>
          <li>about us</li>
          <li>blog</li>
          <li>home</li>
          <li>features</li>
        </ul>
      )} */}
		{/* <img src="/photos/Screenshot (210).png" alt="mmd" style={{width : "350px", height : "180px"}}/> */}
    </div>
  );
};

export default NavBar;

