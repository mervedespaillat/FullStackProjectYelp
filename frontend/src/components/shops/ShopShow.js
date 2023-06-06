import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShop, fetchShop } from "../../store/shops";
import "./shopShow.css";
import MeltMapWrapper from "../Map";
import { getReviewsByShopId } from "../../store/reviews";
import ReviewForm from "../Reviews/reviewForm";
import ReviewIndex from "../Reviews/reviewsIndex";

const ShopShow = () => {
  const dispatch = useDispatch();
  const { shopId } = useParams();
  const shop = useSelector(getShop(shopId));
  
  useEffect(() => {
    dispatch(fetchShop(shopId));
  }, [shopId, dispatch]);
  const reviews = useSelector(getReviewsByShopId(shopId));
  
  if (!shop) {
    return <div>Loading....</div>;
  }
  
  const {
    name,
    address,
    city,
    state,
    zipCode,
    link,
    phoneNumber,
    openingTime,
    closingTime,
  } = shop;
 


  return (
    <>
      {/* <div className="shop-page"> */}
      <div className="image-container">
        <img
          className="shop-pic"
          src={shop.photo}
          alt="shop picture"
        />
        <div className="image-text">
          <h1>{name}</h1>
          <p>
            {openingTime}:00 AM - {closingTime}:00 PM
          </p>
        </div>
        <div className="img-rating">
          <i className="ice-cream-positive" class="fa-solid fa-ice-cream"></i>
          <i class="fa-solid fa-ice-cream"></i>
          <i class="fa-solid fa-ice-cream"></i>
          <i class="fa-solid fa-ice-cream"></i>
          <i className="ice-cream-negative" class="fa-solid fa-ice-cream"></i>
        </div>
      </div>
      <div className="middle-page">
        <div className="middle-container">
          <div className="show-split show-left">
            <div className="map-show">
          
              <MeltMapWrapper className="map-style" />
            </div>
          </div>
          <div className="show-split show-right">
            <div className="show-card">
              <ul className="card-content">
                <li className="card-link">
                  <a href={link} target="_blank">
                    {link}
                  </a>
                </li>
                <hr></hr>
                <li className="address-title">Address:</li>
                <li className="card-street">{address}</li>
                <li className="card-address">
                  {city}, {state}, {zipCode}
                </li>
                <hr></hr>
                <li className="card-phoneNumber">{phoneNumber}</li>
              </ul>
              <ul>
                {reviews.map((review) => (
                  <li key={review.id}>{review.body}</li>
                ))}
              </ul>
            </div>
            <ReviewForm></ReviewForm>
            <ReviewIndex></ReviewIndex>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ShopShow;
