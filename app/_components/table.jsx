
'use client'
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '@/styles/table.module.css';
import Link from 'next/link';
import SwiperComponent from './swiper';
// import Hometrans from './hometransition';
import AboutUs from './aboutus';

// Fetch function to get the cryptocurrency data
const fetchCryptoData = async () => {
  const { data } = await axios.get('https://api.coincap.io/v2/assets');
  return data.data;
};

const currencySymbols = { USD: '$', EUR: '€', INR: '₹' };
const conversionRates = { USD: 1, EUR: 0.85, INR: 75 }; // Example conversion rates

const CryptoTable = () => {
  const { data, isLoading, error } = useQuery('cryptoData', fetchCryptoData);
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const currencySymbol = currencySymbols[selectedCurrency];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCryptos, setFilteredCryptos] = useState([]);

  useEffect(() => {
    if (data) {
      const topTenCryptos = data.slice(0, 10);
      const filtered = topTenCryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCryptos(searchQuery.trim() ? filtered : topTenCryptos);
    }
  }, [searchQuery, data]);

  if (isLoading) return (
    <div>
      <h1>Loading Crypto Data...</h1>
      {/* <SwiperComponent />
      <AboutUs /> */}
      {/* <Hometrans /> */}
    </div>
  );

  if (error) return <div>Error: {error?.message || "Something went wrong"}</div>;

  const coinImages = {
    bitcoin: "/photos/coin-images/bitcoin.webp",
    ethereum: "/photos/coin-images/ethereum.webp",
    tether: "/photos/coin-images/tether.webp",
    'binance-coin': "/photos/coin-images/bnb-icon2_2x.webp",
    solana: "/photos/coin-images/solana.webp",
    'usd-coin': "/photos/coin-images/usdc.webp",
    steth: "/photos/coin-images/steth_logo.webp",
    xrp: "/photos/coin-images/xrp-symbol-white-128.webp",
    dogecoin: "/photos/coin-images/dogecoin.webp",
    tron: "/photos/coin-images/tron-logo.webp"
  };

  const convertPrice = (priceInUsd) => (priceInUsd * conversionRates[selectedCurrency]).toFixed(2);

  return (
	<div>

		 <div className={styles.centercontainer}>
			<div className={styles.ma}>
				<h1>✨Bitcoin ETF has seen massive success !!</h1>
			</div>
		 </div>
    <div className={styles.tableContainer}>

      <div>
        <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className={styles.h1}>Largest</h1>
          <h1 className={styles.h1}>Crypto Marketplace</h1>
          <pre><small>Welcome to the world's largest cryptocurrency.</small></pre>
          <pre><small>Sign up to explore more about cryptos</small></pre>
        </div>

        <div className={styles.inps}>
          <div className={styles.inp} >
            <input 
              type="text" 
              placeholder="Search crypto.." 
              className={styles.maininp} 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.btn}>Search</button>
          </div>
        </div>
      </div>

      {!isLoading && (
        <TableContainer 
          component={Paper} 
          sx={{
            background: 'linear-gradient(#5403ff26, #69029926)', 
            color: "white",
            margin: "0 auto",
            width: "100%",
            maxWidth: "1000px", // Add a max-width for larger screens
            overflowX: "auto" // Allow horizontal scrolling for smaller screens
          }}
        >
          <Table 
            sx={{ 
              minWidth: 700, 
              '& th, & td': { color: 'white' },
              overflowX: "auto"
            }} 
            aria-label="crypto table" 
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bolder', fontSize: "1rem" }}>#</TableCell>
                <TableCell sx={{ fontWeight: 'bolder', fontSize: "1rem" }}>Name</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bolder', fontSize: "1rem" }}>Price ({currencySymbol})</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bolder', fontSize: "1rem" }}>Change (24h)</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bolder', fontSize: "1rem" }}>Market Cap ({currencySymbol})</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredCryptos.map((crypto, index) => (
                <TableRow key={crypto.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: "700" }}>
                    {index + 1}
                  </TableCell>
                  <Link href={`/${crypto.id}`}>
                    <TableCell sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}>
                      <img 
                        src={coinImages[crypto.id] || "/photos/coin-images/default.webp"} 
                        alt={crypto.name} 
                        style={{ width: "20px", height: "20px", marginRight: "8px" }} 
                      />
                      <div>{crypto.name}</div>
                    </TableCell>
                  </Link>
                  <TableCell align="right" sx={{ fontWeight: "700" }}>{currencySymbol}{convertPrice(parseFloat(crypto.priceUsd))}</TableCell>
                  <TableCell align="right" 
                    style={{ color: parseFloat(crypto.changePercent24Hr) > 0 ? 'green' : 'red' }} 
                    sx={{ fontWeight: "700" }}
                  >
                    {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "700" }}>{currencySymbol}{convertPrice(parseFloat(crypto.marketCapUsd))}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      
    </div>
	</div>
  );
};

export default CryptoTable;
