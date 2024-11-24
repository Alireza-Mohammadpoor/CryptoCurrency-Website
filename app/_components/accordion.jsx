

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
// import styles from '@/styles/accordion.module.css'
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div
      style={{
        marginTop: '50px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

      }}

		// className={styles.container}
    >
      {[ // Accordion data for reusability
        {
          question: 'How do I subscribe to the CoinMarketCap Newsletter?',
          answer: `To subscribe, go to the CoinMarketCap website, find the Newsletter signup section, and enter your email address. Click on "Subscribe" to confirm, and you will receive an email to confirm your subscription.`,
        },
        {
          question: 'How often will I receive the CoinMarketCap Newsletter?',
          answer: `The CoinMarketCap Newsletter is sent out on a daily basis, providing you with a curated digest of the most important news and analysis in the crypto markets.`,
        },
        {
          question: 'Is there a cost to subscribing to the CoinMarketCap Newsletter?',
          answer: `No, the CoinMarketCap Newsletter is a free subscription service, and there are no associated costs or obligations involved.`,
        },
        {
          question: 'Can I share the CoinMarketCap Newsletter with friends or colleagues?',
          answer: `Yes, feel free to share the newsletter with anyone you think might be interested in staying updated on the crypto market, news, project developments, and more.`,
        },
        {
          question: 'How do I unsubscribe from the CoinMarketCap Newsletter?',
          answer: `If you no longer wish to receive the newsletter, you can find the "Unsubscribe" link located at the bottom of each newsletter email. Simply click the link, and you will be removed from the mailing list.`,
        },
      ].map((item, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: 'rgb(34, 37, 49)',
            color: 'white',
            fontFamily: 'arvo',
            fontWeight: '800',
            width: {
              xs: '90%', // 90% of the width for small screens
              sm: '80%', // 80% of the width for medium screens
              md: '700px', // Fixed width for larger screens
            },
            borderRadius: '10px',
            marginBottom: '20px',
            boxShadow: 'hsl(0, 0%, 40%) 0 3px 18px',
            border: '1px solid hsl(0, 0%, 25%)',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
