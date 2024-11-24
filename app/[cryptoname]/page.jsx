'use client'; // Use this if you're managing state or effects
import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams to get dynamic route params
import Crypto24HourStats from '../_components/cryptopage'; // Adjust the import path based on your project structure

const CryptoPage = () => {
  const { cryptoname } = useParams(); // Get the dynamic route parameter

  // Normalize the cryptoname for the API call
  const normalizedCryptoId = cryptoname.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens and convert to lowercase

  return (
    <div>
		{/* <h1>hello</h1> */}
		<Crypto24HourStats cryptoId={normalizedCryptoId} />
    </div>
  );
};

export default CryptoPage;
