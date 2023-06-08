import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, fetchReview } from '../../store/reviews';
// import { formatDateTime } from '..';


const ReviewShow = () => {
const dispatch = useDispatch()

const{reviewId} = useParams()

const {body, rating} = useSelector(getReview(reviewId))

const review = useSelector(getReview(reviewId))
// const updateText = formatDateTime(review.updatedAt) !== formatDateTime(review.createdAt) ? formatDateTime(review.updatedAt) : null


useEffect(()=>{
    dispatch(fetchReview(reviewId))
})

return(
    <>
    <p>{body}</p>
    <p>{rating}</p>
    {/* <p>{formatDateTime(review.createdAt)}/{updateText}</p> */}
    {/* <p>{updateText}</p> */}
    {/* <Link to='/'>Something</Link>  */}
    </>
)

}

export default ReviewShow




















  








