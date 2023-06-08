import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/reviews';
// import { formatDate } from '../util/dateUtil';
import "./reviewIndex.css"

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch()

    // const date = formatDate(review.createdAt)
    const handleClick = () =>{
        
        dispatch(deleteReview(review.id))
    }
    if(!review) return null
    return (
        <>
        {/* <Link to={`reviews/${review.id}`}>{date}</Link> */}
        <ul>
        <li>{review.body}</li>
        <li>{review.rating}</li>
        <li>{review.userFname}</li>
        <li><img src={review.userPhoto} alt="" className='user-photo'/></li>
        </ul>
        <Link to={`reviews/${review.id}/edit`}>Edit</Link>
        <button onClick={handleClick}>Delete Review</button>
        </>
    )

}

export default ReviewIndexItem