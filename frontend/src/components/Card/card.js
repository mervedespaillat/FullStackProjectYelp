import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/ratingStars";

const CardImage = ({ image, width }) => {
  if (image) {
    return (
      <div className="styleImage">
        <img style={{ marginTop: "-8%" }} src={image} alt=""></img>
      </div>
    );
  }
  return null;
};
const UserInfo = ({ photo, userName }) => {
  const showUserIcon = !photo || photo.trim() === "";

  return (
    <div className="review-user-info">
      {/* <img src={photo} alt="" className="review-user-photo"></img> */}
      {showUserIcon ? (
          <div className="profile-card-photo">
            {/* <i className="fa-solid fa-user"></i> */}
            <img
              src="https://img.freepik.com/premium-vector/flat-instagram-icons-notifications_619991-50.jpg?w=1380"
              alt=""
              className="user-photo userNull"
            ></img>
          </div>
        ) : (
          <div className="profile-card-photo">
            <img src={photo} alt="" className="user-photo" />
          </div>
        )}
      <p className="review-user-name">{userName}</p>
    </div>
  );
};

const CardContent = ({
  shopName,
  address,
  city,
  shopId,
  rating,
  photo,
  userName,
}) => {
  return (
    <div className="styleCardContent">
      <Link to={`/shops/${shopId}`} className="styleCardTitle">
        {shopName}
      </Link>
      <hr></hr>
      <ul className="rating">
        <RatingStars rating={rating} readOnly={true} />
      </ul>
      <p className="styleLocationLabel">
        {address} {city}
      </p>

      {/* <p className="styleDescription">{city}</p> */}
    </div>
  );
};

const Card = ({
  shopName,
  address,
  city,
  image,
  shopId,
  rating,
  photo,
  userName,

}) => {
  return (
    <div className="cardself">
      <div className="styleCard">
        <UserInfo userName={userName} photo={photo} />
        <CardImage image={image}></CardImage>
        <CardContent
          shopId={shopId}
          shopName={shopName}
          address={address}
          city={city}
          photo={photo}
          userName={userName}
          rating={rating} // Pass the rating prop here
          className="card"
        ></CardContent>
      </div>
    </div>
  );
};

export default Card;
