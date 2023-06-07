import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShop, fetchShop } from "../../store/shops";
import "./shopPage.css";
import MeltMapWrapper from "../Map";
import { getReviewsByShopId } from "../../store/reviews";
import ReviewForm from "../Reviews/reviewForm";
import ReviewIndex from "../Reviews/reviewIndex";
import ReviewIndexItem from "../Reviews/reviewIndexItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const ShopShow = () => {
  const dispatch = useDispatch();
  const history = useHistory()
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

  const handleClick = (e) => {
    e.preventDefault()
    history.push(`/shops/${shopId}/review`);
  };

  return (
    <>
      <div className="image-cover">
        <img
          className="shop-pic"
          src="https://images.unsplash.com/photo-1627373717559-17b8b84b2c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="shop picture"
        ></img>
        <div className="shop-image-overlay">
          <h1 className="shop-name">{name}</h1>
          <div className="img-rating">
            <ul className="rating-list">
              <li>
                <i
                  className="ice-cream-positive"
                  class="fa-solid fa-ice-cream"
                ></i>
              </li>
              <li>
                <i class="fa-solid fa-ice-cream"></i>
              </li>
              <li>
                {" "}
                <i class="fa-solid fa-ice-cream"></i>
              </li>
              <li>
                <i class="fa-solid fa-ice-cream"></i>
              </li>
              <li>
                <i
                  className="ice-cream-negative"
                  class="fa-solid fa-ice-cream"
                ></i>
              </li>
              <li className="review-count">{reviews.length} reviews</li>
            </ul>
          </div>
          <div className="shop-content">
            <i class="fa-solid fa-circle-check"></i>
            <span className="check-text"> Claimed</span>
            <span className="check-text1"> • $$ • Ice Cream, Milkshake</span>
            <p className="hours">
              {" "}
              <span style={{ color: "rgba(4,197,133,1)" }}>Open </span>
              {openingTime}:00 AM - {closingTime}:00 PM
            </p>
          </div>
        </div>

        <button className="review-btn" onClick={handleClick}>
          <i class="fa-regular fa-star"></i> Write a review
        </button>
      </div>
      <div className="middle-page">
        <div className="middle-container">
          <div className="show-split show-left">
            <div className="map-show-hour">
              <div className="item">
                <h1>Location & Hours</h1>
              </div>
              <div className="item edit-section">
                <span>Suggest an edit</span>
                <i class="fa-solid fa-pencil"></i>
              </div>
              <div className="middle-section">
                <div className="map-section">
                  <MeltMapWrapper className="map-style" />
                </div>
                <div className="address-section">
                  <p>{address}</p>
                  <p>
                    {city},{zipCode}
                  </p>
                  <p>{state}</p>
                </div>
                <div className="day-hours">
                  <p>
                    {" "}
                    Mon {openingTime}:00 AM - {closingTime}:00 PM
                  </p>
                  <p>
                    {" "}
                    Tue {openingTime}:00 AM - {closingTime}:00 PM
                  </p>
                  <p>
                    {" "}
                    Wed {openingTime}:00 AM - {closingTime}:00 PM
                  </p>
                  <p>
                    {" "}
                    Thu {openingTime}:00 AM - {closingTime}:00 PM
                  </p>
                  <p>
                    {" "}
                    Fri {openingTime}:00 AM - {closingTime}:00 PM
                  </p>
                  <p>
                    {" "}
                    Sat {openingTime}:00 AM - {closingTime}:00 PM
                  </p>
                  <p>
                    {" "}
                    Sun {openingTime}:00 AM - {closingTime}:00 PM
                  </p>
                </div>
              </div>
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
                <li className="address-title" style={{color: "rgba(2,122,151,1)"}}>Address:</li>
                <li className="card-street">{address}</li>
                <li className="card-address">
                  {city}, {state}, {zipCode}
                </li>
                <hr></hr>
                <li className="card-phoneNumber">{phoneNumber}</li>
              </ul>
              {/* <ul>
                {reviews.map((review) => (
                  <li key={review.id}>{review.body}</li>
                ))}
              </ul> */}
            </div>
            {/* <ReviewForm></ReviewForm> */}
            <ReviewIndex></ReviewIndex>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopShow;
