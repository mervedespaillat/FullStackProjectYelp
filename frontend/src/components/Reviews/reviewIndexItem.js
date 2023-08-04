import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";
import "./reviewIndex.css";
import RatingStars from "../RatingStars/ratingStars";
import { formatDateTime } from "../../util/date";
import { useSelector } from "react-redux";

const ReviewIndexItem = ({ review }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const sessionUserId = sessionUser?.id 


  const [rating, setRating] = useState(review.rating);

  const handleClick = (e) => {
    e.preventDefault();
    const reviewId = e.target.id;
    dispatch(deleteReview(reviewId));
  };

  const deleteButton = () => {
    if (review.userId === sessionUserId) {
        return (<button className="del-btn-review" id={review.id} onClick={handleClick}>Delete Review</button>)
    }
}


  if (!review) return null;

  const showUserIcon = !review.userPhoto || review.userPhoto.trim() === "";

  const date = formatDateTime(review.createdAt);

  return (
    <div className="review-container">
      <div className="user-details">
        {showUserIcon ? (
          <div className="profile-photo">
            {/* <i className="fa-solid fa-user"></i> */}
            <img
              src="https://img.freepik.com/premium-vector/flat-instagram-icons-notifications_619991-50.jpg?w=1380"
              alt=""
              className="user-photo userNull"
            ></img>
          </div>
        ) : (
          <div className="profile-photo">
            <img src={review.userPhoto} alt="" className="user-photo" />
          </div>
        )}
        <div className="profile-name">
          {review.userFname} {review.userLname}
        </div>
        <div className="delete-btn-review">
          {/* <button onClick={handleClick}>Delete</button> */}
          {deleteButton()}
        </div>
      </div>
      <div className="ppp">

      <div className="rating-container">
        <RatingStars
          rating={review.rating}
          setRating={setRating}
          readOnly={true}
        />
        <p>{date}</p>
      </div>
      <div className="rating-context">{review.body}</div>
      </div>
    </div>
  );
};

export default ReviewIndexItem;
