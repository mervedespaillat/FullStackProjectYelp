import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShop, fetchShop } from "../../store/shops";
import "./shopPage.css";
import MeltMapWrapper from "../Map";
import { fetchReviews, getReviewsByShopId } from "../../store/reviews";
import ReviewIndex from "../Reviews/reviewIndex";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import RatingStars from "../RatingStars/ratingStars";
import { getReviews } from "../../store/reviews";
import Highlights from "../Highlights/highlights";
import AboutBiz from "../AboutBiz/AboutBiz";
import {Redirect} from "react-router-dom"

const ShopShow = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { shopId } = useParams();
  const shop = useSelector(getShop(shopId));


  const reviews = useSelector(getReviews);
  let sessionUser = useSelector(state => state.session.user);
  if (!sessionUser) {
    sessionUser = {};
  }
  
  const [ rating, setRating] = useState(0)
  
  const total_review = reviews.length
 

  useEffect(()=>{
    dispatch(fetchReviews(shopId))
  },[shopId])

  

    
const handleNew = e => {
  e.preventDefault();
  if (sessionUser && sessionUser.id) {
    debugger
      history.push(`/shops/${shopId}/review`)
  } else {
    debugger
history.push("/login")  };
}


const handleUpdate = e => {
  debugger
  e.preventDefault();
  history.push(`/shops/${shopId}/${userReviewId}/edit`)
}

  const userReview = reviews.find(review => review.userFname === sessionUser.firstName); // t or f
  console.log("user review=", reviews.find(review => review.userFname === sessionUser.firstName))
  const userReviewId = userReview ? userReview.id : null; // review id



  const reviewButton = userReview ? 
        ( <button type="submit" id="rev-sub-btn" onClick={handleUpdate}><i id="rev-sub-star" className="far fa-star"></i>Update Your Review</button>) 
        : 
        (<button type="submit" id="rev-sub-btn" onClick={handleNew}><i id="rev-sub-star" className="far fa-star"></i>Write a Review</button>);

  if (!shopId || !userReview) {
          <h1>loading...</h1>
      }

  useEffect(()=>{
    if(shop){
      setRating(shop.rating)
    }
  },[shop])
  

  useEffect(() => {
    dispatch(fetchShop(shopId));
  }, [shopId, dispatch]);
  

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
    photo,
    longitude
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
          src={photo}
          alt="shop picture"
        ></img>
        <div className="shop-image-overlay">
          <h1 className="shop-name">{name}</h1>
          <div className="img-rating">
            <ul className="rating-list">
              <li>
                <RatingStars rating={rating} setRating={setRating} readOnly={true}></RatingStars>
              </li>
              <li className="review-count">{shop.rating} {total_review} reviews</li>
              
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

    {reviewButton}
        {/* <button className="review-btn" onClick={handleClick}>
          <i class="fa-regular fa-star"></i> Write a review
        </button> */}
      </div>
      <div className="middle-page">
        <div className="middle-container">
          <div className="show-split show-left">
            <div className="map-show-hour">
              <div className="biz-header">
              <div className="item">
                <h1>Location & Hours</h1>
              </div>
              <div className="item edit-section">
                <span>Suggest an edit</span>
                <i class="fa-solid fa-pencil"></i>
              </div>
              </div>
              <div className="address-map">
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
            <div className="amenities">
              <h1>Highlights from the Business</h1>
              <Highlights/>
            </div>
            <div className="about-biz"><AboutBiz/></div>
            {/* <div className="review-box"> */}
            <ReviewIndex></ReviewIndex>
            {/* </div> */}
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
            </div>
              
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopShow;
