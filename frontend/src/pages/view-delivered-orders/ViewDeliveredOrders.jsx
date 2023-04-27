import { useContext, useEffect } from "react";
import OrderContext from "../../contexts/OrderContext";
import OrderAPI from "../../contexts/api/OrderAPI";
import { Link } from "react-router-dom";

function ViewDeliveredOrders() {
  const { orders, refetchOrders } = useContext(OrderContext);


  const sellerName = localStorage.getItem("uId");
  



  return (
    <>
      <h1 className="mt-5 text-4xl text-center">Delivered Orders Page</h1>
      <div className="mt-10 max-w-md mx-auto space-y-5">
        {orders &&
          orders
            .filter((elem) => elem.supplier == sellerName && elem.status == "delivered")
            .map((order) => (
              <div key={order._id} className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-lg font-semibold mb-4">Order ID: {order._id}</p>
                <p className="mb-2">Amount: {order.amount}</p>
                <p className="mb-2">Status: {order.status}</p>
                <p>Is Paid: {order.isPaid ? "Yes" : "No"}</p>
                <div className="grid grid-cols-2 gap-4">
  <Link to={`/sellerReview`}>
    <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
      Rate Seller
    </button>
  </Link>
  <Link to="/productReview">
    <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
      Rate Product
    </button>
  </Link>
</div>

              </div>
            ))}
      </div>
    </>
  );
};

export default ViewDeliveredOrders;
