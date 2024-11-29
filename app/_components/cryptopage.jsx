

'use client'; // Necessary if you're using hooks or state
import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from '@/styles/cryptopage.module.css';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Crypto24HourStats = ({ cryptoId }) => {
//   const [stats, setStats] = useState({ priceUsd: null, rank: null, marketCapUsd: null, changePercent24Hr: null });
//   const [symbol, setSymbol] = useState(null); // State to store the symbol
//   const [priceHistory, setPriceHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to fetch 24-hour stats and historical prices
//   const getCrypto24HourStats = async () => {
//     const url = `https://api.coincap.io/v2/assets/${cryptoId}`;
//     const historyUrl = `https://api.coincap.io/v2/assets/${cryptoId}/history?interval=h1`;

//     try {
//       const [response, historyResponse] = await Promise.all([fetch(url), fetch(historyUrl)]);
//       const data = await response.json();
//       const historyData = await historyResponse.json();

//       if (response.ok && historyResponse.ok) {
//         const priceUsd = data.data.priceUsd;
//         const rank = data.data.rank;
//         const marketCapUsd = data.data.marketCapUsd;
//         const changePercent24Hr = data.data.changePercent24Hr;
//         const symbol = data.data.symbol.toLowerCase(); // Get the symbol in lowercase

//         const prices = historyData.data.map(entry => ({
//           time: new Date(entry.time).toLocaleTimeString(),
//           price: entry.priceUsd
//         }));

//         setStats({ priceUsd, rank, marketCapUsd, changePercent24Hr });
//         setSymbol(symbol); // Save symbol to state
//         setPriceHistory(prices);
//       } else {
//         setError('Error fetching data.');
//       }
//     } catch (error) {
//       setError('Error fetching data: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (cryptoId) {
//       getCrypto24HourStats();
//     }
//   }, [cryptoId]);


const Crypto24HourStats = ({ cryptoId }) => {
	const [stats, setStats] = useState({ priceUsd: null, rank: null, marketCapUsd: null, changePercent24Hr: null });
	const [symbol, setSymbol] = useState(null);
	const [priceHistory, setPriceHistory] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
 
	// Memoize the function to avoid re-creation on every render
	const getCrypto24HourStats = useCallback(async () => {
	  const url = `https://api.coincap.io/v2/assets/${cryptoId}`;
	  const historyUrl = `https://api.coincap.io/v2/assets/${cryptoId}/history?interval=h1`;
 
	  try {
		 const [response, historyResponse] = await Promise.all([fetch(url), fetch(historyUrl)]);
		 const data = await response.json();
		 const historyData = await historyResponse.json();
 
		 if (response.ok && historyResponse.ok) {
			const priceUsd = data.data.priceUsd;
			const rank = data.data.rank;
			const marketCapUsd = data.data.marketCapUsd;
			const changePercent24Hr = data.data.changePercent24Hr;
			const symbol = data.data.symbol.toLowerCase();
 
			const prices = historyData.data.map(entry => ({
			  time: new Date(entry.time).toLocaleTimeString(),
			  price: entry.priceUsd,
			}));
 
			setStats({ priceUsd, rank, marketCapUsd, changePercent24Hr });
			setSymbol(symbol);
			setPriceHistory(prices);
		 } else {
			setError('Error fetching data.');
		 }
	  } catch (error) {
		 setError('Error fetching data: ' + error.message);
	  } finally {
		 setLoading(false);
	  }
	}, [cryptoId]); // Include cryptoId in dependencies as it changes
 
	useEffect(() => {
	  if (cryptoId) {
		 getCrypto24HourStats();
	  }
	}, [cryptoId, getCrypto24HourStats]); // Include memoized function
 
	// Rest of the component...
 

  const chartData = {
    labels: priceHistory.map(p => p.time),
    datasets: [
      {
        label: 'Price (USD)',
        data: priceHistory.map(p => p.price),
        borderColor: 'lightblue',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    maintainAspectRatio: false,
  };

  const formatPrice = (price) => {
    if (!price) return '0.00';
    const [whole, fraction] = parseFloat(price).toFixed(2).split('.');
    return `${parseInt(whole).toLocaleString()}.${fraction}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!cryptoId) return <div>No cryptocurrency ID provided.</div>;

  // Construct logo URL
  const logoUrl = symbol
    ? `https://assets.coincap.io/assets/icons/${symbol}@2x.png`
    : null; // Only construct the URL if the symbol exists

  return (
    <div className={styles.container}>
      {/* Display the logo at the top */}
      {logoUrl && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={logoUrl} alt={`${cryptoId} logo`} style={{ width: '100px', height: '100px' }} />
        </div>
      )}

      <h2 className={styles.title}>
       {cryptoId.charAt(0).toUpperCase() + cryptoId.slice(1)}({symbol.toUpperCase()})
      </h2>

      <div className={styles.statsContainer}>
        <div className={styles.chart}>
          <Line data={chartData} options={chartOptions} />
        </div>

        <div style={{ textAlign: 'center', width: '100%', maxWidth: '600px', marginTop: '20px' }}>
          <div className={styles.stat}>
            <p>Crypto Rank:</p>
            <span>{stats.rank}</span>
          </div>
          <div className={styles.stat}>
            <p>Current Price (USD):</p>
            <span>${formatPrice(stats.priceUsd)}</span>
          </div>
          <div className={styles.stat}>
            <p>Market Cap (USD):</p>
            <span>${formatPrice(stats.marketCapUsd)}</span>
          </div>
          <div className={styles.stat} style={{ border: 'none' }}>
            <p>Last 24 hour changes:</p>
            <span>{parseFloat(stats.changePercent24Hr).toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto24HourStats;