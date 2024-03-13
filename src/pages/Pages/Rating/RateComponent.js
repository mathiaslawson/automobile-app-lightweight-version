import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const RatingComponent = ({ totalStars = 5, defaultValue = 0, onChange }) => {
  const [rating, setRating] = useState(defaultValue);

  const handleMouseOver = (value) => {
    setRating(value);
  };

  const handleMouseLeave = () => {
    setRating(defaultValue);
  };

  const handleClick = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span
          key={i}
          className="rating-star"
          onMouseOver={() => handleMouseOver(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
          <FontAwesomeIcon
            icon={i <= rating ? fasStar : farStar}
            color={i <= rating ? '#ffc107' : '#e4e5e9'}
          />
        </span>
      );
    }
    return stars;
  };

  return <div className="rating-container">{renderStars()}</div>;
};

export default RatingComponent;