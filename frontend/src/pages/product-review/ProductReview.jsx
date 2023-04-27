import React, { useState, useEffect } from "react";
import ProductReviewAPI from "../../contexts/api/ReviewAPI";
import ReactStars from "react-rating-stars-component";

const ProductReview = () => {
	const [reviewValue, setReviewValue] = useState(0);
	const [reviewValues, setReviewValues] = useState(0);
	const [highlightedStars, setHighlightedStars] = useState([false, false, false, false, false]);
	const [commentValue, setCommentValue] = useState("");
	const [reviewData, setReviewData] = useState([]);
	const [stats, setStats] = useState(null);

	const productId = localStorage.getItem("productIdr");





	//get all reviews
	useEffect(() => {
		const getReviews = async (reviewValues) => {
			try {
				const reviews = await ProductReviewAPI.getProductReviews();
				const reviewData = reviews.map((review) => ({
					id: review._id,
					productId: review.product_id,
					reviewValue: review.review_value,
					text: review.text,
				}));
				setReviewData(reviewData);
				console.log(reviewData);

				// Extract the review values into an array
				let meanReviewValue, medianReviewValue, modeReviewValue, stdDevReviewValue;

				const values = reviewData.map((review) => review.review_value);
				const newStats = {
					reviewValues: values,
					meanReviewValue: values.reduce((sum, value) => sum + value, 0) / values.length,
					medianReviewValue: values.sort((a, b) => a - b)[Math.floor(values.length / 2)],
					modeReviewValue: values.reduce(
						(currentMax, value, index, arr) => {
							const count = arr.filter((val) => val === value).length;
							if (count > currentMax.count) {
								return { value: value, count: count };
							} else {
								return currentMax;
							}
						},
						{ value: null, count: 0 }
					).value,
					stdDevReviewValue: Math.sqrt(
						values.reduce((sum, value) => sum + Math.pow(value - meanReviewValue, 2), 0) / values.length
					),
					percentFiveStar: (values.filter((value) => value === 5).length / values.length) * 100,
					percentFourStar: (values.filter((value) => value === 4).length / values.length) * 100,
					percentThreeStar: (values.filter((value) => value === 3).length / values.length) * 100,
					percentTwoStar: (values.filter((value) => value === 2).length / values.length) * 100,
					percentOneStar: (values.filter((value) => value === 1).length / values.length) * 100,
				};
				setStats(newStats);

				// Print the summary statistics
				console.log(`Percent of 5 star reviews: ${newStats.percentFiveStar}%`);
				console.log(`Percent of 4 star reviews: ${newStats.percentFourStar}%`);
				console.log(`Percent of 3 star reviews: ${newStats.percentThreeStar}%`);
				console.log(`Percent of 2 star reviews: ${newStats.percentTwoStar}%`);
				console.log(`Percent of 1 star reviews: ${newStats.percentOneStar}%`);
			} catch (error) {
				console.error(error);
			}
		};
		getReviews(reviewValues);
	}, []);

	const handleRatingChange = (event) => {
		const selectedStars = Number(event.target.value);
		setReviewValue(selectedStars);
		setHighlightedStars(highlightedStars.map((_, index) => index < selectedStars));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(`Submitted review value: ${reviewValue}`);
		try {
			const response = await ProductReviewAPI.createProductReview({
				product_id: productId, 
				review_value: reviewValue,
				text: commentValue,
			});
			console.log(response);
			window.location.reload(true);
		} catch (error) {
			console.error(error);
		}
	};

	const handleStarClick = (index) => {
		const selectedStars = index + 1;
		setReviewValue(selectedStars);
		setHighlightedStars(highlightedStars.map((_, starIndex) => starIndex < selectedStars));
	};

	const handleCommentChange = (event) => {
		setCommentValue(event.target.value);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Product Review Page</h1>
			<form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
				<fieldset className="rating flex justify-center">
					{highlightedStars.map((highlighted, index) => (
						<React.Fragment key={index}>
							<input
								type="radio"
								id={`star${index + 1}`}
								name="rating"
								value={index + 1}
								checked={reviewValue === index + 1}
								onChange={handleRatingChange}
								className="hidden"
							/>
							<label
								htmlFor={`star${index + 1}`}
								className={`block text-4xl ${
									highlighted ? "text-yellow-400" : "text-gray-400"
								} hover:text-yellow-400 cursor-pointer`}
								onClick={() => handleStarClick(index)}
							>
								&#9733;
							</label>
						</React.Fragment>
					))}
				</fieldset>
				<div className="mt-4">
					<label htmlFor="comment" className="block font-medium">
						Comment
					</label>
					<textarea
						id="comment"
						name="comment"
						rows="3"
						className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						value={commentValue}
						onChange={handleCommentChange}
					></textarea>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
					>
						Submit Review
					</button>
				</div>
			</form>

			<div>
				{reviewData.map((review) => {
					return (
						<div key={review.id} className="mt-2 ml-5 mr-5 bg-white p-4 sm:p-6 rounded-lg shadow-md">
							<h1 className="text-lg font-semibold mb-2">Product ID:{review.productId}</h1>
							<div className="flex items-center mb-2">
								<ReactStars count={5} size={20} value={review.reviewValue} activeColor="#ffd700" />
								<span className="text-sm font-semibold ml-2">{review.reviewValue} Stars</span>
							</div>
							<p className="text-base font-semibold">{review.text}</p>
						</div>
					);
				})}
			</div>

			<div className="mt-5 mb-5 ml-5">
				<div className="flex items-center mb-3">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>First star</title>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Second star</title>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Third star</title>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Fourth star</title>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-300 dark:text-gray-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Fifth star</title>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
				</div>
				<p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
				<div className="flex items-center mt-4">
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
					<div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div className="h-5 bg-yellow-400 rounded" style={{ width: "70%" }} />
					</div>
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
				</div>
				<div className="flex items-center mt-4">
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
					<div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div className="h-5 bg-yellow-400 rounded" style={{ width: "17%" }} />
					</div>
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
				</div>
				<div className="flex items-center mt-4">
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
					<div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div className="h-5 bg-yellow-400 rounded" style={{ width: "8%" }} />
					</div>
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
				</div>
				<div className="flex items-center mt-4">
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
					<div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div className="h-5 bg-yellow-400 rounded" style={{ width: "4%" }} />
					</div>
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
				</div>
				<div className="flex items-center mt-4">
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
					<div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div className="h-5 bg-yellow-400 rounded" style={{ width: "1%" }} />
					</div>
					<span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
				</div>
			</div>
		</>
	);
};

export default ProductReview;
