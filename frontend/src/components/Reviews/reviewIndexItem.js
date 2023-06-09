import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/reviews';
// import { formatDate } from '../util/dateUtil';
import "./reviewIndex.css"
import RatingStars from '../RatingStars/ratingStars';
import { formatDateTime } from '../../util/date';

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch()

    // const date = formatDate(review.createdAt)
    const [rating, setRating] = useState(review.rating)
    const handleClick = () =>{
        
        dispatch(deleteReview(review.id))
    }
    if(!review) return null

    const date = formatDateTime(review.createdAt)

    {console.log("setRating=>", review.rating)}

    return (
        <div className='review-container'>
        {/* <Link to={`reviews/${review.id}`}>{date}</Link> */}
        {/* <ul className="comment-icons">
        <li><img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_helpful_bulb_v2.yji-927d56e36e3a11c12e58.svg" alt"" </li>
        <li><img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_thanks_v2.yji-1fec900fe14a2fa15c10.svg" alt"" </li>
        <li><img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_love_this_v2.yji-e4b17143e9d097f34029.svg" alt"" </li>
        <li><img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_oh_no_v2.yji-d19e61e9dc84c2e954c1.svg" alt"" </li>
        </ul>
        <ul className="comment-tags">
        <li>Helpful 3</li>
        <li>Thanks 0</li>
        <li>Love this 1</li>
        <li>Oh no 0</li>
        </ul>
        <Link to={`reviews/${review.id}/edit`}>Edit</Link>
        <button onClick={handleClick}>Delete Review</button> */}
        <div className='user-details'>
            <div className='profile-photo'><img src={review.userPhoto} alt="" className='user-photo'/></div>
            <div className='profile-name'>{review.userFname} {review.userLname}</div>
        </div>
        <div className='rating-container'> <RatingStars rating={review.rating} setRating={setRating} readOnly={true}/>
        <p>{date}</p></div>
        <div className='rating-context'>
            {review.body}</div>
        <div className='icon-container'>
            <ul className="comment-icons">
        <li><img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_helpful_bulb_v2.yji-927d56e36e3a11c12e58.svg" alt=""></img> </li>
        <li><img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_thanks_v2.yji-1fec900fe14a2fa15c10.svg" alt=""></img> </li>
        <li> <img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_love_this_v2.yji-e4b17143e9d097f34029.svg" alt=""></img> </li>
        <li><img src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_oh_no_v2.yji-d19e61e9dc84c2e954c1.svg" alt=""></img> </li>
        </ul>
        <ul className="comment-tags">
        <li>Helpful 3</li>
        <li>Thanks 0</li>
        <li>Love this 1</li>
        <li>Oh no 0</li>
        </ul>
        </div>
        </div>
    )

}

export default ReviewIndexItem