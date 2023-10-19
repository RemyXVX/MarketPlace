'use client'
import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className="banner">
      <img src={images[currentImageIndex]} alt="Product" />
      <h1>Check out our latest products for sale!</h1>
      <p>We have a wide selection of items to choose from.</p>
      <button className="btn btn-primary" onClick={() => window.location.href = '/shop'}>Shop Now</button>
      <button className="btn btn-secondary" onClick={() => window.location.href = '/contact'}>Contact Us</button>
    </div>
  );
};

export default Banner;
