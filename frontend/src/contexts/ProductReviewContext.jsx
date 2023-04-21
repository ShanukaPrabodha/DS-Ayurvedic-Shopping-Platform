/* eslint-disable no-console */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SellerReviewAPI from "./api/ReviewAPI";

const BASE_URL = "http://localhost:5005/api/review";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

const ReviewContext = createContext();

export function ReviewProvider({ children }) {
	const [reviewValue, setReviewValue] = useState(0);
	const [highlightedStars, setHighlightedStars] = useState(0);
	const [commentValue, setCommentValue] = useState("");
	const [reviewData, setReviewData] = useState([]);

	const getReviews = async () => {
		try {
			const reviews = await SellerReviewAPI.getAllSellerReviews();
			const reviewData = reviews.map((review) => ({
				id: review._id,
				productId: review.product_id,
				reviewValue: review.review_value,
				text: review.text,
			}));
			setReviewData(reviewData);
			console.log(reviewData);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getReviews();
	}, []);
    const handleRatingChange = (event) => {
		const selectedStars = Number(event.target.value);
		setReviewValue(selectedStars);
		setHighlightedStars(selectedStars);
	};
    const handleStarClick = (event) => {
        const starId = event.currentTarget.id;
        const rating = parseInt(starId.replace("star", ""));
        setHighlightedStars(rating);
    };
    
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(`Submitted review value: ${reviewValue}`);
		try {
			const response = await SellerReviewAPI.createSellerReview({
				seller_id: "123", // Replace with the actual seller ID
				review_value: reviewValue,
				text: commentValue,
			});

			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	

    const starElements = [];
	for (let i = 1; i <= 5; i++) {
		const id = `star${i}`;
		const isHighlighted = i <= highlightedStars;
		starElements.push(
			<svg
				key={i}
				id={id}
				className={`w-5 h-5 ${isHighlighted ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} cursor-pointer`}
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				onClick={handleStarClick}
			>
				<title>{`Star ${i}`}</title>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		);
	};

    return (
		<ReviewContext.Provider
			value={{
				reviewValue,
                highlightedStars,
                commentValue,
                reviewData,
                getReviews,
                handleRatingChange,
                handleSubmit,
                starElements,
			}}
		>
			{children}
		</ReviewContext.Provider>
	);
}

export default ReviewContext;