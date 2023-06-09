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
import "./reviewForm";
import RatingStars from "../RatingStars/ratingStars";
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
              <div className="shop-name-header"> Shop name as a a tag</div>
              <div className="guidelines">Read our review guidelines</div>
            </div>
            <div className="review-form">
              <form onSubmit={handleSubmit}>
                <div className="form-holder">
                  <div className="rating-button">
                    <input
                      type="text"
                      placeholder="rating"
                      onChange={handleRating}
                    ></input>
                    <RatingStars rating={rating} setRating={setRating} />
                    {console.log("Ratig =>", rating)}
                  </div>
                </div>
                <p className="explanation">
                  A few things to consider in your review
                </p>
                <label>
                  <input
                    className="review-body"
                    type="text"
                    onChange={handleBody}
                    value={body}
                  ></input>
                </label>
                <ul>
                  {errors.map((error, i) => {
                    return <li key={i}>{error}</li>;
                  })}
                </ul>
              </form>
            </div>
          </div>
          <div className="photo-load"></div>
        </div>
        <div className="post-btn">
          <input
            className="post-review"
            type="submit"
            value={buttonText}
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div className="review-main"></div>
    </>
  );
};

export default ReviewForm;
