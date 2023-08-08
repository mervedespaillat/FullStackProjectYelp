import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  createReview,
  editReview,
  fetchReview,
  getReview,
} from "../../store/reviews";
import { useEffect, useState } from "react";
import "./reviewForm.css";
import RatingStars from "../RatingStars/ratingStars";
import { getShop, getShopById } from "../../store/shops";
import ShopIndexItem from "../shops/ShopIndexItem";
import ErrorModal from "./ErrorModal";
import { useRef } from "react";
import { fetchShop } from "../../store/shops";
// I need to figure it out how im gonna get the review id

const ReviewForm = () => {
  const dispatch = useDispatch();
  // const { reviewId } = useParams();
  // console.log("review id=", reviewId)
  const history = useHistory();

  // let review = useSelector(getReview(reviewId));
  // review ||= {};

  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const { shopId } = useParams();
  const shop = useSelector(state => state.shops.shop);   

  const [errors, setErrors] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    dispatch(fetchShop(shopId));
  }, [dispatch, shopId]);


  if (!shop) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading shop data...</div>
      </div>
    );
  }

  const shopName = shop.name;


  const handleSubmit = (e) => {
    e.preventDefault();

    // const requireFunction = review.id ? editReview : createReview;

    const formData = {
      // ...review,
      body: body,
      shopId: shopId,
      rating: rating,
    };
    return dispatch(createReview(formData))
      .then(() => {
        history.push(`/shops/${shopId}`);
      })
      .catch(async (response) => {
        const data = await response.json();
        setErrors(data.errors);
        setShowErrorModal(true); 
      });
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  // const handleRating = (e) => {
  //   setRating(e.target.value);
  // };

  const buttonText = "Create Review";

  return (
    <>
        <div className="review-form-container">
          <div className="form-content">
            <div className="form-header">
              <div className="shop-name-header">
                <ShopIndexItem className="review-shop-name" shop={shop}>
                  {shopId}
                </ShopIndexItem>
              </div>
            </div>
            <div className="review-form">
              <form onSubmit={handleSubmit} className="review-form-template">
                <div className="form-holder">
                  <div className="rating-button-o">
                    <RatingStars
                      rating={rating}
                      setRating={setRating}
                      className="rating-on-form"
                    />
                    <span className="select-star">Select your rating</span>
                  </div>
                </div>
                <p className="explanation">
                  A few things to consider in your review
                </p>
                <label>
                  <textarea
                    className="review-body"
                    type="text"
                    onChange={handleBody}
                    value={body}
                  ></textarea>
                </label>
                <ul>
                  {errors.map((error, i) => {
                    return <li key={i} className="review-error"><span><i class="fa-solid fa-circle-exclamation"></i></span> {error}</li>;
                  })}
                </ul>
   {/* {showErrorModal && (
        <ErrorModal ref={modalRef} errors={errors} onClose={handleModalClose} />
      )}              */}
       <div className="post-btn">
                  <input
                    className="post-review create-review"
                    type="submit"
                    value={buttonText}
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default ReviewForm;
