import React, { useState, useEffect } from "react";
import SellerReviewAPI from "../../contexts/api/ReviewAPI";
import ReactStars from "react-rating-stars-component";

const SellerReview = () => {
    const [reviewValue, setReviewValue] = useState(0);
	const [highlightedStars, setHighlightedStars] = useState(0);
	const [commentValue, setCommentValue] = useState("");
	const [reviewData, setReviewData] = useState([]);
	
	useEffect(() => {
		const getReviews = async () => {
			try {
				const reviews = await SellerReviewAPI.getAllSellerReviews();
				const reviewData = reviews.map((review) => ({
					id: review._id,
					sellerId: review.seller_id,
					reviewValue: review.review_value,
					text: review.text,
				}));
				setReviewData(reviewData);
				console.log(reviewData);
			} catch (error) {
				console.error(error);
			}
		};
		getReviews();
	}, []);

	const handleRatingChange = (event) => {
		const selectedStars = Number(event.target.value);
		setReviewValue(selectedStars);
		setHighlightedStars(selectedStars);
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

	const handleStarClick = (event) => {
		const selectedStars = Number(event.target.id.replace("star", ""));
		setReviewValue(selectedStars);
		setHighlightedStars(selectedStars);
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
	}

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Seller Review Page</h1>
			<form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
				<div className="flex items-center justify-center">{starElements}</div>
				<div className="mt-4">
					<label htmlFor="comment" className="block text-lg font-medium text-gray-700">
						Comment:
					</label>
					<textarea
						id="comment"
						name="comment"
						className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						rows="3"
						value={commentValue}
						onChange={(event) => setCommentValue(event.target.value)}
					></textarea>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
					>
						Submit
					</button>
				</div>
				<input type="hidden" name="review_value" id="review-value" value={reviewValue} />
			</form>

			<div>
				{reviewData.map((review) => {
					return (
						<div key={review.id} className="mt-2 ml-5 mr-5 bg-white p-4 sm:p-6 rounded-lg shadow-md">
							<h1 className="text-lg font-semibold mb-2">Seller ID:{review.sellerId}</h1>
							<div className="flex items-center mb-2">
								<ReactStars count={5} size={20} value={review.reviewValue} activeColor="#ffd700" />
								<span className="text-sm font-semibold ml-2">{review.reviewValue} Stars</span>
							</div>
							<p className="text-base font-semibold">{review.text}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default SellerReview;
