import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SellerContext from "../../contexts/SellerContext";

const SellerDashboard = () => {

	const { seller, getOneSeller } = useContext(SellerContext);
  const currentSellerId = localStorage.getItem("uId");

if (currentSellerId) {
  // use currentSellerId in the code snippet here
} else {
  // handle the case where currentSellerId is not defined or has an invalid value
}


	const id = localStorage.getItem("uId");
	// console.log(id);
	getOneSeller(id);
	return (
		<>
			<h1 className="mt-4 text-4xl text-center">Seller Dashboard</h1>
<div className="flex flex-col w-1/6 h-screen ml-[8rem] mt-2 rounded-3xl">
  <div className="flex items-center h-screen w-full -mt-[5rem] justify-center">
    <div className="max-w-xs">
      <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
          <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="Seller's profile picture" />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{seller.name}</h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>Seller's Occupation/Title</p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Seller ID</td>
                <td className="px-2 py-2">{seller._id}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Seller Rating</td>
                <td className="px-2 py-2">Seller's Rating (out of 5 stars)</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{seller.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-3">
            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute ml-[20rem] flex-col sm:flex-wrap sm:flex-row justify-center">
    <div className="grid grid-cols-2 gap-4 mt-8">
	<Link to="/product-add">	
  <div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addPackage.png')] rounded-3xl">
    <h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
      Add Package
    </h1>
  </div>
</Link>

      <Link to="/seller-create-package">
        <div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addPackage.png')] rounded-3xl">
          <h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
            View Orders
          </h1>
        </div>
      </Link>
      <Link to={`/sellerReview?id=${currentSellerId}`}>
        <div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addPackage.png')] rounded-3xl">
          <h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
        My Reviews
          </h1>
        </div>
      </Link>
      <Link to="/seller-create-package">
        <div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addPackage.png')] rounded-3xl">
          <h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
            Add Package
          </h1>
        </div>
      </Link>
    </div>
    
</div>
</div>

		</>
	);
};

export default SellerDashboard;
