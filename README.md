# README

# Melt - Where You Can Find Your Dream Ice Cream Shop 

## introduction

Melt is a Yelp-like clone project that aims to provide a platform for users to discover and review ice cream shops. 
Whether you're a dessert enthusiast or an ice cream connoisseur, Melt is the go-to app for finding the best ice cream shops in your area.


## Technologies Used

- Front-end: HTML, CSS, JavaScript, React.js
- Back-end: Ruby on Rails
- Database: PostgreSQL
- Map Integration: Google Maps API 
- Asset Storage: Amazon S3
- Hosting: Render

# MVPs

# Reviews

The review functionality in Melt allows users to share their experiences and opinions about ice cream shops. Users can write a single review for each ice cream shop. Once a review is submitted, users have the ability to edit their existing review if they wish to update their feedback or provide additional insights. 

# Rating

The rating functionality in Melt allows users to leave a rating for each ice cream shop based on their experience. Users can hover over the rating stars to preview their selection before clicking to submit their rating. Additionally, the app automatically updates the ice cream shop's overall rating to reflect the new feedback. This ensures that users have access to the most accurate and up-to-date shop ratings possible.


```jsx
import React, { useState } from 'react';

const Rating = ({ readOnly }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);

  const onMouseEnter = (index) => {
    if (!readOnly) {
      setHoverRating(index);
    }
  };

  const onMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  const onSaveRating = (index) => {
    if (!readOnly && setRating) {
      setRating(index);
    }
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`star ${index <= (hoverRating || rating) ? 'active' : ''}`}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
          onClick={() => onSaveRating(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};
```