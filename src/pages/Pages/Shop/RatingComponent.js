import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const RatingItem = ({ rating, numberOfStars }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const containerStyle = {
    backgroundColor: isHovered || isSelected ? 'black' : 'transparent',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const textStyle = {
    color: isHovered || isSelected ? '#fff' : 'inherit',
  };

  return (
    <div
      className="d-flex"
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={numberOfStars}
          name="rating"
          starDimension="20px"
        />
      </div>
      <div className="mt-1 mx-2 fw-bolder" style={textStyle}>
        ({rating})
      </div>
    </div>
  );
};

const RatingList = () => {
  const ratings = [
    { rating: 2, numberOfStars: 5 },
    { rating: 3.5, numberOfStars: 5 },
    { rating: 3.5, numberOfStars: 5 },
    { rating: 2, numberOfStars: 2 },
    { rating: 1, numberOfStars: 1 },
  ];

  return (
    <div className="d-grid gap-2">
      {ratings.map((rating, index) => (
        <RatingItem key={index} rating={rating.rating} numberOfStars={rating.numberOfStars} />
      ))}
    </div>
  );
};

export default RatingList;