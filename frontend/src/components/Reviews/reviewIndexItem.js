import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/reviews';
// import { formatDate } from '../util/dateUtil';
import "./reviewIndex.css"
import RatingStars from '../RatingStars/ratingStars';

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch()

    // const date = formatDate(review.createdAt)
    const [rating, setRating] = useState(review.rating)
    const handleClick = () =>{
        
        dispatch(deleteReview(review.id))
    }
    if(!review) return null

    {console.log("setRating=>", review.rating)}

    return (
        <>
        {/* <Link to={`reviews/${review.id}`}>{date}</Link> */}
        <ul>
        <li>{review.userFname} {review.userLname}</li>
        <RatingStars rating={review.rating} setRating={setRating} readOnly={true}/>
        <li>{review.body}</li>
        <li><img src={review.userPhoto} alt="" className='user-photo'/></li>
        </ul>
        <Link to={`reviews/${review.id}/edit`}>Edit</Link>
        <button onClick={handleClick}>Delete Review</button>
        </>
    )

}

export default ReviewIndexItem