import csrfFetch from '../store/csrf'

export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";
export const RECEIVE_LAST_REVIEWS = "reviews/RECEIVE_LAST_REVIEWS";

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
};
export const receiveReview = (review) => {
    debugger
  return {
    type: RECEIVE_REVIEW,
    review,
  };
};
export const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId,
  };
};

export const receiveLastReviews = (reviews) => {
  return {
    type: RECEIVE_LAST_REVIEWS,
    reviews,
  };
};

export const getReview = (reviewId) => (state) =>
  state.review ? state.review[reviewId] : null;

export const getReviews = (state) =>
  state.review ? Object.values(state.review) : [];

// export const getReviewsByShopId = (shopId) => (state) => {
//     return Object.values(state.reviews).filter((review) => review.shopId === shopId);
//   };
export const getReviewsByShopId = (shopId) => (state) => {
  const reviews = state.review || {}; // Set default value as an empty object
  return Object.values(reviews).filter((review) => review.shopId === shopId);
};

export const fetchReviews = (shopId) => async (dispatch) => {
  const response = await fetch(`/api/shops/${shopId}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(receiveReviews(reviews));
  }
};
export const fetchReview = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`);
  if (response.ok) {
    const reviewObj = await response.json();
    dispatch(receiveReview(reviewId));
  }
};

export const createReview = (review) => async (dispatch) => {

  const { body, rating, shopId } = review;

  const response = await csrfFetch(`/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({reviews: {body, rating, shopId} }),
  });
  if(response.ok){
    const reviewObj = await response.json();
    dispatch(receiveReview(reviewObj));
  }
  else{
    const data = await response.json()
    console.log(data.errors)
  }
};

export const editReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  const reviewObj = await response.json();
  dispatch(receiveReview(reviewObj));
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(removeReview(reviewId));
};

export const fetchLastReviews = () => async (dispatch) => {
  const response = await fetch(`/api/recent_reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(receiveLastReviews(reviews));
  }
};

const reviewsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...action.reviews };
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_LAST_REVIEWS:
      return { ...action.reviews };
    default:
      return state;
  }
};

export default reviewsReducer;
