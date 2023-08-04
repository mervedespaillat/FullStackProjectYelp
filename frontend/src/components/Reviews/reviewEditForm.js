// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useHistory } from "react-router-dom";
// import { fetchShop } from "../../store/shops";
// import { getShops } from "../../store/shops";
// import { getReview } from "../../store/reviews";
// import { fetchReviews } from "../../store/reviews";
// import { editReview } from "../../store/reviews";

// const ReviewEditForm = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const {reviewId} = useParams();
//     const {shopId} = useParams();
//     const review = useSelector(getReview(reviewId))
//     const shop = useSelector(getShops(shopId))
//     const [body, setBody] = useState(review.body);
//     const [rating, setRating] = useState(review.rating);

//     const handleSubmit = e => {
//         e.preventDefault();
//         const reviewObj = {
//             body,
//             rating,
//             shop_id: shopId
//         }

//         dispatch(editReview(reviewObj, reviewId));
//         history.push(`/shops/${shopId}`);
//     }

//     useEffect(() => {
//         dispatch(fetchShop(shopId))
//     }, [shopId])

//     useEffect(() => {
//         dispatch(fetchReviews(shopId))
//     }, [shopId])

//     return (
//         <div id="review-form-container">

//             <form id="review-form">
//                 <h1 id="form-biz-name">{shop.name}</h1>
//                 <div id="form-details-container">
//                     <label id="form-stars">
//                         <input type="text" 
//                             placeholder="1-5" 
//                             value={rating}
//                             onChange={(e) => setRating(e.target.value)}
//                             required>
//                         </input>
//                     </label>

//                     <label id="form-review-body">
//                         <input type="textarea" 
//                             placeholder="Write your review here!"
//                             value={body}
//                             onChange={(e) => setBody(e.target.value)}
//                             required>
//                         </input>
//                     </label>
//                 </div>

//                 <button id="form-review-btn" type="submit" onClick={handleSubmit}>Update Review</button>
//             </form>
//         </div>
//     )
// }

// export default ReviewEditForm;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchShop } from "../../store/shops";
import { fetchReviews, editReview } from "../../store/reviews";
import { getReviews } from "../../store/reviews";
import { getShops } from "../../store/shops";
import ShopIndexItem from "../shops/ShopIndexItem";
import RatingStars from "../RatingStars/ratingStars";
import './reviewForm.css'

const ReviewEditForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { reviewId, shopId } = useParams();
  const reviews = useSelector(getReviews);
  const shops = useSelector(getShops)


  useEffect(() => {
    dispatch(fetchShop(shopId));
    dispatch(fetchReviews(shopId));
  }, [dispatch, shopId]);

  const review = useSelector(() =>
   reviews.find((r) => r.id === Number(reviewId))
  );
  const shop = useSelector(() =>
    shops.find((s) => s.id === Number(shopId))
  );

  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);


  const [errors, setErrors] = useState([]);


  useEffect(() => {
    if (review) {
      setBody(review.body);
      setRating(review.rating);
    }
  }, [review]);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const reviewObj = {
      id: review.id,
      body: body,
      rating: rating,
      shop_id: shopId,
    };

   return  dispatch(editReview(reviewObj))
   .then(()=>{
       history.push(`/shops/${shopId}`);
   })
   .catch(async (response) => {
    const data = await response.json()
    setErrors(data.errors)
   })
  };

  if (!review || !shop) {
    return <div>Loading...</div>;
  }

  return (
    // <div id="review-container">
    //   <form id="review-form" onSubmit={handleSubmit}>
    //     <h1 id="form-biz-name">{shop.name}</h1>
    //     <div id="form-details-container">
    //         <p>sdfasda</p>
    //         <p>dsfsf</p>
    //         <p>dsfsf</p>
    //         <p>dsfsf</p>
    //       <label id="form-stars">
    //         Rating:
    //         <input
    //           type="number"
    //           min={1}
    //           max={5}
    //           value={rating}
    //           onChange={(e) => setRating(e.target.value)}
    //           required
    //         />
    //       </label>

    //       <label id="form-review-body">
    //         Review:
    //         <textarea
    //           placeholder="Write your review here!"
    //           value={body}
    //           onChange={(e) => setBody(e.target.value)}
    //           required
    //         />
    //       </label>
    //     </div>

    //     <button id="form-review-btn" type="submit">
    //       Update Review
    //     </button>
    //   </form>
    //   <p>helllloooooooooooo</p>
    // </div>
        <>
        <div className="review-container">
          <div className="review-form-container">
            <div className="form-content">
              <div className="form-header">
                <div className="shop-name-header"> 
                <ShopIndexItem className="review-shop-name" shop={shop}>
                          {shop.id}.{shop.name}
                 </ShopIndexItem>
              </div>
              </div>
              <div className="review-form">
                <form onSubmit={handleSubmit} className="review-form-template">
                  <div className="form-holder">
                    <div className="rating-button-o">
                      <RatingStars rating={rating} setRating={setRating} className="rating-on-form"  />
                      <span className="select-star">Select your rating</span>
                    </div>
                  </div>
                  <p className="explanation">
                    A few things to consider in your review
                  </p>
            
                  <label id="form-review-body">
           <textarea
           className="review-body"
              placeholder="Write your review here!"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </label>
                  {/* <ul>
                    {errors.map((error, i) => {
                      return <li key={i}>{error}</li>;
                    })}
                  </ul> */}
                    <div className="post-btn">
             <button className="post-review" 
             type="submit">
          Update Review
         </button>
          </div>
                </form>
              </div>
            </div>
          </div>        
        </div>
      </>
  );
};

export default ReviewEditForm;
