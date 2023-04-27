import React from "react";
import ViewConfirmedOrders from "./ViewConfirmedOrders";

// Import the OrderProvider from the OrderContext
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
  return (
    <>
      {/* Wrap ViewConfirmedOrders with OrderProvider */}
      <OrderProvider>
        <ViewConfirmedOrders />
      </OrderProvider>
    </>
  );
};

export default index;
