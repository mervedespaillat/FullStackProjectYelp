import React, { useEffect } from "react";
import './card.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchShopLast } from "../../store/shops";

const CardImage = ({ image, width }) => {
  if (image) {
    return (
      <div className="styleImage">
        <img
          style={{ marginTop: "-8%" }}
          src={image}
          alt="Sivas"
        ></img>
      </div>
    );
  }
  return null;
};

const CardContent = ({ shopName, address, city }) => {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{shopName}</p>
      <ul className="rating">
        <li><i class="fa-solid fa-ice-cream"></i></li>
        <li><i class="fa-solid fa-ice-cream"></i></li>
        <li><i class="fa-solid fa-ice-cream"></i></li>
        <li><i class="fa-solid fa-ice-cream"></i></li>
        <li><i class="fa-solid fa-ice-cream"></i></li>
      </ul>
      <p className="styleLocationLabel">{address}, {city}</p>
      {/* <p className="styleDescription">{city}</p> */}
    </div>
  );
};

const Card = ({shopName, address, city}) => {


  return (
    <div >
      <div className="styleCard">
        <CardImage image={"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"}></CardImage>
        <CardContent
          
          shopName={shopName}
          address={address}
          city={city}
          className="card"
        ></CardContent>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Card
