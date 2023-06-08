import { useSelector } from "react-redux"
import {  useParams } from "react-router-dom/cjs/react-router-dom.min";
import {getReview} from "../../store/reviews";

import "./reviewForm"
// I need to figure it out how im gonna get the review id

const ReviewButton = () => {
  
    //   const dispatch = useDispatch();
      const { reviewId } = useParams();
    //   const history  = useHistory()
    
      let review = useSelector(getReview(reviewId));
      review ||= {}; 
    
    //   const [body, setBody] = useState(review.body);
    //   const [rating, setRating] = useState(review.rating);
    //   const { shopId } = useParams();
    
    //   useEffect(() => {
    //     if (review.id) {
    //       dispatch(fetchReview(review.id));
    
    //     }
    //   }, [review]);
    
    //   const [errors, setErrors] = useState([])
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const requireFunction = review.id ? editReview : createReview;
    
    //     const formData = {
    //       ...review,
    //       body: body,
    //       shopId: shopId,
    //       rating: rating,
    //     };
    //     return dispatch(requireFunction(formData))
    //     .then(() => {history.push(`/shops/${shopId}`)})
    //     .catch(async (response) => {
    //         const data = await response.json()
    //         setErrors(data.errors)
    //     });
    //   };
    
    
    
    //   const handleBody = (e) => {
    //     setBody(e.target.value);
    //   };
    
    //   const handleRating = (e) => {
    //     setRating(e.target.value);
    //   };
    
      const buttonText = review.id ? "Edit Report" : "Create Report";
    // return sessionUser ? (
    //     <link to={`/reviews/`}
    // )
    return(
        <button>{buttonText}</button>
    )

}

export default ReviewButton