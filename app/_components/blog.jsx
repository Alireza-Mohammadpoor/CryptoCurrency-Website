


'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/styles/blog.module.css';
import BlogLoadingPage from './blogLoading';
import App from './swiper';
import HomeLoadingPage from './homeLoading';
import Testimonial from './testimonials';

const BlogComponent = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBlogPosts = async () => {
    const articlesEndpoint = '/api/blogs';

    try {
      const response = await fetch(articlesEndpoint);
      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data);
        
        const articles = data.articles || data;
        
        if (Array.isArray(articles)) {
          setBlogPosts(articles);
        } else {
          throw new Error('Received data is not an array');
        }
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  if (loading) return <BlogLoadingPage />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
		
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          fontFamily: 'Outfit, sans-serif',
          marginBottom: '25px',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: "30px"
        }}
      >
        Our Latest Blogs
      </h1>
      <div className={styles.postss}>
        {blogPosts.length > 0 ? (
          blogPosts.map((blog, index) => (
            <div key={index} className={styles.post}>
              <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                <div>
                  <img 
                    src={blog.person?.image || ''} 
                    alt={`Blog post by ${blog.person?.name || 'Unknown'}`}
                    style={{width: "40px", height: "40px", borderRadius: "100px"}} 
                  />
                </div>
                <div>
                  <h2 style={{fontFamily : "Outfit, sans-serif", fontWeight : "600", fontSize : "0.9rem"}}>{blog.person?.name}</h2>
                  <pre style={{fontWeight : "500", fontSize : "0.7rem"}}>
                    {blog.person?.country}, {blog.person?.city}
                  </pre>
                </div>
              </div>
              <h3 className={styles.postTitle} 
				  >{blog.title}</h3>
              <p className={styles.postContent}> {blog.body}</p>
              <p  className={styles.postDate}>{blog.date}</p>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
		
      {/* <App /> */}
      {/* <HomeLoadingPage /> */}
    </div>
  );
};

export default BlogComponent;


///style={{fontWeight : "700", fontSize : "1.1rem", width : "270px", marginTop : "18px",textAlign : "center", marginLeft : "20px"}}
