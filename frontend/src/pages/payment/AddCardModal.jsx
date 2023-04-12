import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import PaymentAPI from "../../contexts/api/PaymentAPI";

const AddCardModal = ({ closeModal, isOpen, refetch }) => {
	const [cardName, setCardName] = useState("Visa");
	const [cardNumber, setCardNumber] = useState("4242424242424242");
	const [cardExpiryMonth, setCardExpiryMonth] = useState(12);
	const [cardExpiryYear, setCardExpiryYear] = useState(2027);
	const [cardCvc, setCardCvc] = useState(123);

	const userId = "cus_NhCuFcVQHkHfz5";

	// Add new card
	const { mutate: addPaymentMethod, isLoading: addPaymentMethodLoading } = useMutation(
		() => PaymentAPI.addNewCard(userId, cardName, cardNumber, cardExpiryMonth, cardExpiryYear, cardCvc),
		{
			onSuccess: (data) => {
				refetch();
				closeModal();
			},
		}
	);

	const handleAddPaymentMethod = () => {
		addPaymentMethod();
	};

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Add New Card
									</Dialog.Title>
									{/* Add credit card form */}
									<form className="mt-4">
										<div className="mb-4">
											<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
												Card Number
											</label>
											<input
												className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												id="cardNumber"
												type="text"
												placeholder="Card Number"
												value={cardNumber}
												onChange={(e) => setCardNumber(e.target.value)}
											/>
										</div>
										<div className="mb-4">
											<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardName">
												Name on Card
											</label>
											<input
												className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												id="cardName"
												type="text"
												placeholder="Name on Card"
												value={cardName}
												onChange={(e) => setCardName(e.target.value)}
											/>
										</div>

										<div className="flex mb-4">
											<div className="w-1/2 mr-2">
												<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardExpiryMonth">
													Expiry Month
												</label>
												<input
													className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="cardExpiryMonth"
													type="text"
													placeholder="Expiry Month"
													value={cardExpiryMonth}
													onChange={(e) => setCardExpiryMonth(e.target.value)}
												/>
											</div>
											<div className="w-1/2 ml-2">
												<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardExpiryYear">
													Expiry Year
												</label>
												<input
													className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="cardExpiryYear"
													type="text"
													placeholder="Expiry Year"
													value={cardExpiryYear}
													onChange={(e) => setCardExpiryYear(e.target.value)}
												/>
											</div>
										</div>

										<div className="mb-4">
											<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardCVC">
												CVC
											</label>
											<input
												className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												id="cardCVC"
												type="text"
												placeholder="CVC"
												value={cardCvc}
												onChange={(e) => setCardCvc(e.target.value)}
											/>
										</div>
										<div className="flex items-center justify-between">
											<button
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
												type="button"
												disabled={addPaymentMethodLoading}
												onClick={handleAddPaymentMethod}
											>
												Add Card
											</button>
											<button
												className="bg-transparent hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 border border-red-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline"
												type="button"
												onClick={closeModal}
											>
												Cancel
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default AddCardModal;
