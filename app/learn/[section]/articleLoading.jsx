import React from 'react';
import { Box, Skeleton } from '@mui/material';
import styles from '@/styles/articles.module.css'; // Assuming your styles are imported here

const SkeletonLoader = () => {
  return (
    <Box sx={{ backgroundColor: 'inherit', padding: '20px' }}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <Skeleton variant="text" width="50%" height={40} />
          <Skeleton variant="text" width="70%" height={20} />
        </div>
      </div>

      {/* Skeleton for each article card */}
      {[...Array(8)].map((_, index) => (
        <div key={index} className={styles.all}>
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="rectangular" width={200} height={180} />
          <div className={styles.textContent}>
            <Skeleton variant="text" width="70%" height={40} />
            <Skeleton variant="text" width="50%" height={20} />
            <Skeleton variant="text" width="90%" height={15} />
            <Skeleton variant="text" width="30%" height={15} />
          </div>
        </div>
      ))}

      <div className={styles.paginationContainer}>
        <Skeleton variant="rectangular" width={40} height={30} />
        <Skeleton variant="rectangular" width={40} height={30} />
      </div>
    </Box>
  );
};

export default SkeletonLoader;
