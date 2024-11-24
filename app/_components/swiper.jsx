



// import styles from '@/style'
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '@/styles/news.module.css'
// Import required modules
import { Autoplay } from 'swiper/modules';
import { Rating } from '@mui/material';

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State for current slide index
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered slide index

  const swiperRef = useRef(null); // Ref to access Swiper instance

  const getBlogPosts = async () => {
    try {
      const response = await fetch('/api/trade');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data.courses);
      } else {
        setError('Error fetching data.');
      }
    } catch (error) {
      setError('Error fetching data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  // Handler to update current index on slide change
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex); // Update current index
  };

//   if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Custom pagination rendering
  const renderPagination = () => {
    return (
      <div className="custom-pagination">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              swiperRef.current.swiper.slideTo(index); // Change slide on click
              setCurrentIndex(index); // Update current index on click
            }}
            className="pagination-button"
            style={{
              margin: '0 03px',
              borderRadius: '50%',
              cursor: 'pointer',
              width: "6px",
              height: "6px",
              backgroundColor: currentIndex === index ? 'hsl(211, 100%, 60%)' : 'hsl(0, 0%, 70%)',
              border: 'none',
              transition: 'background-color 0.3s',
            }}
				
          >
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.all}>

		<div style={{marginBottom: '25px', marginTop : "85px"}}>

				<h4 style={{
				fontSize: '2.1rem',
				fontWeight: '600',
				fontFamily: 'Outfit, sans-serif',
				
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				//  marginTop : "30px"
				}}
				>What We Offer</h4>
				<pre style={{ textAlign: "center", fontFamily: "Arvo, sans-serif !important", fontWeight : "600" }}>
					Our courses
				</pre>
		</div>
      <Swiper
        slidesPerView={'1'}
        ref={swiperRef} // Attach ref to Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000, // Set delay to 5000ms for 5 seconds
          disableOnInteraction: false, // Keep autoplay running after user interactions
        }}
        onSlideChange={handleSlideChange} // Call handler on slide change
        modules={[Autoplay]}
        className="mySwiper"
        style={{
          marginTop: "50px",
          marginBottom: "25px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {blogs.map((course, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 2000ms ease-in-out', // Transition for the slide
            }}
          >
            <div
              style={{
                width: "770px",
                height: "430px",
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hoveredIndex on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Reset hoveredIndex on mouse leave
            >
              {/* Dark overlay on the image */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark effect
                  zIndex: 1,
                }}
              ></div>

              {/* Image */}
              <img
                src={course.imagesrc || '/path/to/fallback-image.jpg'} // Provide fallback if no image source
                alt={`Course Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: 'cover',
                  zIndex: 0, // Image should be below the dark overlay
                }}
					 className={styles.image}
              />

              {/* Content on top of the image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '5%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  zIndex: 2,
                  display: "flex",
                  gap: "30px",
                  width: "100%",
                  textAlign: "left",
                  alignItems: "start",
                  justifyContent: "left",
                  marginLeft: "15px",
                  marginBottom: "18px",
                  opacity: hoveredIndex === index ? 0 : 1, // Hide original content when hovering
                  transform: hoveredIndex === index ? 'translateY(30px)' : 'translateY(0)', // Slide out the original content
                  transition: 'opacity 0.6s ease, transform 1.1s ease', // Transition for slide-up effect
                }}
              >
                {/* Button and Heading */}
                <button
                  className='btn'
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    marginTop: "20px",
                    fontWeight: "500",
                    borderRadius: "30px",
                    width: "125px",
                    height: "30px",
                    fontSize: "0.8rem"
                  }}
                >
                  Register Now
                </button>

                <h1
                  style={{
                    fontWeight: "900",
                    fontSize: "1.4rem",
                    margin: 0,
                    textAlign: "left",
                    width: "450px"
                  }}
                >
                  {course.tradingDetails}
                </h1>
              </div>

              {/* Lorem Text (show when hovered) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '5%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  zIndex: 2,
                  width: "100%",
                  textAlign: "left",
						alignItems : "start",
						justifyContent : "left",
                  opacity: hoveredIndex === index ? 1 : 0, // Show Lorem text when hovered
                  transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(30px)', // Animate the Lorem text
                  transition: 'opacity 0.6s ease, transform 1.1s ease',
                }}
              >
                {/* <p style={{
                  fontWeight: "500", 
                  fontSize: "1rem", 
                  margin: 0,
                  textAlign: "left",
                  width: "450px"
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quod culpa consectetur excepturi doloremque laudantium sed ipsa tempora aliquam dicta quisquam sint esse aspernatur nesciunt voluptatibus dolores, officiis itaque totam!
                </p> */}
					 <h1 style={{
                  fontWeight: "800", 
                  fontSize: "1.5rem", 
                  margin: 0,
                  textAlign: "left",
                  width: "450px"
                }}>{course.title}</h1>
					 <p style={{width : "300px"}}><small>{course.description}{course.tradingDetails}</small></p>
					 <Rating
                name="half-rating-read"
                defaultValue={course.stars}
                precision={0.5}
                readOnly
                size="small"
					 sx={{color : "white", fontSize : "1.1rem", marginTop : "6px"}}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
        {renderPagination()}
      </div>

    </div>
  );
}
