import React, { useState } from "react";
import "./ratingStars.css";

const RatingStars = ({ rating, setRating, readOnly }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const colors = {
    1: "#F44336", //Red
    2: "#FF9800", //Orange
    3: "#FFEB3B", //Yellow
    4: "#4CAF50", //Green
    5: "#2196F3", //Blue
  };

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
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className="star"
          style={{
            color:
              hoverRating >= index && readOnly
                ? colors[index]
                : rating >= index
                ? colors[rating]
                : "#aaa",
          }}
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

export default RatingStars;
