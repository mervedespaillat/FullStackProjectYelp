import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../store/reviews";
import { useEffect } from "react";
import ReviewIndexItem from "./reviewIndexItem";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const ReviewIndex = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);
  const { shopId } = useParams();

  useEffect(() => {
    dispatch(fetchReviews(shopId));
  }, []);

  const listedReviews = reviews.map((review) => (
    <ReviewIndexItem review={review} />
  ));

  return (
    <>
      <ul>{listedReviews}</ul>
      <Link to="/reviews/new">Write a Review</Link>
    </>
  );
};

export default ReviewIndex;
