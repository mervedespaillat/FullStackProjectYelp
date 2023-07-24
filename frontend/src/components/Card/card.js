// import React, { useEffect, useState } from "react";
// import './card.css'
// import { useDispatch, useSelector } from "react-redux";
// import { fetchShopLast, getShop } from "../../store/shops";
// import RatingStars from "../RatingStars/ratingStars";
// import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { fetchReviews, getReviews } from "../../store/reviews";


// const CardImage = ({ image, width }) => {
//   if (image) {
//     return (
//       <div className="styleImage">
//         <img
//           style={{ marginTop: "-8%" }}
//           src={image}
//           alt=""
//         ></img>
//       </div>
//     );
//   }
//   return null;
// };

// const CardContent = ({ shopName, address, city, shopId }) => {

//   const [ rating, setRating] = useState(0)

//   return (
//     <div className="styleCardContent">
//       <p className="styleCardTitle">{shopName}</p>
//       <ul className="rating">
//         <RatingStars rating={rating} setRating={(setRating)} readOnly={true}/>
//       </ul>
//       <p className="styleLocationLabel">{address}, {city}</p>
//       {/* <p className="styleDescription">{city}</p> */}
//     </div>
//   );
// };

// const Card = ({shopName, address, city, image, shopId}) => {


//   return (
//     <div >
//       <div className="styleCard">
//         <CardImage image={image}></CardImage>
//         <CardContent
//           shopId={shopId}
//           shopName={shopName}
//           address={address}
//           city={city}
//           className="card"
//         ></CardContent>
//         {/* ))} */}
//       </div>
//     </div>
//   );
// };

// export default Card


import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/ratingStars";

const CardImage = ({ image, width }) => {
  if (image) {
    return (
      <div className="styleImage">
        <img
          style={{ marginTop: "-8%" }}
          src={image}
          alt=""
        ></img>
      </div>
    );
  }
  return null;
};

const CardContent = ({ shopName, address, city, shopId, rating }) => {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{shopName}</p>
      <ul className="rating">
        <RatingStars rating={rating} readOnly={true} />
      </ul>
      <p className="styleLocationLabel">
        {address}, {city}
      </p>
      {/* <p className="styleDescription">{city}</p> */}
    </div>
  );
};

const Card = ({ shopName, address, city, image, shopId, rating }) => {
  return (
    <div>
      <div className="styleCard">
        <CardImage image={image}></CardImage>
        <CardContent
          shopId={shopId}
          shopName={shopName}
          address={address}
          city={city}
          rating={rating} // Pass the rating prop here
          className="card"
        ></CardContent>
      </div>
    </div>
  );
};

export default Card;
