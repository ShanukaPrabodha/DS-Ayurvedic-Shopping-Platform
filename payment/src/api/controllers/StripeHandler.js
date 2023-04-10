const Stripe_Key =
	"sk_test_51MiZM4HiG2lbuJ4ZmVIMooGWLjSSgyMBsAmvd8OwhjrdHN2jPeWZYSFUrnzn31IvEqi0V8HrpIlyvFzsE5OZrOpQ00wlMFnbBj";
const stripe = require("stripe")(Stripe_Key);

// Add a new customer to your Stripe account
export const createNewCustomer = async (request, response, next) => {
	try {
		const customer = await stripe.customers.create({
			name: request.body.name,
			email: request.body.email,
		});
		request.handleResponse.successRespond(response)(customer);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
		next();
	}
};

// Add a new card
export const addNewCard = async (request, response, next) => {
	const { customer_Id, card_Name, card_ExpYear, card_ExpMonth, card_Number, card_CVC } = request.body;

	try {
		const card_Token = await stripe.tokens.create({
			card: {
				name: card_Name,
				number: card_Number,
				exp_month: card_ExpMonth,
				exp_year: card_ExpYear,
				cvc: card_CVC,
			},
		});

		const card = await stripe.customers.createSource(customer_Id, {
			source: `${card_Token.id}`,
		});

		request.handleResponse.successRespond(response)(card);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
	}
};

// Payment Intents API
export const createPaymentIntent = async (request, response, next) => {

	// {
	// 	"customer_Id": "cus_NTwRB5ZlvkizzU",
	// 	"currency": "LKR",
	// 	"amount": "1000"
	// }

	// get user's payment methods
	const paymentMethods = await stripe.paymentMethods.list({
		customer: request.body.customer_Id,
		type: "card",
	});

	// create a payment intent
	const paymentIntent = await stripe.paymentIntents.create({
		amount: request.body.amount * 100,
		currency: request.body.currency,
		customer: request.body.customer_Id,
		payment_method: paymentMethods.data[0].id,
		confirm: true,
		payment_method_types: ["card"],
	});

	request.handleResponse.successRespond(response)(paymentIntent);
	next();
};

// Get customer's payment methods
export const getPaymentMethods = async (request, response, next) => {
	const paymentMethods = await stripe.paymentMethods.list({
		customer: request.body.customer_Id,
		type: "card",
	});

	request.handleResponse.successRespond(response)(paymentMethods);
	next();
};

// Get all customers
export const getAllCustomers = async (request, response, next) => {
	const customers = await stripe.customers.list();

	request.handleResponse.successRespond(response)(customers);
	next();
};
