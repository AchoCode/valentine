import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import usr1 from "../../assets/2022.jpg";
import usr2 from "../../assets/2022-1.jpg";
import usr3 from "../../assets/2023.jpg";
import usr4 from "../../assets/2023-1.jpg";
import usr5 from "../../assets/2023-2.jpg";
import usr6 from "../../assets/2024-3.jpg";
import defaultImage from "../../assets/2022-1.jpg";
import { ReviewCard } from "./ReviewCard";
import { useInView } from "react-intersection-observer";

export const Carousel = ({ autoPlay = true, autoPlayInterval = 7000 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const trackRef = useRef();
  const intervalRef = useRef();

  const updateCarousel = (newIndex) => {
    const itemWidth =
      trackRef.current.children[0].getBoundingClientRect().width;
    trackRef.current.style.transform = `translateX(${-newIndex * itemWidth}px)`;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < userReviews.length - 1 ? currentIndex + 1 : 0;
    updateCarousel(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : userReviews.length - 1;
    updateCarousel(newIndex);
  };

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlayInterval, currentIndex, autoPlay]);

  const userReviews = [
    {
      name: "2022",
      image: usr1 || defaultImage,
    },
    {
      name: "2022",
      image: usr2 || defaultImage,
    },
    {
      name: "2023",
      image: usr3 || defaultImage,
    },
    {
      name: "2023",
      image: usr4 || defaultImage,
    },
    {
      name: "2023",
      image: usr5 || defaultImage,
    },
    {
      name: "2024",
      image: usr6 || defaultImage,
    },
  ];

  return (
    <div variants={variants} animate="visible">
      <div className="carousel review">
        <div ref={trackRef} className="carousel-track">
          {userReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              image={review.image}
              text={review.text}
              occupation={review.occupation}
            />
          ))}
        </div>
        <button className="carousel-btn prev-btn" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="carousel-btn next-btn" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
