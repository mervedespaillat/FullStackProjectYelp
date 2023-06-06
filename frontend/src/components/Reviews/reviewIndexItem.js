import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';
// import { formatDate } from '../util/dateUtil';


const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch()

    // const date = formatDate(review.createdAt)


    const handleClick = () =>{
        dispatch(deleteReview(review.id))
    }
    return (
        <>
        {/* <Link to={`reviews/${review.id}`}>{date}</Link> */}
        <li>{review.body}</li>
        <li>{review.rating}</li>
        <Link to={`reviews/${review.id}/edit`}>Edit</Link>
        <button onClick={handleClick}>Delete Review</button>
        </>
    )

}

export default ReviewIndexItem