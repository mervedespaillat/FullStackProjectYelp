import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { createReview, editReview, fetchReview, getReview } from "../../store/reviews"
import { useEffect, useState } from "react"

// I need to figure it out how im gonna get the review id 


const ReviewForm = () => {
    const dispatch = useDispatch()
    const {reviewId} = useParams()

    let review = useSelector(getReview(reviewId))
    review ||= {}

    const[body, setBody] = useState(review.body)
    const[rating, setRating] = useState(review.rating)
    const {shopId} = useParams()

    useEffect(()=>{
        if(review.id){
            dispatch(fetchReview(review.id))
        }
    },[review])

    const handleSubmit = (e) => {
        e.preventDefault()

        const requireFunction = review.id ? editReview : createReview

        const formData = {
            ...review,
            body: body,
            shopId: shopId,
            rating: rating
        }
        dispatch(requireFunction(formData))
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const buttonText = review.id ? "Edit Report" : "Create Report"

    return(
        <>
        <div className="review-container">
            <div className="review-form-container">
                <div className="form-content">
                    <div className="form-header">
                        <div className="shop-name-header"> Shop name as a a tag</div>
                        <div style={{color: "rgba(2,122,151,1)"}}>Read our review guidelines</div>
                    </div>
                    <div className="review-form">
        <form onSubmit={handleSubmit}>
                    <div className="form-holder">
                        <div className="rating-button"> put here starts</div>
                        </div>
                        <h1>{buttonText}</h1>
            <label>
                Body
                <input type='text' onChange={handleBody} value={body}placeholder="Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the strawberry ice cream, and wow... there are no words. A classic ice cream done right.There is about million flavor available, you really can't go wrong. Not mush else to say besides go see for yourself! You won't be disappointed"></input>
            </label>
            <label>
                Rating
                <input type='text' onChange={handleRating} value={rating}></input>
            </label>
            <input type='submit' value={buttonText}/>
        </form>
        
                    </div>
                    </div>
    
        </div>
        </div>
        </>
    )
}

export default ReviewForm