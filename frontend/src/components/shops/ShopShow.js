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

const ShopShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { shopId } = useParams();

  console.info("shopId--->", shopId);

  useEffect(() => {
    dispatch(fetchReviews(shopId));
    dispatch(fetchShop(shopId));
  }, [dispatch]);

  const shop = useSelector(getShop);
  const reviews = useSelector(getReviews);

  console.info("shop--->", shop);
  console.info("reviews--->", reviews);

  let sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    sessionUser = {};
  }

  const [rating, setRating] = useState(0);

  const total_review = reviews.length;


  const handleNew = (e) => {
    e.preventDefault();
    if (sessionUser && sessionUser.id) {
      history.push(`/shops/${shopId}/review`);
    } else {
      history.push("/login");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    history.push(`/shops/${shopId}/${userReviewId}/edit`);
  };

  const userReview = reviews.find(
    (review) => review.userFname === sessionUser.firstName
  );

  const userReviewId = userReview ? userReview.id : null; // review id

  const reviewButton = userReview ? (
    <button type="submit" id="rev-sub-btn" onClick={handleUpdate}>
      <i id="rev-sub-star" className="far fa-star"></i>Update Your Review
    </button>
  ) : (
    <button type="submit" id="rev-sub-btn" onClick={handleNew}>
      <i id="rev-sub-star" className="far fa-star"></i>Write a Review
    </button>
  );

  useEffect(() => {
    if (shop) {
      setRating(shop.rating);
    }
  }, [shop]);

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/shops/${shopId}/review`);
  };

  if (!shop) {
    console.info("test");
    return <div>Loading....</div>;
  }

  return <>
  <div className="show-container">
  {/* Shop Image and Details */}
  <div className="image-cover">
    <img className="shop-pic" src={shop.photo} alt="shop picture" />
    <div className="shop-image-overlay">
      <h1 className="shop-name">{shop.name}</h1>
      <div className="img-rating">
        {/* <ul className="rating-list"> */}
        {/* <li className="rating-stars"> */}
        <RatingStars rating={rating} setRating={setRating} readOnly={true} />
        <p className="shop-rating">{shop.rating}</p>

        {/* </li> */}
        {/* <li className="shop-rating"></li> */}
        {/* </ul> */}
      </div>
      <div className="total-review">{total_review} reviews</div>

      <div className="shop-content">
        <i class="fa-solid fa-circle-check"></i>
        <span className="check-text"> Claimed</span>
        <span className="check-text1"> • $$ • Ice Cream, Milkshake</span>
        <p className="hours">
          <span style={{ color: "rgba(4, 197, 133, 1)" }}>Open </span>
          {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
        </p>
      </div>
    </div>
  </div>
  <div className="review-part">{reviewButton}</div>
  {/* Middle Section */}
  <div className="middle-page">
    <div className="middle-container">
      {/* Left Section */}
      <div className="show-split show-left">
        <div className="map-show-hour">
          <div className="biz-header">
            <div className="item">
              <h1>Location & Hours</h1>
            </div>
          </div>
          <hr className="show-hr"></hr>
          {/* <div className="address-section"> */}

          <div className="address-map">
            <div className="middle-section">
              <div className="map-section">
                <MeltMapWrapper className="map-style" />
              </div>
              <div className="address-section">
                <p>{shop.address}</p>
                <p>
                  {shop.city}, {shop.zipCode}
                </p>
                <p>{shop.state}</p>
              </div>
            </div>
            <div className="day-hours">
              <p>
                Mon {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
              </p>
              <p>
                Tue {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
              </p>
              <p>
                Wed {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
              </p>
              <p>
                Thu {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
              </p>
              <p>
                Fri {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
              </p>
              <p>
                Sat {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
              </p>
              <p>
                Sun {shop.openingTime}:00 AM - {shop.closingTime}:00 PM
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="amenities">
          <h1>Highlights from the Business</h1>
          <Highlights />
        </div>
        <div className="about-biz">
          <AboutBiz />
        </div>
      </div>

      {/* Right Section */}
      <div className="show-split show-right">
        <div className="show-card">
          <ul className="card-content">
            <li className="card-link">
              <a href={shop.link} target="_blank">
                {shop.link}
              </a>
            </li>
            <hr className="card-hr" />
            <li
              className="address-title"
              style={{ color: "rgba(2, 122, 151, 1)" }}
            >
              Address:
            </li>
            <li className="card-street">{shop.address}</li>
            <li className="card-address">
              {shop.city}, {shop.state}, {shop.zipCode}
            </li>
            <hr className="card-hr" />
            <li className="card-phoneNumber">{shop.phoneNumber}</li>
          </ul>
        </div>
      </div>
    </div>
    <ReviewIndex />
  </div>
</div>;

  </>;
};

export default ShopShow;
