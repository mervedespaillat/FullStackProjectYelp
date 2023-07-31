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
import { getShop } from "../../store/shops";
import ShopIndexItem from "../shops/ShopIndexItem";
// I need to figure it out how im gonna get the review id

const ReviewForm = () => {
  const dispatch = useDispatch();
  const { reviewId } = useParams();
  const history = useHistory();

  let review = useSelector(getReview(reviewId));
  review ||= {};

  const [body, setBody] = useState(review.body);
  const [rating, setRating] = useState(review.rating);
  const { shopId } = useParams();
  const shop = useSelector(getShop(shopId)) 
  const shopName = shop.name
  useEffect(() => {
    if (review.id) {
      dispatch(fetchReview(review.id));
    }
  }, [review]);

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requireFunction = review.id ? editReview : createReview;

    const formData = {
      ...review,
      body: body,
      shopId: shopId,
      rating: rating,
    };
    return dispatch(requireFunction(formData))
      .then(() => {
        history.push(`/shops/${shopId}`);
      })
      .catch(async (response) => {
        const data = await response.json();
        setErrors(data.errors);
      });
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const buttonText = review.id ? "Edit Review" : "Create Review";

  return (
    <>
      <div className="review-container">
        <div className="review-form-container">
          <div className="form-content">
            <div className="form-header">
              <div className="shop-name-header"> 
              <ShopIndexItem className="review-shop-name" shop={shop}>
                        {shop.id}.{shopName}
               </ShopIndexItem>
            </div>
            </div>
            <div className="review-form">
              <form onSubmit={handleSubmit}>
                <div className="form-holder">
                  <div className="rating-button-o">
                    <RatingStars rating={rating} setRating={setRating} className="rating-on-form"  />
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
                {/* <ul>
                  {errors.map((error, i) => {
                    return <li key={i}>{error}</li>;
                  })}
                </ul> */}
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
            </div>
    </>
  );
};

export default ReviewForm;
