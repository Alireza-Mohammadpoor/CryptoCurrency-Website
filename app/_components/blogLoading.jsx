import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import styles from '@/styles/blog.module.css'; // Ensure the path is correct for your project

const BlogLoadingPage = () => {
  return (
    <div className={styles.skeletonGrid}>
      {[...Array(6)].map((_, index) => (
        <div key={index} className={styles.post}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Skeleton variant="circular" width={45} height={45} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Skeleton variant="text" width={120} height={24} />
              <Skeleton variant="text" width={150} height={18} />
            </div>
          </div>

          <Skeleton
            variant="text"
            width="80%"
            height={32}
            sx={{
              fontSize: '1.3rem',
              fontWeight: '600',
              fontFamily: 'Outfit, sans-serif',
              textAlign: 'center',
              margin: '20px auto',
            }}
          />

          <Skeleton
            variant="rectangular"
            width="100%"
            height={100}
            sx={{
              borderRadius: '8px',
              marginTop: '10px',
            }}
          />

          <Skeleton
            variant="text"
            width="60%"
            height={20}
            sx={{
              fontSize: '0.8rem',
              textAlign: 'center',
              marginTop: '10px',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogLoadingPage;
