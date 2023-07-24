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
        <div className='user-details'>
            <div className='profile-photo'><img src={review.userPhoto} alt="" className='user-photo'/></div>
            <div className='profile-name'>{review.userFname} {review.userLname}</div>
            <div className='delete-btn-review'><button onClick={handleClick}>Delete</button></div>
        </div>
        <div className='rating-container'> <RatingStars rating={review.rating} setRating={setRating} readOnly={true}/>
        <p>{date}</p></div>
        <div className='rating-context'>
            {review.body}</div>
        </div>
    )

}

export default ReviewIndexItem