import React from 'react';
import { Box, Skeleton } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        marginTop: '45px',
      }}
    >
      {[...Array(6)].map((_, index) => (
        <Box
          key={index}
          sx={{
            width: '260px',
            height: 'auto',
            background: 'inherit',
            // background: 'rgba(250, 250, 250, 0.1)',
            borderRadius: '8px',
            padding: '16px',
            // boxShadow: '0px 10px 12px 7px rgba(255, 255, 255, 0.1)',
          }}
        >
          <Skeleton variant="rectangular" width="100%" height={145} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', marginTop: 2 }} />
          <Skeleton variant="text" sx={{ fontSize: '0.8rem', width: '80%' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Skeleton variant="text" sx={{ width: '40%' }} />
            <Skeleton variant="text" sx={{ width: '30%' }} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LoadingSkeleton;
